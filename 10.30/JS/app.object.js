// const letters = new Set(["a", "b", "c"]);

// // Display set.size
// console.log(letters);

// letters.add("5");

// console.log(letters);

// const letters = new Set(["a","b","c"]);

// // List all Elements
// let text = "";
// letters.forEach (function(value) {
//   text += value +"\n";
// })

// console.log(text);
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers

// console.log('Numbers:', numbers)

// console.log('Number of numbers:', numbers.length)

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//  return txt += value + " ";
// }
// console.log(txt);

// function findClosestPalindrome(num) {
//   if (isPalindrome(num)) {
//     return num;
//   }

//   let closestPalindrome = null;
//   let closestDistance = Number.MAX_VALUE;

//   for (let i = num - 1; i <= num + 1; i++) {
//     if (isPalindrome(i) && Math.abs(i - num) < closestDistance) {
//       closestPalindrome = i;
//       closestDistance = Math.abs(i - num);
//     }
//   }

//   return closestPalindrome;
// }

// function isPalindrome(num) {
//   const str = num.toString();
//   return str === str.split("").reverse().join("");
//   console.log(findClosestPalindrome(216));
// }

// console.log(findClosestPalindrome(216));
// console.log(findClosestPalindrome(200));
// console.log(findClosestPalindrome(72));

function findClosestPalindrome(num) {
  if (isPalindrome(num)) {
    return num;
  }
  let closestPalindrome = null;
  let closestDistance = Number.MAX_VALUE;

  for (let i = num - (num - 1); i <= num + (num - 1); i++) {
    if (isPalindrome(i) && Math.abs(i - num) < closestDistance) {
      closestPalindrome = i;
      closestDistance = Math.abs(i - num);
    }
  }

  return closestPalindrome;
}

function isPalindrome(num) {
  const str = num.toString();
  return str === str.split("").reverse().join("");
}

console.log(findClosestPalindrome(216));
console.log(findClosestPalindrome(42));
console.log(findClosestPalindrome(15890));

const prices = [100, 250, 50, 89];
let total = 0;
prices.forEach((p, i, arr) => {
  total += p;
  console.log(`${i + 1}. iterasyon:${total}`);

  arr[i] = Math.trunc(p * 1.1);
});
console.log(prices);

let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const upperNames = names.map((n) => n.toLocaleUpperCase());

console.log(upperNames);
console.log(names);

const arr = ["ali", "veli"];
for (let i in arr) {
  console.log(i, arr[i]);
}


