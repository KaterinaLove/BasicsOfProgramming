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
//загадки
function answer () {
  let a = document.getElementById('answer-1').value,
      b = document.getElementById('answer-2').value,
      c = document.getElementById('answer-3').value,
      congratulation = "Вы ответили правельно!",
      mistake = "Вы ответили не правельно",
      answer1, answer2, answer3, counter = 0;
      
  if (a.toLowerCase() == "Язык".toLowerCase()) {
    answer1 = congratulation;
    ++counter;
  } else {
    answer1 = mistake;
  };

  if (b.toLowerCase() == "Пылесос".toLowerCase()) {
    answer2 = congratulation;
    ++counter;
  } else {
    answer2 = mistake;
  };

  if (c.toLowerCase() == "Фонарь".toLowerCase()) {
    answer3 = congratulation;
    ++counter;
  } else {
    answer3 = mistake;
  };
 //1-строка говарит куда передать, вторая откуда, третья что передать
  document.getElementById("for-resultanswer").innerHTML = 
    document.getElementById('resultanswer').value = 
    ("На первую загадгу " + answer1 + ", " + "На вторую загадгу " + answer2 + ", " + "На третью загадгу " + answer3 + ". " + "Всего правильных ответов: " + counter);
}
