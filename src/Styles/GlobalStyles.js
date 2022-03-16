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
`;
