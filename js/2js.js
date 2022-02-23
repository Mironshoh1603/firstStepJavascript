let a = prompt("Istalgan Sonni kiriting:");
if (a % 2 == 0) {
  console.log(`Siz juft son kiritingiz.${a}  juft son`);
} else if (a % 2 == 1 || a % 2 == -1) {
  console.log(`Chiquvchi malumot: Siz toq son kiritingiz.${a} toq son.`);
} else {
  console.log("Siz Notog'ri narsa kiritdingiz");
}
