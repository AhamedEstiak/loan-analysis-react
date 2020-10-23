import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import { Form} from "react-bootstrap";
import Layout from "../Layout";
import Title from "../Title";
import ButtonGroup from "../ButtonGroup";

const PersonalInfo = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        occupation: '',
    });
    const { name, phone, email, occupation } = formData;
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const routeName = occupation === 'business' ? '/business' : '/job-holder';

        history.push(routeName);
    };

    return (
        <Layout>
            <Title label='Personal info'/>
            <Form onSubmit={handleSubmit} className='form'>
                <div>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g. John Doe"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="e.g. +8801234567890"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="e.g. example@mail.com"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control
                            as="select"
                            name="occupation"
                            value={occupation}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select an occupation</option>
                            <option value="jobHolder">Job Holder</option>
                            <option value="business">Business</option>
                        </Form.Control>
                    </Form.Group>
                </div>

                <ButtonGroup
                    disabled={
                        !name ||
                        !phone ||
                        !email ||
                        !occupation
                    }
                />
            </Form>
        </Layout>
    );
};

export default PersonalInfo;
