import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {Jumbotron, Container, Row} from "react-bootstrap";
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
            <div className='confirm-request-wrapper text-center'>
                <Jumbotron>
                    <p className='request-success'>Request Received</p>
                </Jumbotron>
                <p>Please check your email for further instruction</p>
            </div>
        </Layout>
    );
};

export default ConfirmRequest;
