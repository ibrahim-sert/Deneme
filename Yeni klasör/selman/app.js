//?=========================
//?         SORU-1
//?=========================
//*  Soru-1  1000 ile 2000 arasındaki 13 e
//*  bölümünden 3 kalan sayıları konsola yazdırınız ?

// for (let i = 1000; i <= 2000; i++) {
//   if (i % 13 === 3) {
//     console.log(i);
//   }
// }

//*  Soru-2  Kullanıcıdan alınan 5 sayının
//*  ortalamasını konsola yazdırınız ?

// let sayac = 0;
// let sum = 0;
// while (sayac < 5) {
//   const sayi = Number(prompt("bir sayı giriniz"));

//   sum += sayi;

//   sayac++;
// }
// console.log(sum / sayac);

//*  Soru-3 Kullanıcıdan alınan sayıları negatif girilene
//*  kadar toplayan ve konsola yazan kodu yazınız ?

let sum = 0;
while (true) {
  const sayi = Number(prompt("bir sayı giriniz"));
  if (sayi < 0) {
    break;
  }

  sum += sayi;
}
console.log(sum);

//*  Soru-4 Sizden 1'den 100'e kadar sayıları yazdırmanız
//*  istenmektedir ancak 3'ün katlarına gelince 'Fizz',
//*  5'in katlarına gelince 'Buzz'.Hem 3'ün hemde 5'in katlarına
//*  gelince 'FizzBuzz' yazdırmanız istenmektedir ?

// Soru-5 bir sayının(number) basamak sayısını yazdıran kodu yazınız ?

// Soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini konsola yazdırınız ?  //0 1 1 2 3 5 8 13

// soru-7 Aşağıdaki çıktıyı konsola yazdırınız ?

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?

// O
// OO
// OOO
// OOOO
// OOOOO
// OOOOOO
// OOOOOOO

// soru-9 Aşağıdaki çıktıyı konsola yazdırınız ?

//    O
//   OOO
//  OOOOO
// OOOOOOO
