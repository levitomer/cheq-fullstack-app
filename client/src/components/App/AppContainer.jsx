import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { ModalContainer } from 'components/Modal/ModalContainer';
import { Container } from './App.style';

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Container>
                    <App />
                </Container>
                <ModalContainer />
            </Provider>
        );
    }
}

export default AppContainer;
