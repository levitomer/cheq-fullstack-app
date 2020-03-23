import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
const VastsContainer = lazy(() => import('components/Vasts/VastsContainer'));
const VastXMLContainer = lazy(() =>
    import('components/Vasts/VastXML/VastXMLContainer')
);

export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Logo />}>
                <Switch>
                    <Redirect from="/" to="/fetch_vasts" exact />
                    <Route path="/fetch_vasts" component={VastsContainer} />
                    <Route path="/vast" component={VastXMLContainer} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
