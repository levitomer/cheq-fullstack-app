import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import VastsContainer from './components/containers/VastsContainer';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/fetch_vasts" component={VastsContainer} />
            </div>
        </BrowserRouter>
    );
}

export default App;
