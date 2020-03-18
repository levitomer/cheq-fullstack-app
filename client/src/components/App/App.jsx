import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import VastsContainer from '../Vasts/VastsContainer';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Redirect from="/" to="/fetch_vasts" exact />
                    <Route path="/fetch_vasts" component={VastsContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
