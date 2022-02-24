let age = prompt("Yoshni kiriting: ");
let day, hour, minut, secend;
day = age * 365;
hour = day * 24;
minut = hour * 60;
secend = minut * 60;
console.log(
  `${age} → ${age}*365 = ${day} kun;  ${age}*365*24 = ${hour} soat; ${age}*365*24*60 = ${minut} minut; ${age}*365*24*60*60 = ${secend} sekund`
);

let hisobKirob = Number(prompt("hisob kitob miqdorini kiriting:"));

if (hisobKirob > 50 && hisobKirob < 300) {
  let usluga = hisobKirob * 0.15;
  console.log(
    `sizning uslugangiz ${usluga} .jami to'lov esa ${usluga + hisobKirob}`
  );
} else if (0 < hisobKirob < 50 || hisobKirob > 300) {
  let usluga = hisobKirob * 0.2;
  console.log(
    `sizning uslugangiz ${usluga} .jami to'lov esa ${usluga + hisobKirob}`
  );
} else {
  console.log("siz no'g'ri narsa kititdingiz");
}
