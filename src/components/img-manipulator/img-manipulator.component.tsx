import { useContext } from "react";
import { SelectionContext } from "../../context/selection.context";
import { ImageContainer, ImgManipulatorContainer } from "./img-manipulator.styles";
import { TxtManipulator } from "../txt-manipulator/txt-manipulator.component";

export const ImgManipulator = () => {
    const { selection } = useContext(SelectionContext);

    return (
        <ImgManipulatorContainer id={"img-manipulator-container"}>
            <ImageContainer alt={`${selection.id}`} src={selection.url} id="selected-image-container" />
            <TxtManipulator />
        </ImgManipulatorContainer>
    );
};