import styled from 'styled-components';

export const VastsSection = styled.div`
    width: 100%;
    height: 100%;
    padding: 10%;
`;

export const Thumbnail = styled.div`
    display: inline-table;
    margin: 2vh;
`;

export const Backdrop = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 40vh;
    height: 25vh;
    border: none;
    display: inline-table;
    transition: box-shadow 0.3s;
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
        Helvetica, Arial, 'Lucida Grande', sans-serif;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
        0 0 40px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
        0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

    :hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
        cursor: pointer;
    }
`;

export const Box = styled.div`
    text-align: left;
    width: 39vh;
    padding: 1%;
    height: 5vh;
    flex-direction: column;
    display: block;
    columns: 3;
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
        Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    justify-content: space-evenly;
    text-transform: capitalize;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
        0 0 40px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
        0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;

export const Location = styled.div`
    padding: 1%;
    margin-left: 4px;
    color: gray;
    font-size: 12px;
`;

export const Height = styled.div`
    padding: 1%;
    color: gray;
    font-size: 12px;
`;
export const Width = styled.div`
    padding: 1%;
    color: gray;
    font-size: 12px;
`;

export const Position = styled.div`
    padding: 1%;
    margin-left: 4px;
    color: gray;
    font-size: 12px;
`;

export const Options = styled.div`
    padding: 2%;
    display: flex;
    margin-left: 4px;
    color: gray;
    border: none;
    font-size: 12px;
    justify-content: flex-end;
`;

export const EditVast = styled.button`
    width: 5vh;
    height: 3vh;
    opacity: 0.8;
    margin: 1% 1%;
    color: #f0f8ff;
    border-radius: 3px;
    border: 1px solid #f0f8ff;
    background: transparent;
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;

export const ViewVastXML = styled.button`
    width: 5vh;
    height: 3vh;
    opacity: 0.8;
    margin: 1% 1%;
    color: #f0f8ff;
    border-radius: 3px;
    border: 1px solid #f0f8ff;
    background: transparent;
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;
