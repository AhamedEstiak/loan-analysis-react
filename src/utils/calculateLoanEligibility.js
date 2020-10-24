const calculateLoanEligibility = (loanInfo) => {
    let isEligible = false;

    // check for different type of loan eligibility rules (jobHolder, business)
    if (loanInfo.type === 'jobHolder') {
        const { yearOfExperience, monthlySalary, loanAmount } = loanInfo;
        const loanForThreeLacs = yearOfExperience >= 3 && monthlySalary >= 50000 && loanAmount <= 300000;
        const loanForFiveLacs = yearOfExperience >= 5 && monthlySalary >= 70000 && loanAmount <= 500000;

        if (loanForThreeLacs || loanForFiveLacs) {
            isEligible = true;
        }
    } else {
        const { yearlyRevenue, loanAmount } = loanInfo;
        const loanForFiveLacs = yearlyRevenue >= 3000000 && loanAmount <= 500000;
        const loanForSevenLacs = yearlyRevenue >= 5000000 && loanAmount <= 700000;

        if (loanForFiveLacs || loanForSevenLacs) {
            isEligible = true;
        }
    }

    return isEligible;
}

export default calculateLoanEligibility;
