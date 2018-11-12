//на уроке. Вычисление факториала
//5! = 5*4*3*2*1
function factorial(n) {
  if (n == 1) {
    return 1;
  } else if (n > 1 && n < 100) {
    return n * factorial(n - 1);
  } else {
    alert('Ошибка. Введите правельное значение')
  }
}
console.log('5! = ' + factorial(5));

//Калькулятор////////////////////////////////////
function summ() {
  let a = +document.getElementById('num-1').value,
      b = +document.getElementById('num-2').value;
  document.getElementById('result').value = a + b;
}

function distract() {
  let a = +document.getElementById('num-1').value,
      b = +document.getElementById('num-2').value;
  document.getElementById('result').value = a - b;
}

function multiply() {
  let a = +document.getElementById('num-1').value,
      b = +document.getElementById('num-2').value;
  document.getElementById('result').value = a * b;
}

function divide() {
  let a = +document.getElementById('num-1').value,
      b = +document.getElementById('num-2').value;
  document.getElementById('result').value = a / b;
}
