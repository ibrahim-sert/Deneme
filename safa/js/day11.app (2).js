//? Destructuring and Spread

//! Destructing  : Şeklini bozmak,yıkım
//! Spread : Dağılma , yayılma

//*------------- Destructuring Object-----------------------

//?When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.
//?Destruct işleminde kullandığımız değişkenin adı, nesnenin anahtarı veya özelliği ile tamamen aynı olmalıdır.

//! Bu bir object olduğu için yazılışına dikkat edelim artık let :[] köşeli parantez yerine le {}= süslüparantez geliyor.

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

// const { width, area, height,perimeter } = rectangle;
// console.log(width, height, area,perimeter);
// console.log(perimeter);
//! perimeter değişkenini adlnadırdık fakat object içinde bir karşılığı olmadığı için bize value yani değeri undefined geldi.

// const { width, area} = rectangle;
// console.log(height);

// console.log(rectangle.width);
// console.log(width);

let { width: uzunluk, height: yükseklik } = rectangle;
console.log(uzunluk);

//?If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration.
//?Anahtar nesnede bulunmazsa, değişken tanımsız olarak atanır. Bazen anahtar nesnede olmayabilir, bu durumda bildirim sırasında varsayılan bir değer verebiliriz.
//!Bunuda "=" eşittir .le yapıyoruz

// const rectangle2 = {
//   width: 20,
//   height: 10,
//   area: 200
// }
// let { width, height, area, perimeter = 60 } = rectangle2

// console.log(width, height, area, perimeter) //20 10 200 60

// console.log(perimeter);

// console.log(rectangle2);
// //{width: 20, height: 10, area: 200}

//! Orjinal object değişmiyor.biz sadece perimeter i kullanmak için bir değer atıyoruz.

const rectangle3 = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80,
};
let { width, height, area, perimeter = 60 } = rectangle3;
console.log(width, height, area, perimeter); //30 10 200 80
console.log(perimeter);

//! sadece undefined olunca değer atayabilirsiniz. Null , true,false ya da bir değer olursa zaten bir değer olduğu için atayamazsınız.orjinal object değerlerini değiştiremezsiniz.

//*------------- Object parameter without destructuring-----------------------

const rect = {
  width: 20,
  height: 10,
};
const rect1 = {
  width: 40,
  height: 30,
};
const rect2 = {
  width: 20,
  height: 10,
};

// const calculatePerimeter = rectangle => {
//   return 2 * (rectangle.width + rectangle.height)
// }

// console.log(calculatePerimeter(rect)) // 60

//*------------- Object parameter with destructuring-----------------------

const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter(rect)); // 60
console.log(calculatePerimeter(rect1)); // 140
console.log(calculatePerimeter(rect2)); // 60

// let  {width,height} = rect

// const check = ({a,b,c}) => { //? yolda destr.
//   console.log(a, b, c)
// }

// const check = (data) => {
//   const { a, b, c } = data; //? icerde destr
//   console.log(a, b, c);
// };

// const data = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// check(data)

// let {a,b,c}=data

const users = {
  name: "sercan",
  surname: "YILMAZ",
  age: 36,
  pets: {
    cat1: ["Pamuk"],
    rabbit: ["Bugs Bunny"],
  },
};

function showUsersInfo(users) {
  return `Merhaba ben ${users.name} ${users.surname}, ${users.age} yasındayım. Ve ${users.pets.cat1.length} kedim  ${users.pets.rabbit.length} tavşanım var`;
}
console.log(showUsersInfo(users));

function showUsersInfo({ pets, name, surname, age }) {
  return `Merhaba ben ${name} ${surname} yasşındayım. Ve ${pets.cat1.length} kedim var`;
}

const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

//? içiçe olan objetleri (nested object) çağırmak için ":{}" kullanıyoruz.

const user33 = {
  name: "sercan",
  surname: "YILMAZ",
  age: 36,
  pets: {
    cat1: "Pamuk,Tekir",
    cat2: "Pati",
  },
};

user33.ırk = "türk";

// const {
//   pets: { cat1 },
// } = user33;
// console.log(cat1); //Pamuk

// const {name,surname,age,pets}=user33
// console.log(name, surname, age, pets);

const {
  pets: { cat1: a, cat2: b, cat3: c = "Zeytin" },
} = user33;

console.log(a);
console.log(b);
console.log(c);

console.log(user33);

//! içiçe olan objectleri " :{} "bu şekilde çağırıyoruz

//*------------- Destructing Arrays-----------------------

//* Destructuring, dizileri ve nesneleri açmanın ve farklı bir değişkene atamanın bir yoludur.

const numbers = [1, 2, 3];

let [num1, num2, num3] = numbers;

// console.log(numbers[0]);
// console.log(num1);
console.log(num1);

console.log(num1, num2, num3);

const names = ["Asabeneh", "Brook", "David", "John"];

//names[0]

// let [firstname,secondname]=names
// console.log(names[0]);
// console.log(firstname);

// console.log(firstname, secondname);

//?If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
//?Dizideki değerleri atlamak istiyorsak ek virgül kullanırız. Virgül, söz konusu dizindeki değeri atlamaya yardımcı olur

let [,secondname,,fourthname]=names
console.log(secondname,fourthname);



const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  [
    "Node",
    "Express",
    "MongoDB",
    {
      name: "sercan",
      surname: "YILMAZ",
      age: 36,
      pets: {
        cat1: "Pamuk,Tekir",
        cat2: "Pati",
      },
    },
  ]
  ,
  "Clarusway"
];

// let [frontEnd,backEnd,course]=fullStack
// console.log(frontEnd);
// console.log(backEnd);
// console.log(course);

// const [,[ğ,ş,ç,ö,k]]=fullStack
// console.log(ğ, ş, ç, ö,k);

// const [,[,,,{name}]]=fullStack
// console.log(name);

const [,[,,,{pets:{cat1,cat2}}]]=fullStack
// console.log(cat1);
// console.log(cat2);
// console.log(pets);


const cars = [
  ["Audi", "Fiat", "Mercedes", ["BMW", "TOGG", "ANADOL"]],
  ["Doğan", "Kartal", "Opel"],
];

const [fisrtgroup, secondgroup] = cars;
console.log(fisrtgroup);
// console.log(secondgroup);
let car = fisrtgroup
console.log(car);

let [,,,[,,ilkaraba]]=fisrtgroup
console.log(ilkaraba);

const [[,,,[M]]] = cars;
console.log(M);

// const [, [, asilarababudur]] = cars;
// console.log(asilarababudur);

// const [[, , , fourtycars]] = cars;
// console.log(fourtycars);

// const [[, , , [myfirst]]] = cars;
// console.log(myfirst);

//?We can use default value in case the value of array for that index is undefined:
//?Bu indeks için dizinin değerinin tanımsız olması durumunda varsayılan değeri kullanabiliriz:


const names1 = [undefined, "Brook", "David"];

let [v="James",j,n="Brad",m = "John",ç="çağrı"]=names1
console.log(v);
console.log(m);
console.log(n);
console.log(ç);


//*------------- Destructuring during iteration-----------------------

// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
//   ["Turkey", "Ankara"],
// ];

// for (const cy of countries){
//     console.log(cy);
// }

// for (const c of countries) {
//   console.log(`Ülke : ${c[0]}-şehir ${c[1]}`);
// }


// for (const [ülke,şehir] of countries) {
//    console.log(`Ülke : ${ülke}-şehir ${şehir}`);//havada
// }

// for (const c of countries) {
//     let [ülke,şehir] =c
//   console.log(`Ülke : ${ülke}-şehir ${şehir}`);//karada
// }

//*------------- Spread or Rest Operator-----------------------

//*------------- SSpread operator to get the rest of array elements-----------------------




const numms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [numm1, , numm2, numm3, ...rest] = numms;
console.log(numm1);
console.log(numm2);
console.log(numm3);
console.log(rest);

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

let [,gem,,,fra,,...spread] = countriesa;

console.log(gem);
console.log(fra);
console.log(spread);


//???????????????????????

// const sayi1 =[1,3,5,7,9]

// const sayi2 = sayi1

// console.log(sayi2);

// sayi2.push(11)

// console.log(sayi2);
// console.log(sayi1);

//?????????????????????

const sayi1 = [1,3,5,7,9]

const sayi2 = [...sayi1]

console.log(sayi2);

sayi2.push(11)

console.log(sayi2);
console.log(sayi1);


//???????????????????????


const person1 = {
  name: "Sercan",
  surname: "YILMAZ",
};
const person2 = { ...person1 };

person2.name = "Ahmet";

console.log(person1);
console.log(person2);

//?????????????????????????
















