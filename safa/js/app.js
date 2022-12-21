// const PI = Math.PI;
// console.log(PI);

// console.log(Math.abs(10));

// let string = "JavaScript";
// console.log(string.substr(4, 6));

// for (leti = 1; i <= 100; i++) {
//   console.log("i");
// }

// let toplam = 0;
// for (let x=1; x<=5; x++){
//     console.log(`${x} safa merhaba`);
// }

const n = prompt("gireceğiniz sayıya kadar toplama yapılacaktır");

let toplam = 0;
for (let x = 1; x <= n; x++) {
  toplam += x;
  // console.log(`${toplam}`);
}
console.log(toplam);
