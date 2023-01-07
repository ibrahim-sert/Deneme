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
// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];

// const countries = ["Finland", "Sweden", "Norway"];

// const array = new Set();

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



// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// // Function scope
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   let value = false
// // block scope
//   if (true) {
//     // we can access from the function and outside the function but 
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python'
//     let b = 20
//     let c = 30
//     let d = 40
//     const value = !value
//     console.log(a, b, c, value) // Python 20 30 true
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b, value) // JavaScript 10 true
// }
// letsLearnScope()
// console.log(a, b,value) // JavaScript 10, accessible

// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js'
//   ],
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// person.nationality = 'Ethiopian'
// person.country = 'Finland'
// person.title = 'teacher'
// person.skills.push('Meteor')
// person.skills.push('SasS')
// person.isMarried = true


// person.getPersonInfo = function() {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(', ')
//   let lastSkill = this.skills.splice(this.skills.length - 1)[0]
//   console.log(lastSkill);

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//   let fullName = this.getFullName()
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//   return statement
// }
// console.log(person)
// console.log(person.getPersonInfo())



const person1 = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({
  , person1)
console.log(copyPerson)