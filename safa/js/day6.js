//*========EX2========//
//?========Q1========//
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}
console.log("***********************");
let i = -1;
while (i < countries.length - 1) {
  i++;
  if (countries[i] == "Ethiopia") {
    continue;
  } else {
    console.log(countries[i]);
  }
}
console.log("*************************");
//?========Q2========//

for (let i = countries.length - 1; i >= 0; i--) {
  console.log(countries[i]);
}
console.log("******************");
let j = countries.length - 1;
while (j >= 0) {
  console.log(countries[j]);
  j--;
}
//?========Q3========//
let n = 20;
for (let i = 0; i < n; i++) {
  console.log(i);
}
let text = "";
//?========Q4========//
for (let i = 0; i < 7; i++) {
  // console.log(text);
  text += "#";
  console.log(text);
}

//?========Q5========//

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i ** 2}`);
}

//?========Q6========//

for (let i = 0; i <= 10; i++) {
  console.log(`${i} \t ${i ** 2} \t${i ** 3}`);
}
//?========Q7========//

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//?========Q8========//
for (let i = 0; i < 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
//?========Q9========//

// for(let i =2;i<100;i++){
//     if(i%(j=i-1)===0){
//       console.log(i);
//     }

// }
