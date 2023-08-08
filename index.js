document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("expenses-form");
    const totalExpenses = document.getElementById("total-expenses");
    const loanTypeSelect = document.getElementById("loan-type");
    const loanDetailsSection = document.getElementById("loan-details");
    const loanNameInput = document.getElementById("loan-name");
    const monthlyPaymentInput = document.getElementById("monthly-payment");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const rent = parseFloat(document.getElementById("rent").value);
        const groceries = parseFloat(document.getElementById("groceries").value);
        const internetPhone = parseFloat(document.getElementById("internet-phone").value);
        const water = parseFloat(document.getElementById("water").value);
        const electricity = parseFloat(document.getElementById("electricity").value);
        const other = parseFloat(document.getElementById("other").value) || 0;
        
        const loanType = loanTypeSelect.value;
        let loanExpense = 0;
        
        if (loanType === "none") {
            loanExpense = 0;
        } else {
            const monthlyPayment = parseFloat(monthlyPaymentInput.value) || 0;
            loanExpense = monthlyPayment;
        }
        
        const total = rent + groceries + internetPhone + water + electricity + other + loanExpense;
        
        totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)} Per Month`;
    });
    
    loanTypeSelect.addEventListener("change", function() {
        if (loanTypeSelect.value === "none") {
            loanDetailsSection.style.display = "none";
        } else {
            loanDetailsSection.style.display = "block";
        }
    });
});