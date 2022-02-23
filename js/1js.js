let umidWieght = 72,
  umidHeight = 1.72;
let myWeight = 64,
  myHeight = 1.74;
umidMos = umidWieght / umidHeight ** 2;
myMos = myWeight / myHeight ** 2;
console.log("Umid akani mosligi " + umidWieght / umidHeight ** 2);
console.log("Mironshoh akani mosligi " + myWeight / myHeight ** 2);
kattaA = umidMos < myMos;
console.log(kattaA + " Umid Aka Semizlik qildi shu uchun");
