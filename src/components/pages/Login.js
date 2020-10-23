import React, {useState} from 'react';
import {Form, Button, Alert} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import Layout from "../Layout";
import {clientIds} from "../utils/constants";

const ErrorMessage = (props) => {
    return (
        <Alert variant='danger'>
            Client Id not found. Please enter a valid one.
        </Alert>
    )
};

const Login = () => {
    const [clientId, setClientId] = useState('123456');
    const [showError, setShowError] = useState(false);
    const history = useHistory();

    const handleChange = (e)=> {
        setClientId(e.target.value);
    };

    const handleToggle = () => {
        setShowError(prevState => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isExist = clientIds.includes(clientId);
        if (isExist) {
            localStorage.setItem('clientId', clientId);
            history.push('/personal-info');
        } else {
            handleToggle();
        }
    };

    return (
        <Layout>
            {showError && <ErrorMessage />}
            <Form onSubmit={handleSubmit} className='form'>
                <div>
                    <Form.Group>
                        <Form.Label>Client Id</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g. 123456"
                            name='clientId'
                            value={clientId}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        block
                        type="submit"
                        disabled={!clientId}
                    >
                        Start
                    </Button>
                </div>
            </Form>
        </Layout>
    );
};

export default Login;
