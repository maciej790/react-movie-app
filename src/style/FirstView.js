import styled from "styled-components";

export const FirstView = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.5s ease-in-out;
    transform: ${({isTop}) => isTop ? 'translateY(-450px)' : null};
`;