import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Form} from "react-bootstrap";
import Layout from "../Layout";
import Title from "../Title";
import ButtonGroup from "../ButtonGroup";
import {GlobalContext} from "../context/GlobalState";

const Business = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        employeeNo: '',
        yearlyRevenue: '',
    });
    const { businessName, employeeNo, yearlyRevenue } = formData;
    const history = useHistory();
    const {setLoanInfo} = useContext(GlobalContext);

    const handleChange = (e) => {
        const value = e.target.type === 'number' ?  +e.target.value : e.target.value;
        setFormData({...formData, [e.target.name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (yearlyRevenue) {
            setLoanInfo({
                type: 'business',
                yearlyRevenue: yearlyRevenue,
            });

            history.push('/loan-information');
        }
    };

    return (
        <Layout>
            <Title label='Business' />
            <Form onSubmit={handleSubmit} className='form'>
                <div>
                    <Form.Group>
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g google"
                            name="businessName"
                            value={businessName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Company Size</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="e.g 50"
                            name="employeeNo"
                            value={employeeNo}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Yearly Revenue (&#2547;BDT)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="e.g 700000"
                            name="yearlyRevenue"
                            value={yearlyRevenue}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </div>

                <ButtonGroup
                    disabled={
                        !businessName ||
                        !employeeNo ||
                        !yearlyRevenue
                    }
                />
            </Form>
        </Layout>
    );
};

export default Business;
