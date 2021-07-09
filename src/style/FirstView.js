import styled from "styled-components";

export const FirstView = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${({isTop}) => isTop ? 'translateY(-450px)' : null};
`;