import { useContext } from "react";
import { SelectionContext } from "../../context/selection.context";
import { GenerateButton, TextContainer, TxtManipulatorContainer } from "./txt-manipulator.styles";
import { ISearchResultProps } from "../../types/app.types";

export const TxtManipulator = () => {
    const { selection, setSelection } = useContext(SelectionContext);

    // capture text box input to pass into encodeImageWithQuote
    // const textBoxContent = 

    const onGenerateClick = () => {
        encodeImageWithQuote(selection)
        .then((dataUrl) => duplicateSelectionWithNewUrl(selection, dataUrl))
        .then((newSelection:ISearchResultProps ) => {
            setSelection(newSelection)
            document.getElementById("selected-image-container")?.setAttribute("src", newSelection.url);
        });
    };

    return(
            <TxtManipulatorContainer id={"text-create-container"}>
                <TextContainer placeholder={`${selection.quote}`} />
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

const encodeImageWithQuote = (selection: ISearchResultProps) => {
    const canvas = document.createElement("canvas");
    const img = new Image();
    img.src = selection.url;
    img.crossOrigin = "anonymous";
  
    return new Promise<string>((resolve, reject) => {
        img.onload = () => {
        const context = canvas.getContext("2d");
        if (context) {
            try {
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);
        
                const quote = selection.quote;
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