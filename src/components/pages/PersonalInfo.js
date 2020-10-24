import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import { Form} from "react-bootstrap";
import Layout from "../Layout";
import Title from "../Title";
import ButtonGroup from "../ButtonGroup";
import {occupations} from "../../utils/constants";
import {personalInfoValidator} from "../../utils/validators";
import InputError from "../InputError";

const PersonalInfo = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        occupation: '',
        errors: {
            name: '',
            phone: '',
            email: '',
        }
    });
    const { name, phone, email, occupation, errors } = formData;
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
            errors: personalInfoValidator(name, value, errors)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const routeName = occupation === 'business' ? '/business' : '/job-holder';

        history.push(routeName);
    };

    return (
        <Layout>
            <Title label='Personal info'/>
            <Form onSubmit={handleSubmit} className='form' noValidate>
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
                        {errors.name && <InputError label={errors.name} />}
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
                        {errors.phone && <InputError label={errors.phone} />}
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
                        {errors.email && <InputError label={errors.email} />}
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
                            {occupations.map(occupation =>
                                <option
                                    key={occupation.value}
                                    value={occupation.value}
                                >
                                    {occupation.label}
                                </option>
                            )}
                        </Form.Control>
                    </Form.Group>
                </div>

                <ButtonGroup
                    disabled={
                        !name && errors.name ||
                        !phone && errors.phone ||
                        !email && errors.email ||
                        !occupation
                    }
                />
            </Form>
        </Layout>
    );
};

export default PersonalInfo;
