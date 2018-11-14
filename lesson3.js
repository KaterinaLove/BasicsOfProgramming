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
 //1-строка говарит куда передать, что передать
  document.getElementById("for-resultanswer").innerHTML = 
    ("На первую загадгу " + answer1 + ", " + "На вторую загадгу " + answer2 + ", " + "На третью загадгу " + answer3 + ". " + "Всего правильных ответов: " + counter);
}
//угадайка
  var compNum = Math.round(Math.random() * 100);

function ugadayka() {

var gameOver = false, 
    areLosers = true;
//первый цикл для 10 раундов
for (var i = 0; i < 10; i++) {
  //второй цикл для количества икраков
  for (var j = 0; j < 2; j++) {
    var input = +document.getElementById("num").value;
    if (input == 'end') {
      gameOver = true;
      break;
    }
    var userNum = +input;
    if (userNum < compNum) {
      document.getElementById("ugadaykaunsver").value = ('Число меньше загаданного');
    } else if (userNum > compNum) {
      document.getElementById("ugadaykaunsver").value = ('Число больше заганного');
    } else if ( userNum == compNum) {
      document.getElementById("ugadaykaunsver").value = ('Игрок ' + (j + 1) + ' угадал! Игра закончила');
      gameOver = true;
      areLosers = false;
      break;
    } else {document.getElementById("ugadaykaunsver").value = ('Ошибка')}
  }
  if (gameOver) {
    break;
  }
}
  if (areLosers && gameOver) {
    document.getElementById("ugadaykaunsver").value = ('Вы не угодали число за нужное количество раундов');
  }
}