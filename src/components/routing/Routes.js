import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from "../pages/Login";
import PersonalInfo from "../pages/PersonalInfo";
import JobHolder from "../pages/JobHolder";
import Business from "../pages/Business";
import LoanInfo from "../pages/LoanInfo";
import Summary from "../pages/Summary";
import Error from "../pages/Error";
import ConfirmRequest from "../pages/ConfirmRequest";

const Routes = props => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login}/>
                {/*<Route exact path="/personal-info" component={PersonalInfo}/>*/}
                {/*<Route exact path="/job-holder" component={JobHolder}/>*/}
                {/*<Route exact path="/business" component={Business}/>*/}
                {/*<Route exact path="/loan-information" component={LoanInfo}/>*/}
                {/*<Route exact path="/summary" component={Summary}/>*/}
                {/*<Route exact path="/confirm-request" component={ConfirmRequest}/>*/}
                <PrivateRoute exact path="/personal-info" component={PersonalInfo}/>
                <PrivateRoute exact path="/job-holder" component={JobHolder}/>
                <PrivateRoute exact path="/job-holder" component={JobHolder}/>
                <PrivateRoute exact path="/business" component={Business}/>
                <PrivateRoute exact path="/loan-information" component={LoanInfo}/>
                <PrivateRoute exact path="/summary" component={Summary}/>
                <PrivateRoute exact path="/confirm-request" component={ConfirmRequest}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
};

export default Routes;
