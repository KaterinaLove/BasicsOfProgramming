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

