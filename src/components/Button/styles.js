import styled from "styled-components";

export const ButtonConatiner = styled.button`
    margin: 0.5%;
    width: 10%;
    background-color: blue;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1.5rem;
    padding: 3px;
    color: white;
    font-family: cursive;
    
    &: hover {
        opacity: 0.5;
    }
`