import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/App/AppContainer';
import configureStore from './store/config';

const store = configureStore();

ReactDOM.render(
    <AppContainer store={store} />,
    document.getElementById('root')
);
