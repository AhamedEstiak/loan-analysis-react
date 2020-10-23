import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {Jumbotron} from "react-bootstrap";
import '../styles/confirmRequest.css';
import Layout from "../Layout";

const ConfirmRequest = (props) => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem('clientId');
            history.replace('/');
        }, 3000);
    }, []);

    return (
        <Layout header={false}>
            <div className='mt-lg-5 text-center'>
                <Jumbotron>
                    <p className='request-success'>Request Received</p>
                </Jumbotron>
                <p>Please check your email for further instruction</p>
            </div>
        </Layout>
    );
};

export default ConfirmRequest;
