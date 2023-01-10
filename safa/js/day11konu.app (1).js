//? Destructuring and Spread

//! Destructing  : Şeklini bozmak,yıkım
//! Spread : Dağılma , yayılma

//*------------- Destructing Arrays-----------------------

//* Destructuring, dizileri ve nesneleri açmanın ve farklı bir değişkene atamanın bir yoludur.

const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

//const [num1, num2, num3] = [1, 2, 3];
//console.log(num1, num2, num3);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

//?If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
//?Dizideki değerleri atlamak istiyorsak ek virgül kullanırız. Virgül, söz konusu dizindeki değeri atlamaya yardımcı olur

//*[frontend] =["HTML", "CSS", "JS", "React"]
//*[[fisrtlanguage], , ,] = ["HTML"]

const [[firstlanguage]] = fullStack;
console.log(firstlanguage);

const names = ["Asabeneh", "Brook", "David", "John"];
let [, secondPerson, , fourthPerson] = names; // first and third person is omitted

console.log(secondPerson, fourthPerson); //Brook John

//? Array ın içindeki başka bir Array a nasıl ulaşırız.
//! Asebeneh te yok!!

const cars = [
  ["Audi", "Fiat", "Mercedes", ["BMW", "TOGG", "ANADOL"]],
  ["Doğan", "Kartal", "Opel"],
];

const [fisrtgroup, secondgroup] = cars;
console.log(fisrtgroup);
const [[, secondcar]] = cars;
console.log(secondcar);
const [, [, asilarababudur]] = cars;
console.log(asilarababudur);
const [[, , , fourtycars]] = cars;
console.log(fourtycars);
const [[, , , [myfirst]]] = cars;
console.log(myfirst);

//?We can use default value in case the value of array for that index is undefined:
//?Bu indeks için dizinin değerinin tanımsız olması durumunda varsayılan değeri kullanabiliriz:

const names1 = [undefined, "Brook", "David"];
let [firstPer = "Asabeneh", secondPer, thirdPer, fourthPer = "John"] = names1;

console.log(firstPer, secondPer, thirdPer, fourthPer);
//Asabeneh Brook David John

//! sadece undefined olunca değer atayabilirsiniz. Null , true,false olursa zaten bir değer olduğu için atayamazsınız.

//?We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).
//?Dizideki tüm elemanlara değişken atayamayız. İlkinin birkaçını yok edebiliriz ve kalanını spread operatörünü (...) kullanarak dizi olarak alabiliriz.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums; //! rest operatörü ... dır. isim önemli değildir.

console.log(num1, num2, num3); //1 2 3
console.log(rest); //[4, 5, 6, 7, 8, 9, 10]

const isimler = ["ahmet", "mehmet", "necati", "beyazıt", "filiz", "gül"];
let [isim1, isim2, ...othernames] = isimler;

console.log(isim1); //ahmet
console.log(isim2); //mehmet
console.log(othernames); //['necati', 'beyazıt', 'filiz', 'gül']

//*------------- Destructuring during iteration-----------------------

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
  ["Turkey", "Ankara"],
];

for (const country of countries) {
  console.log(country);
}

for (const country of countries) {
  console.log(`Ülke: ${country[0]} - şehir: ${country[1]}`);
}

for (const [country, city] of countries) {
  console.log(`Ülke: ${country} - şehir: ${city}`);
}

const fulStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [first, second, third] of fulStack) {
  console.log(first, second, third);
}

//! fourty diye bir değişken tanımlanmadığı için "React" yazdırılmadı.
//HTML CSS JS
//Node Express MongoDB

//*------------- Destructuring Object-----------------------

//?When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.
//?Destruct işleminde kullandığımız değişkenin adı, nesnenin anahtarı veya özelliği ile tamamen aynı olmalıdır.

//! Bu bir object olduğu için yazılışına dikkat edelim artık let :[] köşeli parantez yerine le ={} süslüparantez geliyor.

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// // let { width, height, area, perimeter } = rectangle;

// // console.log(width, height, area, perimeter); //20 10 200 undefined

// let { width, area, height, perimeter } = rectangle;

// console.log(width, height, area, perimeter); //20 10 200 undefined

//! perimeter değişkenini adlnadırdık fakat object içinde bir karşılığı olmadığı için bize value yani değeri endefined geldi.

//? içiçe olan objetleri (nested object) çağırmak için ":{}" kullanıyoruz.

const user33 = {
  name: "sercan",
  surname: "YILMAZ",
  age: 36,
  pets: {
    cat1: "Pamuk",
    cat2: "Pati",
  },
};

const {
  pets: { cat1 },
} = user33;
console.log(cat1); //Pamuk

//! içiçe olan objectleri " :{} "bu şekilde çağırıyoruz

//*------------- Renaming during structuring-----------------------
//? 

// const rectangle1 = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width: w, height: h, area: a, perimeter: p } = rectangle1;

// console.log(w, h, a, p); //20 10 200 undefined

//? Objectin keylerini yeniden isimlendirip onları kullabiliriz.
//! Bunu için ":" ikinoktaüstüste kullanılır.

const person123 = {
  name : "Sercan",
  surname : "YILMAZ",
  age : 36
}

const {name,surname,age} = person123
// const { name:ad, surname:soyad, age:yaş } = person123;

console.log(name);
console.log(surname);
console.log(age);




//?If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration. 
//?Anahtar nesnede bulunmazsa, değişken tanımsız olarak atanır. Bazen anahtar nesnede olmayabilir, bu durumda bildirim sırasında varsayılan bir değer verebiliriz. 
//!Bunuda "=" eşittir .le yapıyoruz

const rectangle2 = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter = 60 } = rectangle2

console.log(width, height, area, perimeter) //20 10 200 60

console.log(perimeter);

console.log(rectangle2);
//{width: 20, height: 10, area: 200}

//! Orjinal object değişmiyor.biz sadece perimeter i kullanmak için bir değer atıyoruz.




// const rectangle3 = {
//   width: 30,
//   height: 10,
//   area: 200,
//   perimeter: 80
// }
// let { width, height, area, perimeter = 60 } = rectangle3
// console.log(width, height, area, perimeter) //30 10 200 80
// //! satır 76 ile aynı. //! sadece undefined olunca değer atayabilirsiniz. Null , true,false ya da bir değer olursa zaten bir değer olduğu için atayamazsınız.orjinal object değerlerini değiştiremezsiniz.

//*------------- Object parameter without destructuring-----------------------

// const rect = {
//   width: 20,
//   height: 10,
// };
// const calculatePerimeter = rectangle => {
//   return 2 * (rectangle.width + rectangle.height)
// }

// console.log(calculatePerimeter(rect)) // 60

//*------------- Object parameter with destructuring-----------------------

// const calculatePerimeter = ({ width, height }) => {
//   return 2 * (width + height)
// }

// console.log(calculatePerimeter(rect)) // 60

// const calculatePerimeter = (react) => {
//   const {width,height} = react;
//   return 2 * (width + height)
// }

// console.log(calculatePerimeter(rect)) // 60

//*------------- Object parameter without destructuring-----------------------

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfo(person));

//*------------- Object parameter with destructuring-----------------------

const users = {
  name: "sercan",
  surname: "YILMAZ",
  age: 36,
  pets: {
    cat1: ["Pamuk"],
    rabbit: ["Bugs Bunny"],
  },
};

// function showUsersInfo(users) {
//   return `Merhaba ben ${users.name} ${users.surname}, ${users.age} yasındayım. Ve ${users.pets.cat1.length} kedim  ${users.pets.rabbit.length} tavşanım var`;
// }

// console.log(showUsersInfo(users));

//************************************************* */

// function showUsersInfo(name, surname, age ,pets) {
//   return `Merhaba ben ${users.name} ${users.surname}, ${users.age} yasındayım. Ve ${users.pets.cat1.length} kedim  ${users.pets.rabbit.length} tavşanım var`;
// }

// console.log(showUsersInfo(users));

//************************************************* */

// const {pets} =users
// console.log(pets);

// const {pets:{cat1,rabbit}} = users
// console.log(cat1);
// console.log(rabbit);

// function showUsersInfo(name, surname, age ,pets:{cat1,rabbit}) {
//   return `Merhaba ben ${users.name} ${users.surname}, ${users.age} yasındayım. Ve ${users.pets.cat1.length} kedim  ${rabbit.length} tavşanım var`;
// }

// console.log(showUsersInfo(users));

//*------------- Destructuring object during iteration-----------------------

// const todoList = [
//   {
//     task: "Prepare JS Test",
//     time: "4/1/2020 8:30",
//     completed: true,
//   },
//   {
//     task: "Give JS Test",
//     time: "4/1/2020 10:00",
//     completed: false,
//   },
//   {
//     task: "Assess Test Result",
//     time: "4/1/2020 1:00",
//     completed: false,
//   },
// ];

// for (const { task, time, completed } of todoList) {
//   console.log(task, time, completed);
// }

//Prepare JS Test 4/1/2020 8:30 true
//Give JS Test 4/1/2020 10:00 false
//Assess Test Result 4/1/2020 1:00 false
//*------------- Destructuring object in fuction-----------------------

// const check = ({ a, b, c }) => { //? yolda destr.
//   console.log(a, b, c)
// }

const check = (data) => {
  const { a, b, c } = data; //? icerde destr
  console.log(a, b, c);
};


const data = {
  a: 1,
  b: 2,
  c: 3,
};


check(data)







//*------------- Spread or Rest Operator-----------------------

//*------------- SSpread operator to get the rest of array elements-----------------------

const numms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [numm1, numm2, numm3, ...restt] = numms;
console.log(numm1, numm2, numm3);
console.log(restt);

//1 2 3
//[4, 5, 6, 7, 8, 9, 10]

const countriesa = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...nordicCountries] = countriesa;

console.log(gem);
console.log(fra);
console.log(nordicCountries);

//Germany;
//France
//[("Finland", "Sweden", "Norway", "Denmark", "Iceland")];

//*------------- Spread operator to copy array-----------------------

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);
//[(0, 2, 4, 6, 8, 10)]
//[(1, 3, 5, 7, 9)]
//[(0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9)];

const frontEndd = ["HTML", "CSS", "JS", "React"];
const backEndd = ["Node", "Express"];
const fullStackk = [...frontEndd, ...backEndd];

console.log(fullStackk);
//[  ("HTML", "CSS", "JS", "React", "Node", "Express",)];

// const sayı1 =[1,3,5]

// const sayı2 = sayı1

// console.log(sayı1);

// sayı2.push(10)

// console.log(sayı1);

const sayı1 = [1, 3, 5];

const sayı2 = [...sayı1];

console.log(sayı1);

sayı2.push(10);

console.log(sayı1);

// const person1  = {
//   name:"Sercan",
//   surname:"YILMAZ"
// }
//  const person2 = person1

//  person2.name ="Serkan"

//  console.log(person1);

const person1 = {
  name: "Sercan",
  surname: "YILMAZ",
};
const person2 = { ...person1 };

person2.name = "Serkan";

console.log(person1);

//*------------- Spread operator to copy object-----------------------

//  const user = {
//    name: "Asabeneh",
//    title: "Programmer",
//    country: "Finland",
//    city: "Helsinki",
//  };

//  const copiedUser = { ...user };
//  console.log(copiedUser);

//{name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}

//!Modifying or changing the object while copying

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user, title: "instructor" };
console.log(copiedUser);

//{name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}

//*------------- Spread operator to copy object-----------------------

//?Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.
//?Ne zaman sınırsız sayıda argüman alan bir ok fonksiyonu yazmak istersek, bir yayılma operatörü kullanırız. Parametre olarak bir yayılma işleci kullanırsak, bir işlevi çağırdığımızda iletilen bağımsız değişken bir diziye dönüşecektir.

const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5)

//[(1, 2, 3, 4, 5)];

// const sumAllNums = (...args) => {
//   let sum = 0;
//   for (const num of args) {
//     sum += num;
//   }
//   return sum;
// };

// console.log(sumAllNums(1, 2, 3, 4, 5));

//15

//********************************** */

const sayılar = [1, 3, 5, 7, 9];

console.log(sayılar);
console.log([0, ...sayılar, 11]);




