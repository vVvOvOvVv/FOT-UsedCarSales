import CalculateLoan from "../../controllers/buyerFunctions/CalculateLoan.js";

class CalculateLoanUI {
    calculateLoan() {
        try {
            // reset result and error msg
            document.getElementById("errorMessage").innerHTML = "";
            document.getElementById("result").innerHTML = "";

            // fetch car details
            var carId = document.getElementById("carId").value;
            if (carId == "")
                throw "Please enter a Car ID";
            var controller = new CalculateLoan();
            var price = controller.calculateLoan(carId);

            // fetch loan details
            var downpay = parseFloat(document.getElementById("downpayment").value);
            if (downpay == "")
                throw "Please enter a downpayment amount";
            var loanYr = parseInt(document.getElementById("loanYears").value);
            if (loanYr == "")
                throw "Please select a loan duration";
            var interest = parseFloat(document.getElementById("interestRate").value);
            if  (interest == "")
                throw "Please enter an interest amount";

            // calculate
            var principal = price - downpay; // Loan amount after downpayment
            var monthlyInterestRate = interest / 100 / 12; // Monthly interest rate
            var numberOfPayments = loanYr * 12; // Total payments (loan years * 12)
        
            var numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
            var denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
        
            var monthlyPayment = (principal * numerator) / denominator;
            monthlyPayment = monthlyPayment.toFixed(2);
            console.log(price);
            // display results
            var result = document.getElementById("result");
            result.innerHTML = `Your monthly payment is SGD${monthlyPayment} for ${numberOfPayments} months`;
        } catch (err) {
            console.error(err);
            document.getElementById("errorMessage").innerHTML = err;
        }
    }
}
var calcLoanUI = new CalculateLoanUI();
document.getElementById("calculateBtn").addEventListener("click", () => {
    calcLoanUI.calculateLoan();
});