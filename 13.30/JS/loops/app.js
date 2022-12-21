//?    ===0'dan 100'e kadar olan sayıların asal olup====
//?    ===olmadıklarınıyazdıran döngüyü yazını====

// let isPrime = true;
// for (i = 2; i < 100; i++) {
//   isNumber = true;

//   for (j = 2; j < i; j++) {
//     if (i % j === 0) {
//       console.log(`${i} is not a prime number`);
//       isNumber = false;
//       break;
//     }
//   }
//   if (isNumber) {
//     console.log(`${i} is a prime number`);
//   }
// }

//?    ===0'dan 100'e kadar olan sayıların toplamını====
//?    ===yazdıran döngüyü yazını====

// let sum=0;
// for(i=0;i<=100;i++){
//     sum+=i ;
//     console.log(sum);
// }

// let arr = [];
// let sum = 0;
// let sum1 = 0;

// for (i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   } else {
//     sum1 += i;
//   }
// }
// console.log(sum);
// console.log(sum1);

// arr.push(sum, sum1);
// console.log(arr);

// let num = [];
// let sayı;

// while (num.length) {
//   let ranNumber = Math.round(Math.random() * 100);
//   if (!a.includes(ranNumber)) {
//     a.push(ranNumber);
//   }
// }
// console.log(ranNumber);
const karakter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "l",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let sifre = "";

for (i = 0; i <= 5; i++) {
  let ranKar = Math.round(Math.random() * karakter.length);
  sifre += karakter[ranKar];
  console.log(sifre);
}
