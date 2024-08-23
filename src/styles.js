import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: darkblue;

    display: flex;
    align-items: top;
    justify-content: center;
`

export const Content = styled.div`
    margin: 4%;
    padding: 2%;
    background-color: lightblue;
    width: 90%;
    height: 90%;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const Board = styled.div`
    font-size: 24px;
    font-family: cursive;
    margin: 4%;
    padding: 2%;
    background-color: white;
    width: auto;
    height: auto;
`
