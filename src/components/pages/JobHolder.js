import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Form} from "react-bootstrap";
import Title from "../Title";
import ButtonGroup from "../ButtonGroup";
import Layout from "../Layout";
import {GlobalContext} from "../context/GlobalState";
import {experienceInYears} from "../../utils/constants";

const JobHolder = (props) => {
    const [formData, setFormData] = useState({
        companyName: '',
        experience: '',
        monthlySalary: '',
    });
    const {companyName, experience, monthlySalary} = formData;
    const history = useHistory();
    const {setLoanInfo} = useContext(GlobalContext);

    const handleChange = (e) => {
        const value = e.target.type === 'number' ? +e.target.value : e.target.value;
        setFormData({...formData, [e.target.name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (experience && monthlySalary) {
            setLoanInfo({
                type: 'jobHolder',
                yearOfExperience: experience,
                monthlySalary: monthlySalary
            });

            history.push('/loan-information');
        }
    };

    return (
        <Layout>
            <Title label='Job Holder'/>
            <Form onSubmit={handleSubmit} className='form'>
                <div>
                    <Form.Group>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g bdjobs"
                            name="companyName"
                            value={companyName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Year of Experience</Form.Label>
                        <Form.Control
                            as="select"
                            name="experience"
                            value={experience}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select experience</option>
                            {experienceInYears.map(year =>
                                <option
                                    key={year}
                                    value={year}
                                >
                                    {year}
                                </option>
                            )}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Monthly Salary (&#2547;BDT)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="e.g 70000"
                            name="monthlySalary"
                            value={monthlySalary}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </div>

                <ButtonGroup
                    disabled={
                        !companyName ||
                        !monthlySalary ||
                        !experience
                    }
                />
            </Form>
        </Layout>
    );
};

export default JobHolder;
