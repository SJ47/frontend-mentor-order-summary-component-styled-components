import styled from "styled-components";

export const StyledButton = styled.button`
    width: 85%;
    padding: 0.9em 0;
    margin-top: 1.5em;
    background: var(--tertiary-color);
    border-radius: var(--radius-corner);
    color: white;
    font-weight: 700;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    box-shadow: var(--box-shadow-light);

    &:hover {
        transform: scale(0.98);
        transition: 0.2s ease-in-out;
    }
`;

export const StyledCancelButton = styled(StyledButton)`
    background: var(--primary-color);
    color: var(--quaternary-color);
    opacity: 0.5;
    box-shadow: none;
    margin: 1em 0;

    &:hover {
        transform: scale(1.1);
    }
`;