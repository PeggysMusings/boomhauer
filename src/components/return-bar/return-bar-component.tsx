import { BackButton, ReturnBarContainer } from "./return-bar.styles";
import { useNavigate } from "react-router-dom";

export const ReturnBar = () => {
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate(`/`, { replace: true });
    };

    return (
        <ReturnBarContainer id={"return-bar-container"}>
            <BackButton onClick={onBackClick}>Return To Search</BackButton>
        </ReturnBarContainer>
    );
};