let number1 = prompt("1-chi sinni kiriting:"),
  number2 = prompt("2-chi sinni kiriting:"),
  number3 = prompt("3-chi sinni kiriting:");
function maxNumber(arg1, arg2, arg3) {
  if (arg1 >= arg3 && arg1 >= arg2) {
    return arg1;
  } else if (arg2 >= arg3 && arg2 >= arg1) {
    return arg2;
  } else if (arg3 >= arg1 && arg3 >= arg2) {
    return arg3;
  } else {
    return `xatolik yuz berdi`;
  }
}
function minNumber(arg1, arg2, arg3) {
  if (arg1 <= arg3 && arg1 <= arg2) {
    return arg1;
  } else if (arg2 <= arg3 && arg2 <= arg1) {
    return arg2;
  } else if (arg3 <= arg1 && arg3 <= arg2) {
    return arg3;
  } else {
    return `xatolik yuz berdi`;
  }
}
console.log(`eng katta son ${maxNumber(number1, number2, number3)}`);
console.log(
  `eng katta son ${maxNumber(number1, number2, number3)} 
  eng kichik son ${minNumber(number1, number2, number3)}`
);

let num1 = prompt(`Birinchi butun sonni kiriting: `),
  num2 = prompt(`Ikkinchi butun sonni kiriting: `),
  num3;
console.log(`Birinchi son : ${num1}`);
console.log(`Ikkinchi son : ${num2}`);
function swapNumber(argu1, argu2) {
  num3 = argu1;
  argu1 = argu2;
  argu2 = num3;
  console.log(`Natija:${argu1} ${argu2}`);
}
swapNumber(num1, num2);

let numberX = prompt("X sonini kiriting:");

function answerFunc(argument) {
  console.log(
    ` Natija: ${
      argument ** 5 +
      8 * argument ** 4 -
      5 * argument ** 3 +
      3 * argument ** 2 +
      argument -
      12
    }`
  );

  answerFunc(numberX);
}
