//*=====EX1======*/
//?=====Q3=======*/

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
countries.forEach((country) => console.log(country));

//?=====Q4=======*/
names.forEach((name) => console.log(name));

//?=====Q5=======*/
numbers.forEach((num) => console.log(num));
//?=====Q6=======*/

const upCountries = countries.map(
  (country) => country[0].toUpperCase() + country.slice(1)
);

console.log(upCountries);

//?=====Q7=======*/

const lengthCountries = countries.map((country) => country.length);

console.log(lengthCountries);

//?=====Q8=======*/

const square = numbers.map((value) => value ** 2);

console.log(square);

//?=====Q9=======*/

const nameUpper = names.map((upper) => upper.toUpperCase());

console.log(nameUpper);

//?=====Q10=======*/

const uruneslesmesi = products.map(
  (value) => value.product + " " + "fiyati" + " " + value.price + " " + "TLdir"
);

console.log(uruneslesmesi);

//?=====Q11=======*/

const land = countries.filter((value) => value.toLowerCase().includes("land"));

console.log(land);

//?=====Q12=======*/

const caracter6 = countries.filter((value) => value.length === 6);

console.log(caracter6);

//?=====Q13=======*/
const caracter7 = countries.filter((value) => value.length >= 6);

console.log(caracter7);

//?=====Q14=======*/

const eStart = countries.filter((value) => value.startsWith("S"));

console.log(eStart);

//?=====Q15=======*/

const price = products.filter((value) => typeof value.price === "number");

console.log(price);

//?=====Q16=======*/

const arr = [true,1,45,"ali","veli","deli"]
const getStringList=arr.filter(value=> typeof value==="string")
console.log(getStringList);

//?=====Q17=======*/

const sum=numbers.reduce((total,value)=> total+value )

console.log(sum);


//?=====Q18=======*/

const concatCounties = countries.reduce((total,value) => {return value === "IceLand" ? total + ", and " + value : total+", "+value} ,("Estonia"))
console.log(concatCounties + " are north European countries")

//!=====YA DA=======*/

const sentence = countries.reduce((acc, country, index) => {
    if (index === countries.length - 1) {
      return `${acc} and ${country} are north European countries`;
    } else {
      return `${acc}, ${country}`;
    }
  }, 'Estonia');
  
  console.log(sentence);

//?=====Q20======*/

const nameLength = names.some(value=> value.length>=7)
console.log(nameLength);

const nameLength1 = names.every(value=> value.length>=7)
console.log(nameLength1);

//?=====Q21======*/

const land1 = countries.every(country=>country.toLowerCase().includes("land"))

console.log(land1);

//?=====Q23======*/

const firstSixLength=countries.find(value=>value.length===6)

console.log(firstSixLength);
//?=====Q24======*/

const firstSixLength1=countries.findIndex(value=>value.length===6)

console.log(firstSixLength1);

//?=====Q25======*/

const findCount= countries.findIndex(value=> value==="Norway")

console.log(findCount);

//?=====Q26======*/

const findCount1= countries.findIndex(value=> value==="Russia")

console.log(findCount1);

//*=====EX2======*/
//?=====Q1=======*/

const somePrice=  products.filter(value=> typeof value.price==="number").reduce((total,x)=>x.price+total,0)


console.log(somePrice);

//?=====Q4=======*/