import styled from "styled-components";

export const TxtManipulatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    padding-top: 100px;
    justify-self: center;
    align-self: center;
`;

export const TextContainer = styled.input` 
    type: text;
    width: 80%;
    height: 30%;
    display: flex;
    margin: 10px;
`;

export const GenerateButton = styled.button`
    type: text;
    width: 25%;
    height: 10%;
    margin: 10px;
`;