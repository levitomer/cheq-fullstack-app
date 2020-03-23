import styled from 'styled-components';

export const ModalOverlay = styled.div`
    opacity: 0.5;
    background: #000;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    position: fixed;
`;

export const ModalBox = styled.div`
    width: 40%;
    z-index: 2;
    max-height: 68vh;
    opacity: 1;
    top: calc(62vh - 50vh);
    left: 25%;
    display: flex;
    flex-direction: column;
    position: fixed;
    background: white;
    padding: 5%;
`;

export const ModalTitle = styled.div`
    text-align: center;
    width: 100%;
    padding: 3%;
    height: 20px;
    font-weight: 900;
    padding: 5%;
`;

export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    text-align: end;
`;

export const ModalBody = styled.div`
    width: 100%;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CloseModal = styled.button`
    position: absolute;
    bottom: 95%;
    width: 85%;
    display: flex;
    justify-content: flex-end;
    border: none;
    align-self: flex-start;
    background: transparent;
    font-size: 12px;
`;

export const SubmitModal = styled.button`
    margin-top: 10%;
    width: 100%;
    height: 5vh;
    background: #0947ff;
    color: white;
    border: none;
`;
