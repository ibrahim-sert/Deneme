//***********EXERCISE**********
//?========Q1===========
// let user = +prompt("yaşınızı giriniz:");
// if (user >= 18) {
//   console.log("araba kullanacak yaştasınız");
// } else {
//   console.log(`${18 - user} yıl daha beklemelisin`);
// }
//?========Q2===========

// let yourAge = +prompt("yaşınızı giriniz");
// const myAge = 31;
// if (myAge > yourAge) {
//   console.log("Ben senden daha büyüğüm");
// } else {
//   console.log("Sen benden daha büyüksün");
// }

//?========Q3===========

let a = 30;
let b = 35;
a > b ? console.log("a b'den büyüktür") : console.log("a b'den küçüktür");

//?========Q4===========

// let x = +prompt("bir sayı giriniz");

// if (x % 2 == 0) {
//   console.log(`${x} çift sayıdır`);
// } else {
//   console.log(`${x} tek sayıdır`);
// }

//***********EXERCISE LEV2**********
//?========Q1===========

// let not = +prompt("notunuzu giriniz");

if (not <= 100 && not >= 80) {
  console.log(`notunuz harfiniz A'dır`);
} else if (not <= 79 && not >= 70) {
  console.log(`notunuz harfiniz B'dir`);
} else if (not <= 69 && not >= 60) {
  console.log(`notunuz harfiniz C'dir`);
} else if (not <= 59 && not >= 50) {
  console.log(`notunuz harfiniz D'dir`);
} else if (not <= 49 && not >= 0) {
  console.log(`notunuz harfiniz F'tir`);
} else {
  console.log("0-100 arasında doğru bir sayı giriniz");
}

//?========Q2===========

const mevsim = prompt("bir mevsim giriniz");

if (mevsim == "eylül" || mevsim == "ekim" || mevsim == "kasım") {
  console.log(`${mevsim} mevsimi sonbahardır`);
} else if (mevsim == "aralık" || mevsim == "ocak" || mevsim == "şubat") {
  console.log(`${mevsim} mevsimi kıştır`);
} else if (mevsim == "mart" || mevsim == "nisan" || mevsim == "mayıs") {
  console.log(`${mevsim} mevsimi ilkbahardır`);
} else if (mevsim == "haziran" || mevsim == "temmuz" || mevsim == "ağustos") {
  console.log(`${mevsim} mevsimi yazdır`);
} else {
  console.log(`Doğru bir mevsim giriniz`);
}
