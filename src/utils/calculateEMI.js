import {interestRate} from "./constants";

const calculateEMI = (loanInfo) => {
    const { loanAmount, period } = loanInfo;

    const numberOfMonths = period * 12; // total number of payments
    const rateOfInterest = (interestRate/100)/12; // interest rate is for 12 month

    // rules for emi calculation
    const emi = loanAmount * (
        (rateOfInterest * Math.pow((1 + rateOfInterest), numberOfMonths)) /
        (Math.pow((1 + rateOfInterest), numberOfMonths) - 1)
    );

    return Math.round(emi);
};

export default calculateEMI;
