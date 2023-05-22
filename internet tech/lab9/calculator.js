var num1 = 0;
var selectedOperator = '';

function append(digit) {
  var result = document.getElementById('result');
  result.value += digit;
}

function setOperator(op) {
  num1 = parseFloat(document.getElementById('result').value);
  selectedOperator = op;
  document.getElementById('result').value = '';
  calculate();
}

function calculate() {
  var result;
  switch (selectedOperator) {
    case '$':
      result = num1 * 2870;
      break;
    case '£':
      result = num1 * 3500;
      break;
    case '₩':
      result = num1 * 2.3;
      break;
    case '¥':
      result = num1 * 123;
      break;
    case 'Ұ':
      result = num1 * 11;
      break;
    case '€':
      result = num1 * 3120;
      break;
  }
  document.getElementById('result').value = result;
}

function refresh() {
  num1 = 0;
  selectedOperator = '';
  document.getElementById('result').value = '';
}

window.addEventListener('load', function () {
  var refreshButton = document.getElementById('refreshButton');
  refreshButton.addEventListener('click', refresh);
});
