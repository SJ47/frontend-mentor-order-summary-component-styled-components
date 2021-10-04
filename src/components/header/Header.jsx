import React from "react";
import headerImage from "../../assets/images/illustration-hero.svg";
import { HeaderImage } from "./Header.styled";

const Header = () => {
    return (
        <HeaderImage src={headerImage} alt="person listeing to music on phone" />
    );
};

export default Header;
