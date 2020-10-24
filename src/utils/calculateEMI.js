import {interestRate} from "./constants";

const calculateEMI = (loanInfo) => {
    const { loanAmount, period } = loanInfo;

    const numberOfMonths = period * 12; // total number of payments
    const rateOfInterest = (interestRate/100)/12;
    const emi = loanAmount * (
        (rateOfInterest * Math.pow((1 + rateOfInterest), numberOfMonths)) /
        (Math.pow((1 + rateOfInterest), numberOfMonths) - 1)
    );

    return Math.round(emi);
};

export default calculateEMI;
