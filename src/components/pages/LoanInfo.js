import React, {useContext, useState} from 'react';
import {Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Layout from "../Layout";
import Title from "../Title";
import ButtonGroup from "../ButtonGroup";
import {GlobalContext} from "../context/GlobalState";

const LoanInfo = (props) => {
    const [formData, setFormData] = useState({
        amount: '',
        period: '',
    });
    const { amount, period } = formData;
    const history = useHistory();
    const {setLoanInfo} = useContext(GlobalContext);

    const handleChange = (e) => {
        const value = e.target.type === 'number' ?  +e.target.value : e.target.value;
        setFormData({...formData, [e.target.name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (amount && period) {
            setLoanInfo({
                loanAmount: amount,
                period: +period
            });

            history.push('/summary');
        }
    };

    return (
        <Layout>
            <Title label='Loan Applying for' />
            <Form onSubmit={handleSubmit} className='form'>
                <div>
                    <Form.Group>
                        <Form.Label>Amount (&#2547;BDT)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="e.g. 10000"
                            name="amount"
                            value={amount}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Period (year)</Form.Label>
                        <Form.Control
                            as="select"
                            name="period"
                            value={period}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Period</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </Form.Control>
                    </Form.Group>
                </div>

                <ButtonGroup
                    disabled={
                        !amount ||
                        !period
                    }
                />
            </Form>
        </Layout>
    );
};

export default LoanInfo;
