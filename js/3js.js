let d1, d2, d3, k1, k2, k3;
d1 = prompt("Delfinlar jamoasining 1-balini kiriting:");
d2 = prompt("Delfinlar jamoasining 2-balini kiriting:");
d3 = prompt("Delfinlar jamoasining 3-balini kiriting:");
k1 = prompt("Koalalar jamoasining 1-balini kiriting:");
k2 = prompt("Koalalar jamoasining 2-balini kiriting:");
k3 = prompt("Koalalar jamoasining 3-balini kiriting:");
let argD = d1 + d2 + d3;
let argK = k1 + k2 + k3;
if (argD > argK) {
  console.log("Delfinlar jamoasi G'alaba qozondi");
} else if (argK > argD) {
  console.log("Koala jamoasi G'alaba qozondi");
} else {
  console.log(`Durrang Natija Qayd etildi`);
}

// 2-part
let login = prompt("Logini kiriting:");
if (login == "User") {
  let parol = prompt(`User parolini kiriting:`);
  if (parol == "user") {
    console.log(" Tabriklaymiz siz tizimga oddiy user bulib kiridingiz.");
  } else {
    console.log("Siz parolni xato kiritdingiz");
  }
} else if (login == "Admin") {
  let parol = prompt(`Admin parolini kiriting:`);
  if (parol == "admin") {
    console.log(" Tabriklaymiz siz tizimga admin bulib kiridingiz.");
  } else {
    console.log("Siz parolni xato kiritdingiz");
  }
} else {
  console.log("Siz loginni xato kiritdingiz");
}
