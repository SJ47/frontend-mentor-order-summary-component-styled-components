import React from "react";
import AnnualPlan from "../components/plan/AnnualPlan";
import Header from "../components/header/Header";
import {
    StyledButton,
    StyledCancelButton,
} from "../components/button/Button.styled";
import { StyledParagraph } from "../components/paragraph/Paragraph.styled";
import { StyledContainer } from "./OrderSummaryContainer.styled";

const OrderSummaryContainer = () => {
    return (
        <StyledContainer>
            <Header />
            <h2>Order Summary</h2>
            <StyledParagraph>
                You can now listen to millions of songs, audiobooks, and podcasts
                on any device anywhere you like!
            </StyledParagraph>
            <AnnualPlan />
            <StyledButton>Proceed to Payment</StyledButton>
            <StyledCancelButton>Cancel Order</StyledCancelButton>
        </StyledContainer>
    );
};

export default OrderSummaryContainer;
