import { MemeGenContainer } from "./meme-gen.styles";
import { ReturnBar } from "../../components/return-bar/return-bar-component";
import { ImgManipulator } from "../../components/img-manipulator/img-manipulator.component";

export const MemeGen = () => {
    return(
            <MemeGenContainer id={"meme-gen-container"}>
                <ReturnBar />
                <ImgManipulator />
            </MemeGenContainer>
        );
};

