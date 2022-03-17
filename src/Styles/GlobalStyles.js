import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
    }

    .App {
        background: #1e90ff;

        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        padding-top: 50px;
    }

    .loading {
        width: 43px;
        height: 43px;
        background: transparent;
        position: fixed;
        bottom: 2px;
        border: 7px dotted black;
        border-radius: 50%;
        border-top-color: transparent;

        animation: loading infinite .9s linear;

        @keyframes loading {
        to {
            transform: rotate(0);
        } from {
            transform: rotate(360deg);
        }
    }

    }
`;
