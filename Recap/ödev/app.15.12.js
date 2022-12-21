// //*-------------------------
// //*     ÖDEV1
// //*-------------------------
    // const n1 = +prompt("ilk sayi");
    // const n2 = +prompt("ikinci sayi");
    // const op = prompt("hangi islemi yapmak istersiniz? + , - , * , / ");
    // if (op == "+" ) {
    //     console.log(`Islem sonucu ${n1 + n2}`);
    // }
    // else if( op == "-"){
    //     console.log(`Islem sonucu ${n1 - n2}`);
    // }
    // else if( op == "/"){
    //     console.log(`Islem sonucu ${n1 / n2}`);
    // }
    // else if( op == "*"){
    //     console.log(`Islem sonucu ${n1 * n2}`);
    // }
    // else
    //     console.log("Gecersiz islem")

// //*-------------------------
// //*     ÖDEV2
// //*-------------------------

// const gun = prompt("Lütfen günü giriniz:");

// let sonuc =0;

// switch (gun) {
//     case "pazartesi":
//         sonuc = "InClass";
//         break;
//     case "sali":
//         sonuc = "InClass";
//         break;
//     case "carsamba":
//         sonuc = "InClass";
//         break;
//     case "persembe":
//         sonuc = "InClass";
//         break;
//     case "cuma":
//         sonuc = "Teamwork";
//         break;
//     case "cumartesi":
//         sonuc = "InClass+Workshop";
//         break;
//     case "pazar":
//         sonuc = "Self-Study";
//         break;
//     default:
//         alert("Yanlis gun girildi.")
//         break;
// }

// console.log(`${gun} günü ${sonuc} dersi vardır. `);

//*-------------------------
//*     ÖDEV3
//*-------------------------

// const maas = Number(prompt("Maasinizi giriniz:"));
// const asgari = 5500;
// let maas1 = maas * 0.1;
// let maas2 = maas * 0.5;

// maas >= asgari
//   ? alert(`Maasiniza ${maas1} zam yapildi.`)
//   : alert(`Maasiniza ${maas2} zam yapildi.`);

// //!-------------------------
// //!     YA DA
// //!-------------------------

// const maas = Number(prompt("Maasinizi giriniz:"));
// const asgari = 5500;

// maas >= asgari
//   ? alert(`Maasiniza ${maas1 * 0.1} zam yapildi.`)
//   : alert(`Maasiniza ${maas2 * 0.5} zam yapildi.`);

//*-------------------------
//*     ÖDEV4
//*-------------------------

// const gelir = Number(prompt("Gelirinizi giriniz."));
// const gider = Number(prompt("Giderinizi giriniz."));
// const asgari = 5500;

// gelir >= asgari + gider
//   ? alert(`Kredi verilebilir 🤑`)
//   : alert(`Kredi verilemez 😢`);

//*-------------------------
//*     ÖDEV5
//*-------------------------

const n1 = Number(prompt("Birinci Sayi"));
const n2 = Number(prompt("İkinci Sayi"));
const islem = prompt("Yapilacak islem nedir: +,-,*,/");

if (islem == "+") {
  console.log(`${n1}+${n2} sonucu ${n1 + n2} `);
} else if (islem == "-") {
  console.log(`${n1}-${n2} sonucu ${n1 - n2}`);
} else if (islem == "*") {
  console.log(`${n1}*${n2} sonucu ${n1 * n2}`);
} else if (islem == "/") {
  console.log(`${n1}/${n2} sonucu ${n1 / n2}`);
} else
  console.log(
    "Yanlis islem girdiniz. Lütfen verilen seçeneklerden birini giriniz"
  );
