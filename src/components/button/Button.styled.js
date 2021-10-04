import styled from "styled-components";

export const StyledButton = styled.button`
    width: 85%;
    padding: 0.9em 0;
    margin-top: 1.5em;
    background: ${({ bg }) => bg || "var(--primary-color)"};
    border-radius: var(--radius-corner);
    color: ${({ fg }) => fg || "var(--primary-color)"};
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
    opacity: 0.5;
    box-shadow: none;
    margin: 1em 0;

    &:hover {
        transform: scale(1.1);
    }
`;