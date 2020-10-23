import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from "./components/pages/Login";
import Routes from "./components/routing/Routes";
import {GlobalProvider} from "./components/context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route component={Routes}/>
                </Switch>
            </Router>
        </GlobalProvider>
    );
}

export default App;
