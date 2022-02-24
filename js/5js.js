// let age = prompt("Yoshingizni kiriting: ");
// let passport = prompt("diplomi borlar 1 yo'qlar 0")(age > 18 && age < 45)
//   ? passport
//     ? console.log("Assalamu Aleykum")
//     : console.log("yo'q")
//   : age < 7
//   ? console.log("hali kichkina ekansiz")
//   : console.log("siz hali maktabni tugatib oling");

let d1, d2, d3, k1, k2, k3;
d1 = Number(prompt("Delfinlar jamoasining 1-balini kiriting:"));
d2 = Number(prompt("Delfinlar jamoasining 2-balini kiriting:"));
d3 = Number(prompt("Delfinlar jamoasining 3-balini kiriting:"));
k1 = Number(prompt("Koalalar jamoasining 1-balini kiriting:"));
k2 = Number(prompt("Koalalar jamoasining 2-balini kiriting:"));
k3 = Number(prompt("Koalalar jamoasining 3-balini kiriting:"));
let argD = d1 + d2 + d3;
let argK = k1 + k2 + k3;
if (argD / argK >= 2) {
  console.log("Delfinlar jamoasi G'alaba qozondi");
} else if (argK / argD >= 2) {
  console.log("Koala jamoasi G'alaba qozondi");
} else {
  console.log(`Durrang Natija Qayd etildi`);
}

let arg1 = Number(prompt("iltimos 1-chi argumentni kiriting: "));
let arg2 = Number(prompt("iltimos 2-chi argumentni kiriting: "));
let command = prompt("iltimos comandani kiriting (+, - , / , * ): ");
switch (command) {
  case "+":
    console.log(`Natija quyyidagicha: ${arg1 + arg2}`);
    break;
  case "*":
    console.log(`Natija quyyidagicha: ${arg1 * arg2}`);
    break;
  case "-":
    console.log(`Natija quyyidagicha: ${arg1 - arg2}`);
    break;
  case "/":
    console.log(`Natija quyyidagicha: ${arg1 / arg2}`);
    break;
  default:
    console.log("Siz commandani notog'ri kiritdingiz!");
}
