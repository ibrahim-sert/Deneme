let a = 4;
let b = 2;
const x = () => {
  return a + b + 100;
};
console.log(x(a, b));

//*Asabeleh

//?   EX-1
//*Q1

const fullName = () => "İbrahim SERT";

console.log(fullName());

//*Q2

const info = (firstName, lastName) => firstName + " " + lastName;
console.log(info("ahmet", "mehmet"));

//*Q3
const sum = (a, b) => a + b;

console.log(sum(5, 7));

//*Q4

const areaOfRectangle = (width, height) => width * height;

console.log(areaOfRectangle(5, 5));

//*Q5

const perimeterOfRectangle = (width, height) => 2 * (width + height);
console.log(perimeterOfRectangle(10, 8));

//*Q6

const volume = (width, height, length) => width * height * length;
console.log(volume(5, 6, 7));

//*Q7

const pi = Math.PI;
const areaOfCircle = (pi, r) => pi * r * r;
console.log(areaOfCircle(pi, 3));

//*Q8

const circumOfCircle = (pi, r) => 2 * pi * r;
console.log(circumOfCircle(pi, 10));

//*Q9

const density = (mass, volume) => mass / volume;
console.log(density(8, 4));

//?    YA DA

const density1 = (mass, gravity) => {
  let d = mass / gravity + " kg/cm^3";
  return d;
};
console.log(density1(5, 3));

//*Q10

const speed = (distance, time) => {
  let v = distance / time;
  return v;
};
console.log(speed(100, 5));

//*Q12

// const oC = Number(prompt("enter ur Temperature"));

// const formula = () => {
//   let oF = (oC * 9) / 5 + 32;
//   return oF;
// };
// console.log(formula());

//*Q13

const age = Number(prompt("Enter your age"));

if (age < 20) {
  console.log("I cant calculated your BMI ");
} else {
  const BMI = (weight, height) => weight / (height * height);

  let x = BMI(107, 1.77);
  console.log(x);
  if (x < 18.5) {
    console.log("Underweight");
  } else if (18.5 <= x && x < 24.9) {
    console.log("Normal weight");
  } else if (24.9 <= x && x < 29.9) {
    console.log("Overweight");
  } else if (x >= 30) {
    console.log("Obese");
  } else {
    console.log("Please enter a positive value!");
  }
}

// const printFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`

// }

// console.log(printFullName('Asabeneh', 'Yetayeh'))

// //*    LEVOS
// const age = Number(prompt("enter your age"));
// if (age >= 20) {
//   let weight = Number(prompt("enter your weight"));
//   let height = Number(prompt("enter your height"));
//   const bmi = () => {
//     return weight / (height * height);
//   };
//   console.log(bmi());
//   if (bmi() <= 18.5) {
//     console.log("underweight");
//   } else if (bmi() > 18.5 && bmi() <= 24.9) {
//     console.log("Normal weight");
//   } else if (bmi() > 24.9 && bmi() <= 29.9) {
//     console.log("Overweight");
//   } else {
//     console.log("obese");
//   }
// } else {
//   console.log("your age is not enough");
// }

// const greetings = (name, surname) => {
//   let message = name + surname + ", welcome to 30 Days Of JavaScript!";
//   return message;
// };

// console.log(greetings());
// console.log(greetings("Asabeneh"));

// const calculateAge = (birthYear, currentYear = NaN) => currentYear + birthYear;
// console.log("Age: ", calculateAge("safa"));

const faktoriyel=(n) =>{
  if(n==0){
    return 1
  }else if(n<0){
    console.log("enter a positive number");
  }else{
  return n*faktoriyel(n-1)
  }
}
console.log(faktoriyel(6));


let c =15
const func1= ()=>{
  c=45
}
func1()
console.log(c);