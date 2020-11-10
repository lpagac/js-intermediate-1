//want to include easy test cases and edge cases
//calcMonthlyPayment(amount, years, rate)

it('should calculate the monthly rate correctly', function () {
  expect(calcMonthlyPayment(10000, 15, .04)).toEqual(74);
  expect(calcMonthlyPayment(100000, 30, .0392)).toEqual(473);
});

it('should calculate edge cases correctly', function () {
  expect(calcMonthlyPayment(0, 0, 0)).toEqual(NaN);
  
  //we handle negatives in getFormValuesAndDisplayResults(), but still want the calculation to work
  expect(calcMonthlyPayment(-1000, 15, .04)).toEqual(-7);
  expect(calcMonthlyPayment('hello', 15, .04)).toEqual(NaN);
})