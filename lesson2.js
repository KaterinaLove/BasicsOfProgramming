console.log("Задание 1");
function play (halfticket) {
  let one = halfticket % 10;
  let ten = halfticket % 100;
  let hundred = (halfticket - ten) / 100;
  ten = (ten - one) / 10;
  let sum = one + ten + hundred;
  return sum;
}
let play1 = play(151);
let play2 = play(511);
console.log("Счастливый билетик");
console.log("Сумма половины билета: " + play1);
console.log("Сумма второй половины билета: " + play2);
if (play1 == play2) {
  console.log("Поздравляю у вас счастливый билетик!!!");
} else {
  console.log("У вас нет счастливого билетика");
}

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
console.log("Задание 2");
console.log("Банковская программа");
let contribution = 300000;
let percent = 9;
let year = 5;
while (year > 0) {
  let onepercent = contribution / 100;
  let yearpercent = onepercent * percent;
  contribution = contribution + yearpercent;
  console.log("Вы получите: " + contribution.toFixed(2));
  --year;
}

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
console.log("Задание 3");
console.log("Встроить в сайт свою фотографию");

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
console.log("Задание 4");
console.log("Игра для 2 играков");
var compNum = Math.round(Math.random() * 100);

//Диалоговое окошко
if (confirm('Вы хотите начать игру?')) {

  var gameOver = false, 
      areLosers = true;
//первый цикл для 10 раундов
for (var i = 0; i < 10; i++) {
  //второй цикл для количества икраков
  for (var j = 0; j < 2; j++) {
    var input = +prompt('Раунд ' + (i + 1) + '\nИгрок ' + (j + 1) + ', введите число \nВведите end для окончания инры');
    if (input == 'end') {
      gameOver = true;
      break;
    }
    var userNum = +input;
    if (userNum < compNum) {
      alert('Число меньше загаданного');
    } else if (userNum > compNum) {
      alert('Число больше заганного');
    } else if ( userNum == compNum) {
      alert('Игрок ' + (j + 1) + ' угадал! Игра закончила');
      gameOver = true;
      areLosers = false;
      break;
    } else {alert('Ошибка')}
  }
  if (gameOver) {
    break;
  }
}
  if (areLosers && gameOver) {
    alert('Вы не угодали число за нужное количество раундов');
  }
}