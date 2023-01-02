// //*?=====EX1=====*//
// //*======Q1======*//

// const x = [];
// console.log(x);
// //*======Q2======*//

// const y = [1, 2, 3, 4, 5, 6];
// console.log(y);
// //*======Q3======*//

// console.log(y.length);
// //*======Q4======*//

// const z = [1, 2, 3, 4, "safa"];
// console.log(z.length);
// console.log(z[4], z[0], z[2]);

// //*======Q5======*//
// const mixDataTypes = [true, "ali", 15, 7, [], {}];
// console.log(mixDataTypes.length);

// console.log(itCompanies.length);
// console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
// console.log(itCompanies);
// console.log(
//   itCompanies[0].toUpperCase(),
//   itCompanies[1].toUpperCase(),
//   itCompanies[2].toUpperCase(),
//   itCompanies[3].toUpperCase(),
//   itCompanies[4].toUpperCase(),
//   itCompanies[5].toUpperCase(),
//   itCompanies[6].toUpperCase()
// );

// console.log(
//   itCompanies[0] +
//     "," +
//     itCompanies[1] +
//     "," +
//     itCompanies[2] +
//     "," +
//     itCompanies[3] +
//     "," +
//     itCompanies[4] +
//     "," +
//     itCompanies[5] +
//     " ve " +
//     itCompanies[6] +
//     " büyük BT şirketleridir"
// );

// const e = itCompanies.includes("Google");
// if(e){
//     console.log(`Böyle bir şirket vardır alüminyum`);
// }
// else{
//     console.log(`Böyle bir şirket yoktur alüminyum`);
// }

// let icimizde=[]

// for(i=0;i<itCompanies.length;i++){
//     icimizde.push(itCompanies[i].includes("oo"))
//     console.log(icimizde[i],i);}

// console.log(itCompanies[5].toLowerCase().includes());

// const f =itCompanies.sort()
// console.log(f);

// const g= itCompanies.reverse()
// console.log(g);

// const itCompanies = [
//     "Facebook",
//     "Google",
//     "Microsoft",
//     "Apple",
//     "IBM",
//     "Oracle",
//     "Amazon",
// ];
// console.log(itCompanies.slice(3,4));
// console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));

// // console.log(itCompanies.shift());
// console.log(itCompanies.splice(0,itCompanies.length));
// console.log(itCompanies);

//?=======EX2=======
//*=======Q1=======
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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// let text =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// const word = text.split("");
// console.log(word);

// let a =word.splice(word.indexOf("."),1)+word.splice(word.indexOf(","),1)+word.splice(word.indexOf(","),1)+word.splice(word.indexOf(","),1)+word.splice(word.indexOf(","),1)+word.splice(word.indexOf("."),1)
// let b= word.join("")
// console.log(b);
// let c= b.split(" ")
// console.log(c);
// console.log(c.length);

//*=======Q2=======*//

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("Meat")
console.log(shoppingCart);
shoppingCart.push("Sugar")
console.log(shoppingCart);
shoppingCart.splice(4,1)
console.log(shoppingCart);
shoppingCart.splice(3,1,"Green Tea")
console.log(shoppingCart);
let a =countries.includes("Ethiopia")
console.log(a);
console.log(countries[countries.indexOf("Ethiopia")].toUpperCase());

console.log(webTechs.includes("Sass")); 
if(webTechs.includes("Sass")){
    console.log('Sass is a CSS preprocess');
}else{
    webTechs.push("Sass");
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)

console.log(fullStack)