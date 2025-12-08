class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
  
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}

function processCalculation(a, b, operation) {
  const calc = new Calculator();
  return operation(calc, a, b);
}

module.exports = { Calculator, processCalculation };

