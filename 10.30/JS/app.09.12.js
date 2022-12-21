// // let x = 5;
// // let y = 15;
// // let z = x + y;
// // document.getElementById("id1").innerHTML = z;

// // let a = 5;
// // let b = (50 + a) * 5;
// // document.getElementById("id1").innerHTML = b;

// // let c = 45;
// // console.log(c % 2);

// // let f = a;
// // g = a += 20;
// // console.log(g);

// // a += 1;
// // console.log(a);
// // a = a + 1;
// // console.log(a);

// // let text1 = "what a very";
// // text1 += "nice day";
// // console.log(text1);

// // let sayi = "25";
// // if (sayi !== 25) {
// //   console.log("fghghgh");
// // }

// // function ilk_fonksiyon() {
// //   let a = 45;
// //   let b = 48;
// //   let c = 65;
// //   let text1 = "bitir";
// //   let text2 = "basla";
// //   if (a == 45 && b == 44) {
// //     console.log(text1);
// //   } else {
// //     console.log(text2);
// //   }
// // }
// // ilk_fonksiyon();

// let x = ["a", "b", "c", "d", "e"];
// console.log(x[4] + x[2]); //! ec çıktısı alınır

// let y = [1, 4, 9, 10, 15, 20, 21];
// if (x[2] == "a") {
//   console.log("ibr");
// } else if (x[4] == "d") {
//   console.log("object");
// } else if (y[2] == 9) {
//   console.log("aferin_lan");
// } else {
//   console.log("tamamladin");
// }

// const information = {
//   ad: "ibrayim",
//   soyad: "zirt",
//   age: "31",
//   job: "developer",
// };
// console.log(
//   information.ad + information.soyad + information.age + information.job
// );
function first_function(a, b) {
  return a * b;
}
document.getElementById("id1").innerHTML = first_function(6, 5);
