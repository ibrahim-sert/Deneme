//! ************** LOOPS***************/

//* Soru-1 1000-2000 arasında 13'e bölündüğünde 3 kalanını veren sayıları console'a yazdırın

// for (let i = 1000; i <= 2000; i++) {
//   if (i % 13 == 3) {
//     console.log(i);
//   }
// }

//* Soru-2 Kullanıcıdan alınan 5 sayının ortalamasını console'a yazdırın

// let sayac = 0;
// let sum = 0;
// while (sayac < 5) {
//   const sayi = +prompt("Bir sayı giriniz");
//   sum += sayi;
//   sayac++;
// }
// console.log(sum / sayac);

//* Soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve console'a yazan kodu yazınız.
//! 1.Yöntem
// let sum = 0;
// while (true) {
//   const sayi = +prompt("Bir sayi giriniz");
//   if (sayi < 0) {
//     break;
//   }
//   sum += sayi;
// }
// console.log(sum);

//! 2.Yöntem

// let sum = 0;
// let flag = true;
// while (flag) {
//   const sayi = +prompt("Bir sayi giriniz");
//   if (sayi < 0) {
//     flag = false;
//   } else {
//     sum += sayi;
//   }
// }
// console.log(sum);

//* Soru-4 Sizden 1'den 100'e kadar sayıları yazdırmanız istenmektedir. Ancak 3'ün katlarına gelince "Fizz", 5'in katlarına gelince "Buzz" ve hem 3 hem 5'in katlarına gelince "FizzBuzz" yazdırmanız istenmektedir.

// for (let i = 1; i < 100; i++) {
//   if (i % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//* Soru-5 Bir sayının basamak sayısını yazdıran kodu yazınız
// let sayi = 132131346;
// let basamak = 0;
// while (true) {
//   sayi = Math.floor(sayi / 10);
//   basamak++;
//   if (sayi == 0) {
//     break;
//   }
// }
// console.log(basamak);

//* Soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini console'a yazdırınız

//* Soru-7 Aşağıdaki çıktıyı console'a yazdırın
//? .*.*.*.*.*
//? .*.*.*.*.*
//? .*.*.*.*.*
//? .*.*.*.*.*
//? .*.*.*.*.*

// let result = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

//* Soru-8 Aşağıdaki çıktıyı console'a yazdırın
//?O
//?OO
//?OOO
//?OOOO
//?OOOOO

// let last = "";
// for (let i = 0; i < 5; i++) {
//   last += "O";
//   console.log(last);
// }

//* Soru-9 Aşağıdaki çıktıyı console'a yazıdırınız
//?    O
//?   OOO
//?  OOOOO
//? OOOOOOO

// let ask = "";
// for (let i = 0; i < 8; i++) {
//   if (i % 2 != 0) {
//     ask += "A";
//   }
//   console.log(ask);
// }

// let rows = 4;
// let output = "";

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < rows - i - 1; j++) {
//     output += " ";
//   }

//   for (let k = 0; k < 2 * i + 1; k++) {
//     output += "A";
//   }

//   output += "\n";
// }

// console.log(output);

//! ********* ARRAY METHODS *************/

//* Soru-1 Yetkisiz kullanıcılardan korumak için e-posta adreslerini gizlemek için bir JS fonk. yazınız.
//? Test Verisi: console.log(protect_email("robin_singh@example.com")); --> "robin...@example.com"

let email = "robin_singh@example.com";

let emailName = email.split("@")[0];
console.log(
  emailName.slice(0, emailName.length - 3) + "...@" + email.split("@")[1]
);

const emailValidate = () => {
  let emailName = email.split("@")[0];
  return (
    emailName.slice(0, emailName.length - 3) + "...@" + email.split("@")[1]
  );
};

console.log(emailValidate(email));

//* Soru-2 Bir dizideki tüm elemanların ortalamasını hesaplayan bir JS fonk. yazın.
//? Test Verisi: console.log(average([1,2,3,4,5])) -->3

let dizi = [1, 2, 3, 4, 5];

//! 1. YÖNTEM
// const average = (dizi) => {
//   let sum = 0;
//   dizi.forEach((num) => (sum += num));
//   return sum / dizi.length;
// };

// console.log(average(dizi));

//! 2. YÖNTEM

const average = (dizi) => {
  let reduce = dizi.reduce((preVal, curVal) => preVal + curVal);
  return reduce / dizi.length;
};
console.log(average(dizi));

//* Soru-3 verilen pozitif olmayan bir tamsayı argüman olarak alınan ve rakamları azalan sırada döndüren bir fonk. yazmaktır. özetle rakamları yenniden düzenleyerek mümkün olan en yüksek sayıyı oluşturun

//? Examples:
//? Input:42145 Output : 54421

let sayi = 42145;

const reverse = (num) => {
  // return parseInt(num.toString().split("").sort().reverse().join(""));
  // return Number(num.toString().split("").sort().reverse().join(""));
  return +num.toString().split("").sort().reverse().join("");
};

console.log(reverse(sayi));

//* Soru-4 verilen bir string'te sesli harfleri (a,e,i,o,u) filtreleyin ve sadece sesli harfler olmayan kalan harfleri birleştirin.
//? Examples:
//? Input : "day" Output: "d"
//? Input : "apple" Output: "ppl"

let str = "javascript";

const name = (str) => {
  let list = str.split("");
  let vowels = "aeoöuüıi";
  let filt = list.filter((e) => !vowels.includes(e));
  return filt.join("");
};
console.log(name(str));
