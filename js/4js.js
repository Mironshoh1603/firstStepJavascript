let age = prompt("Yoshni kiriting: ");
let day, hour, minut, secend;
day = age * 365;
hour = day * 24;
minut = hour * 60;
secend = minut * 60;
console.log(
  `${age} → ${age}*365 = ${day} kun;  ${age}*365*24 = ${hour} soat; ${age}*365*24*60 = ${minut} minut; ${age}*365*24*60*60 = ${secend} sekund`
);
