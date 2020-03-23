import styled from 'styled-components';

export const ModalOverlay = styled.div`
    display: ${props => (props.toggle ? ';' : 'none;')}
    opacity: 0.5;
    background: #000; 
    width:      100%;
    height:     100%; 
    z-index:    1;
    top:        0; 
    left:       0; 
    position:   fixed; 
`;

export const ModalBox = styled.div`
    width: 40%;
    height: auto;
    opacity: 1;
    top: 18%;
    left: 25%;
    display: flex;
    flex-direction: column;
    position: absolute;
    background: white;
    padding: 5%;
`;

export const ModalTitle = styled.div`
    text-align: center;
    width: 100%;
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
    height: 100%;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CloseModal = styled.button`
    width: 5vh;
    top: 1%;
    left: 80%;
    position: absolute;
    height: 3vh;
    background: transperant;
    border: none;
`;

export const SubmitModal = styled.button`
    margin-top: 5%;
    width: 100%;
    height: 4vh;
    background: #0947ff;
    color: white;
    border: none;
`;
