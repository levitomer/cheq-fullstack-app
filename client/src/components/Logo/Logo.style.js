import styled from 'styled-components';

export const Img = styled.img`
    src: ${props => props.src};
    alt: ${props => props.alt};
    width: 10vh;
    height: 35px;
`;
