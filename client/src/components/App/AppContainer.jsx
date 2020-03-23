import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import ModalContainer from 'components/Modal/ModalContainer';
import Header from 'components/Header/Header';
import { Container } from './App.style';

export default function AppContainer(props) {
    return (
        <Provider store={props.store}>
            <Container>
                <Header />
                <App />
            </Container>
            <ModalContainer />
        </Provider>
    );
}
