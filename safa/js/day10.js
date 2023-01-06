/*Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.
// Creating an empty set*/

const t = new Set();
console.log(t);

/*Creating set from array*/

const h = [2, 4, 6, 7];
const sayi = new Set(h);

console.log(sayi);

/*Set is an iterable object and we can iterate through each elements.*/

const cities = ["istanbul", "izmir", "mersin", "ankara", "istanbul", "izmir"];

const city = new Set(cities);
for (x of h) {
  city.add(x);
}
console.log(city);

/*Adding an element to a set*/

/*We can also use loop to add element to a set.*/

/*Deleting an element a set*/
let city1 = new Set(cities);
city1.delete("ankara");
console.log(city1);

/*Checking an element in the set*/
city1.has("istanbul");
console.log(city1.has("istanbul"));

//Clearing the set

city1.clear();
console.log(city1);

/*To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)*/
countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const countriesMap = new Map();

for (const country of countriesMap) {
  console.log(country);
}
//   (2) ["Finland", "Helsinki"]
//   (2) ["Sweden", "Stockholm"]
//   (2) ["Norway", "Oslo"]

/*Intersection of sets
To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)*/

/*Difference of sets
To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)*/

/*alıştırmalar*/
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const countries = ["Finland", "Sweden", "Norway"];

const array = new Set();

//    const ali= new Set()
//    for(i=0;i<=10;i++){
// 	ali.add(i)
//    }
//    console.log(ali);

// 	ali.delete(5)
// 	console.log(ali);
// 	ali.clear()
// 	console.log(ali);
// const veli=['ali','veli','deli','ahmet','necati','suzan']
// const mehmet= new Set(veli.slice(0,5))
// console.log(mehmet);

// countries=[['a','7'],['Türkiye','7'],['Hollanda','8']];
// console.log(countries);
// const map=new Map(countries);
// console.log(map);
// console.log(map.entries());

// const a=[1,3,2,8]
// const b=[9,8,5,1,0]
// const c=a.concat(b) //c=new Set([...a,...b])
// const A= new Set(a);
// console.log(A);
// const B=new Set(b)
// const C=new Set(c)
// console.log(C);

//  let e= a.filter((num)=>B.has(num))
//  let E= new Set(e)
// console.log(E);
// let f=a.filter((num)=>!B.has(num))
// let F=new Set(f)
// console.log(F);

// 	Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a countr

// 	Find a union b
// Find a intersection b
// Find a with b
