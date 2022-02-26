window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
      const loanAmount = document.querySelector("#loan-amount");
      const term = document.querySelector("#loan-years");
      const rate = document.querySelector("#loan-rate");

      loanAmount.value = 1000; term.value = 5; rate.value = 5;

      update();
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
        const currentVals = getCurrentUIValues();
        updateMonthly(calculateMonthlyPayment(currentVals));
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
        let p = values.amount;
        let i = (values.rate / 100) / 12;
        let n = Math.floor(values.years * 12);

        let sum = (p * i) / (1 - ((1 + i) ** -n));
        console.log(p * i);
        console.log(1 - ((1 + i) ** -n));
        console.log(sum);
        return parseFloat(sum).toFixed(2);
        
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
      let monthlyPayment = document.querySelector("#monthly-payment");
      monthlyPayment.innerText = monthly;
  }
  