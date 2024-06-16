import { ChangeEvent, useContext, useState } from "react";
import { SelectionContext } from "../../context/selection.context";
import { GenerateButton, TextContainer, TxtManipulatorContainer } from "./txt-manipulator.styles";
import { ISearchResultProps } from "../../types/app.types";

export const TxtManipulator = () => {
    const { selection, setSelection, originalUrl } = useContext(SelectionContext);
    const [textValue, setTextValue] = useState(selection.quote);

    const onGenerateClick = () => {
        encodeImageWithQuote(selection, originalUrl, textValue)
            .then((dataUrl: string) => duplicateSelectionWithNewUrl(selection, dataUrl))
            .then((newSelection: ISearchResultProps) => {
                setSelection(newSelection)
                document.getElementById("selected-image-container")?.setAttribute("src", newSelection.url);
            });
    };

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
        console.log(textValue);
    };

    return(
            <TxtManipulatorContainer id={"text-create-container"}>
                <TextContainer onChange={ onTextChange } value={textValue} />
                <GenerateButton onClick={ onGenerateClick }>
                    Generate Meme
                </GenerateButton>
            </TxtManipulatorContainer>
        );
};

const duplicateSelectionWithNewUrl = (selection: ISearchResultProps, newUrl: string) => {
    return {
        ...selection,
        url: newUrl
    };
};

const encodeImageWithQuote = (selection: ISearchResultProps, originalUrl: string, quote: string) => {
    const canvas = document.createElement("canvas");
    const img = new Image();
    img.src = originalUrl;
    img.crossOrigin = "anonymous";
  
    return new Promise<string>((resolve, reject) => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const context = canvas.getContext("2d");
            if (context) {
                try {
                    // Clear previous content on canvas
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(img, 0, 0);
            
                    context.fillStyle = "#fff";
                    context.font = "bold 24px Arial";
                    context.strokeStyle = "black";
                    context.lineWidth = 2;
                    context.textAlign = "center";
                    context.strokeText(quote, canvas.width / 2, canvas.height - 50);
                    context.fillText(quote, canvas.width / 2, canvas.height - 50);
                    const dataUrl = canvas.toDataURL();
                    resolve(dataUrl);
                } catch (error) {
                    console.log('ERROR: ', error);
                };
            } else {
                reject();
            }
      };
  
      img.onerror = reject;
    });
};