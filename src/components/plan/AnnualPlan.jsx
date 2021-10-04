import React from "react";
import musicIcon from "../../assets/images/icon-music.svg";
import { StyledPlan } from "./Plan.styled";

const AnnualPlan = () => {
    return (
        <StyledPlan>
            <img src={musicIcon} alt="" />
            <div>
                <p>Annual Plan</p>
                <p>$59.99/year</p>
            </div>
            <a href="#">Change</a>
        </StyledPlan>
    );
};

export default AnnualPlan;
