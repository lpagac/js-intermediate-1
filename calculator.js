// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");

/** Retrieves current form values and returns {amount, years, rate}. */

function getFormValues() {
  let amount = document.getElementById('loan-amount');
  let years = document.getElementById('loan-years');
  let rate = document.getElementById('loan-rate');
  return {
    'currentAmount': amount.value,
    'currentYears': years.value,
    'currentRate': rate.value
  };

}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(amount, years, rate) {
  // return (amount * rate/12) / 1 - (1 + rate/12)** negativeTotalMonth);
  return (amount * rate/12) / (1 - (1 + rate/12)**-(years*12));
}

/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
  // call getFormValues
  // call calcMonthlyPayment
  // find calc-monthly-payment by id
  // add return value to that id(span)
  let formData = getFormValues();
  let monthlyPayment = calcMonthlyPayment(formData['currentAmount'], formData['currentYears'], formData['currentRate']);
  let monthlyPaymentDisplay = document.getElementById('calc-monthly-payment');
  monthlyPaymentDisplay.innerText = monthlyPayment;

}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // id="loan-amount" set initial values for all and run getFormValuesAndDisplayResults()
  // id="loan-years"
  // id="loan-rate"
  //console.log('set initial ran')
  let amount = document.getElementById('loan-amount');
  let years = document.getElementById('loan-years');
  let rate = document.getElementById('loan-rate');
  amount.setAttribute('value', '10000');
  years.setAttribute('value', '15');
  rate.setAttribute('value', '.04');
  //console.log('rate value: ', rate.value);
  getFormValuesAndDisplayResults();
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  // so we can test the calcMonthlyPayment independently of all the
  // HTML, only do the rest if this is run on a page with the form
  if (!calcForm) return;

  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}

window.addEventListener('DOMContentLoaded', start);
