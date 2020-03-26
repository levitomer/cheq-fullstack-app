import styled from 'styled-components';

export const Form = styled.form`
    max-height: 55vh;
`;

export const Fields = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 47vh;
`;

export const Field = styled.input`
    padding: 3%;
    margin: 1% 0 1% 0%;
`;

export const VastPosition = styled.select`
    appearance: none;
    padding: 3%;
    margin: 1% 0 1% 0%;
`;
export const Label = styled.div`
    font-size: 12px;
`;

export const Error = styled.span`
    color: red;
    font-size: 12px;
`;

export const Submit = styled.button`
    margin-top: 10%;
    width: 100%;
    height: 5vh;
    background: #0947ff;
    color: white;
    border: none;
`;
