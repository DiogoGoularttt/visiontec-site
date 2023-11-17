import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    height: 100vh;
    background-color: #171717;
`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #000a63;
    max-width: 350px;
    padding: 2rem;
    border-radius: 10px;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #676767;
`;

export const LabelSignup = styled.label`
    font-size: 16px;
    color: #9C9C9C;
`;

export const labelError = styled.label`
    font-size: 14px;
    color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #FFF;
    }
`;