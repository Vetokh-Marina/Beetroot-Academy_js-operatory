'use strict'
//1
let number_1 = 0.1;
let number_2 = 0.2;
let result = number_1 + number_2;
console.log(result);
console.log(+result.toFixed(1));
console.log(typeof (result));

//2
let num_1 = '1';
let num_2 = 2;
console.log(`${+num_1 + num_2}`);

//3
let enterFleshVolume = +prompt('please enter volume flesh driver');
let numberFlesh = (enterFleshVolume / 820);
alert(`На вашу флешку поместиться ${+numberFlesh.toFixed(0)} файлов`);

//4
let amountOfManey = prompt("Сколько у вас есть денег в кошельке?", "");
let chocolatePrice = prompt("Введите стоимость шоколадки", "");
let amount = (amountOfManey / chocolatePrice);
console.log(`Вы можете купить ${amount} шоколадок`);