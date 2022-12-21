// let i = 10;
// for (; i >= 0; i--) {
//   console.log(i);
// }

// let x = 10;
// while (x >= 0) {
//   console.log(x);
//   x--;
// }

// let n = Number(prompt("enter a number"));

// for (let i = 0; i <= n; i++) {
//   console.log(n);
// }
// const a = [1, 2, 3, 4, 5, 6, 7];
// let text = "";

// for (i in a) {
//   text += "#";
//   console.log(text);
// }

// const b = 7;
// let txt = "";
// for (i = 0; i < b; i++) {
//   txt += "#";
//   console.log(txt);
// }

// for (let i = 0; i <= 100; i+=2) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

for (let i = 2; i <= 100; i++) {
  if (i % (i - 1) == 0) {
    console.log(`${i} asal değildir`);
    
  }
}
