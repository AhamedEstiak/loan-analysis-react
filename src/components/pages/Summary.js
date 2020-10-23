import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import Layout from "../Layout";
import ButtonGroup from "../ButtonGroup";
import '../styles/summary.css';
import {GlobalContext} from "../context/GlobalState";
import calculateLoanEligibility from "../utils/calculateLoanEligibility";
import Title from "../Title";
import {interestRate} from "../utils/constants";
import calculateEMI from "../utils/calculateEMI";

const Summary = () => {
    const history = useHistory();
    const { loanInfo } = useContext(GlobalContext);

    console.log(loanInfo);

    const isEligible = calculateLoanEligibility(loanInfo);
    const emi = isEligible && calculateEMI(loanInfo)

    const handleSubmit = () => {
        history.push('/confirm-request');
    };

    return (
        <Layout>
            <Title label='Summary'/>
            <div className='form summary-wrapper'>
                <h3>{isEligible ? 'Eligible!' : 'Not Eligible'}</h3>
                {isEligible &&
                <>
                    <p className='description'>You are the eligible to get the following loan amount: </p>
                    <div className='amount'>
                        <span>&#2547;{loanInfo.loanAmount}</span>
                    </div>
                    <div className='summary-item-section'>
                        <p>Loan Period</p>
                        <p>{loanInfo.period} Years</p>
                    </div>
                    <div className='summary-item-section'>
                        <p>Per Month EMI (&#2547;)</p>
                        <p>{emi}</p>
                    </div>
                    <div className='summary-item-section'>
                        <p>Interest Rate</p>
                        <p>{interestRate}%</p>
                    </div>
                </>
                }
            </div>

            <ButtonGroup
                nextButtonLabel='Request'
                handleSubmit={handleSubmit}
                disabled={!isEligible}
            />
        </Layout>
    );
};

export default Summary;
