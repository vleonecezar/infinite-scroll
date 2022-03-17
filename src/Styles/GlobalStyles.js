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
        position: fixed;
        bottom: 2px;
        font-size: 1.2rem;
        background: white;
        padding: 3px 5px;
        border: 2px solid #1e90ff;
        border-radius: 10px;
    }
`;
