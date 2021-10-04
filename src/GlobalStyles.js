import { createGlobalStyle } from "styled-components";
import backgroundImageDesktop from "./assets/images/pattern-background-desktop.svg"
import backgroundImageMobile from "./assets/images/pattern-background-mobile.svg"

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        --ff-primary: "Red Hat Display", sans-serif;
        --box-shadow-light: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        --primary-color: white;
        --secondary-color: rgb(252, 249, 249);
        --tertiary-color: hsl(245, 75%, 52%);
        --quaternary-color: black;
        --radius-corner: 15px;
    }

    body {
        background-image: url(${backgroundImageMobile});
        background-repeat: no-repeat;
        background-size: contain;
        width: 375px;
        margin: 0 auto;
        font-family: var(--ff-primary);

        @media (min-width: 376px) {
            background-image: url(${backgroundImageDesktop});
        }
    }

    h2 {
        margin-bottom: 0;
    }
    
    p {
        margin: 0;
        font-weight: 700;
    }

    p:last-of-type {
        opacity: 0.5;
    }

    a {
        font-weight: 700;
    }
`;

export default GlobalStyles;