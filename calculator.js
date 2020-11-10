//Option + Shift + F => lightly shifts formatting and indentation

// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");

/** Retrieves current form values and returns {amount, years, rate}. */

function getFormValues() {
  let amount = document.getElementById('loan-amount');
  let years = document.getElementById('loan-years');
  let rate = document.getElementById('loan-rate');
  return {
    currentAmount: amount.value, //don't need quotes for object keys
    currentYears: years.value,
    currentRate: rate.value
  };

}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(amount, years, rate) {
  // return (amount * rate/12) / 1 - (1 + rate/12)** negativeTotalMonth);
  return Math.round((amount * rate / 12) / (1 - (1 + rate / 12) ** -(years * 12)));
}

/** Get form values, calculate & update display. */

function alertInvalidInput() {
  alert('Please enter only positive number values.')
}

function getFormValuesAndDisplayResults() {
  // call getFormValues
  // call calcMonthlyPayment
  // find calc-monthly-payment by id
  // add return value to that id(span)
  let formData = getFormValues();
  // console.log(formData);
  //alert if any values are negative
  // let formDataValues = Object.values(formData);
  for (let key in formData) {
    console.log('type of:', typeof formData[key], !!Number(formData[key]));
    //if any of form inputs are negative or not a number, alert user and return out of function
    if (formData[key] < 0 || !(Number(formData[key]))) {
      // console.log(formData[key]);
      alertInvalidInput();
      return;
    }
    //   console.log(val);
    //   return val < 0 || typeof val !== 'number'
    // })) {
    //   //val => val < 0 || typeof val !== 'number')) {
    //   console.log(Object.values(formData))
    //   alertInvalidInput();
    //   return;
    // };

  }

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
  //use amount.value = '10000'
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
