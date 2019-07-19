import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns:60% 40% ;
    grid-template-row:auto;
    grid-template-areas:
        "left middle";
    min-height: calc(100vh - 64px);
    margin: 0 12%;
    max-width: 85rem;


    .all-mlb-container {
        grid-area: left;
    }
    .bet-slip-container {
        grid-area: middle;
    }

    .input {
        background: black;
        color: #ff0000;
        display: flex;
        flex-direction: row-reverse;
        justifty-content: center;
        align-items: center;
        font-size: 2rem;
        height: 700px;
        text-align: center;
        width: 400px;   
    }

    .submit-input {
        height: 150px;
        width: 400px;
    }
`;





export default Wrapper;