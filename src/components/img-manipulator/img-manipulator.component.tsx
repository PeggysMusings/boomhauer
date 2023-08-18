import { useContext, useState } from "react";
import { SelectionContext } from "../../context/selection.context";
import { ImageContainer, ImgManipulatorContainer } from "./img-manipulator.styles";
import { TxtManipulator } from "../txt-manipulator/txt-manipulator.component";

export const ImgManipulator = () => {
    const { selection } = useContext(SelectionContext);

    const [imgSrc] = useState<string>(selection.url);


    return(
            <ImgManipulatorContainer id={"img-manipulator-container"}>
                <ImageContainer alt={`${selection.id}`} src={imgSrc} id="selected-image-container"/>
                <TxtManipulator />
            </ImgManipulatorContainer>
        );
};