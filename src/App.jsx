import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Mainpage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/main'>
                    <Mainpage />
                </Route>
                <Route path='/city'>
                    <CityPage />
                </Route>
                <Route exact path='/'>
                    <WelcomePage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;