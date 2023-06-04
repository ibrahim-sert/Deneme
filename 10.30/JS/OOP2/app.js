//**********OOP2*********/

//!Class keyword'ü , JavaScript  ES2015 (ES5) ile gelmiştir. (Noah Hocanın söylediği gibi bir çok yerde duyacağımız sözdizimsel şeker yani syntactical sugar) ama buna rağmen JS protatip tabanlı bir dil oolmya devam eder.

//?OOP bize yeni bir özellik sağlamaz sıklıkla kullanılan, kodun daha düzenli ve sağlıklı çalışmasına yarar. Aynı zamanda tekrarları da engeller.

//?Bir objenin prototip propertisi, diğer objelerin prototip olarak almasını istediğimiz methotları ve propertileri tanımlayabildiğimiz yerdir.

//? Bu şekilde istediğimiz kadar obje oluşturabiliyoruz.
// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }
// // creating objects
// const person1 = new Person();
// const person2 = new Person();

//? Objeler ayrıca diğer objelerden özellikleri doğrudan devralabilir.
//? JavaScript'te, her fonksiyon ve onjenin varsayılan olarak prototip adlı bir özelliği vardır.

// function Person() {
//   (this.name = "John"), (this.age = 23);
// }
// const person = new Person();
// // checking the prototype value
// console.log(Person.prototype); // { ... }

//! burada prototipinin var olduğunu bize gösteriyor/
// {constructor: ƒ}
// constructor: ƒ Person()
// arguments: null
// caller: null
// length: 0
// name: "Person"
// prototype: {constructor: ƒ}
// [[FunctionLocation]]: app.js:22
// [[Prototype]]: ƒ ()
// [[Prototype]]: Object

// //? Örn://
// let personal1 = {
//   firstName: "Abraham",
//   lastName: "Hun",
//   info() {
//     console.log("Selam, ben " + this.firstName + " " + this.lastName);
//   },
// };
// console.log(personal1);
// //?gibi bir objem olsun. Ben bu objeyi ve bunun gibi benzer bilgileri olan başka objelerde bir değişiklik yapacak olursam her seferinde
// personal1.info();
// personal2.info();

//?...şeklinde sürekli çağırıp içerisinden içerik değiştirmek zorunda kalacağım ve bu bir kod kirliliği oluşturacaktır. Ancak Class'lar bu durumu ortadan kaldıran bir özellik sunuyor.

//?

class Animal {
  constructor(breed, name, age, color, foots) {
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.color = color;
    this.foots = foots;
  }
  myFunc() {
    return `Benim adım ${this.name}. ${this.age} yaşındayım. ${this.color} rengim ve ${this.foots} ayağım var`;
  }
}
const cat1 = new Animal("Tekir", "Pamuk", 3, "beyaz", 4);
// console.log(cat1.myFunc());

class Cat extends Animal{
  constructor(breed, name, age, color, foots,gender,children){
    super(breed, name, age, color, foots)
    this.gender=gender
    this.name=name
    this.children=children

  }


  myFunc(){
    return `Benim adım ${this.name}. ${this.age} yaşındayım. ${this.color} rengim ve ${this.foots} ayağım var. Ben cinsiyetim ${this.gender}'dir, ${this.children} adet çocccuuğum var.`

  }
}

const cat2=new Cat("Tekir", "Pamuk", 3, "beyaz", 4,"Erkek","3")

console.log(cat2.myFunc());

const ad={
  x:"adana",
  y:[],
  z(){
    return console.log("adana");
  }
}