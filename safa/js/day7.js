//*=====EX1=====*//
//?=====Q1======*//
function fullName(name, lastname) {
  return `${name} ${lastname}`;
}
fullName();
console.log(fullName("ibrahim", "sert"));

//?=====Q2======*//
let fullName1 = (firstname, lastname) => firstname + " " + lastname;

console.log(fullName1("ibrahim", "sert"));

//?=====Q3======*//

let addNumbers = (a, b) => a + b;

console.log(addNumbers(2, 5));

//?=====Q4======*//

const areaOfRectangle = (length, width) => length * width;

console.log(areaOfRectangle(4, 5));

//?=====Q5======*//

const perimeterOfRectangle = (length, width) => 2 * (length + width);

console.log(perimeterOfRectangle(4, 5));

//?=====Q6======*//

const volumeOfRectPrism = (length, width, height) => length * width * height;

console.log(volumeOfRectPrism(4, 5, 6));

//?=====Q7======*//

const areaOfCircle = (r) => Math.PI * r ** 2;

console.log(areaOfCircle(3));

//?=====Q8======*//

const circumOfCircle = (r) => 2 * Math.PI * r;

console.log(circumOfCircle(3));

//?=====Q9======*//

const density = (mass, volume) => mass / volume;
console.log(density(10, 2));

//?=====Q12======*//

const oF = (oC) => (oC * 9) / 5 + 32;
console.log(oF(100));

//?=====Q13======*//

const BMI = (weight, height) => {
  let q = weight / (height * height);

  if (q < 18.5) {
    console.log("Underweight");
  } else if (18.5 <= q && q < 24.9) {
    console.log("Normal weight");
  } else if (25 <= q && q < 29.9) {
    console.log("Overweight");
  } else if (q >= 30) {
    console.log("Obese");
  } else {
    console.log("Please input positive value");
  }
  return q;
};
console.log(BMI(180, 3.1));

//?=====Q14======*//

const checkSeason = (ay) => {
  ay;
  if (ay === "aralik" || ay === "ocak" || ay === "subat") {
    console.log("kış");
  } else if (ay === "mart" || ay === "nisan" || ay === "mayis") {
    console.log("ilkbahar");
  } else if (ay === "haziran" || ay === "temmuz" || ay === "agustos") {
    console.log("yaz");
  } else if (ay === "eylul" || ay === "ekim" || ay === "kasim") {
    console.log("kis");
  } else {
    console.log("Dogru bir ay giriniz");
  }
  return ay;
};
checkSeason("mart");
// console.log(checkSeason("aralik"))

//?=====Q15======*//

const findMax = (x, y, z) => {
  let big = x;
  if (x > y && x > z) {
    console.log(`${x} bigger than all`);
  } else if (y > x && y > z) {
    console.log(`${y} bigger than all`);
  } else if (z > x) {
    console.log(`${z} bigger than all`);
  } else {
    console.log("Please input different value");
  }
  return big;
};
findMax(2, 8, 6);

//*=====EX2=====*//
//?=====Q1======*//
// y=0 x=-c/a
// x=0 y=-c/a

// const fonksiyon=(x,y)=> {
//     // let x=-c/a
//     // let y=-c/a
//     if(x=0){
//         y=-c/a
//     }else if(y=0){
//         x=-c/a
//     }
//     return a*x+b*y+c
// }

// console.log(fonksiyon(2,3));

// const solveLinEquation = (a, b, c) => {
//    let z= a + "x" + b +"y" + c
//   if (a == 0 && b == 0) {
//     return c;
//   } else if (a == 0) {
//     (y = -c / b);
//     return

//   } else if(b==0){
//     x = -c / a;
// }
//     return  z

// };
// solveLinEquation()
// console.log(solveLinEquation());
//?=====Q2======*//

function solve(a, b, c) {
  let result = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  return result + "\n" + result2;
}
console.log(solve(1, 2, 1));
