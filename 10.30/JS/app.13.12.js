// let a1 = 45;
// if (a1 > 30) {
//   console.log(`Bu condition sağlandı ve içerdeki kd yazdırıldı`);
// }

// let x = true;
// if (x) {
//   console.log("yazdır gelsin");
// }

// const y = 5;
// if (y > 5) {
//   console.log("y 5ten büyüktür");
// } else {
//   console.log("y 5ten büyük değildir");
// }

// if (y > 0) {
//   console.log(`${y} is positive number`);
// } else {
//   console.log(`${y} is negative number`);
// }

// let isRaining = prompt("what is weather like?");
// if (isRaining == "raining") {
//   console.log(`you need rainy coat`);
// } else if (isRaining == "cloudy") {
//   console.log("be carefull because it can be rain");
// } else {
//   console.log("maybe be snow can rain");
// }

// let a3 = Number(prompt("enter a number"));
// if (a3 > 0) {
//   console.log(`${a3} is positive number`);
// } else if (a3 < 0) {
//   console.log(`${a3} is negative number`);
// } else if (a3 == 0) {
//   console.log(`${a3} is zero`);
// } else {
//   console.log(`${a3} is not tam sayı`);
// }

// let a =Number(prompt("enter your age"));
// if(a>=18){
//     console.log("ehliyet alabilirsin");
// }
// else{
//     console.log(
//         `you are left with ${18-a} year`
//       );

//? SORU #2

// const myAge = prompt("Yaşinizi giriniz:");
// const yourAge = 18;
// let fark = myAge - yourAge;

// if(myAge > yourAge){
//     console.log10(`benden ${fark} yaş buyuksun`);
// }
// else if(myAge < yourAge){
//     fark *= -1;
//     console.log(`benden ${fark} yaş kücüksün`);
// }

// const age1 = prompt("1. yas:");
// const age2 = prompt("2. yas:");
// let fark = (age1-age2);

// if(age1>age2){
//     console.log(`1. kisi 2. kisiden ${fark} yas buyuktur` );
// }
// else{(age2>age1)
//     fark *=-1
//     console.log(`1. kisi 2. kisiden ${fark} yas kucuktur`);
// }

// const a = prompt("enter a number");
// kalan = a % 2;
// if ((kalan = 0)) {
//   console.log(`${a} is a even number`);
// } else {
//   console.log(`${a} is a odd number`);
// }

// let a = Number(prompt("notunuzu giriniz"));

// if (80 < a && a <= 100) {
//   console.log(`not harfiniz A`);
// } else if (70 < a && a <= 80) {
//   console.log(`not harfiniz B`);
// } else if (60 < a && a <= 70) {
//   console.log(`not harfiniz C`);
// } else if (50 < a && a <= 60) {
//   console.log(`not harfiniz D`);
// }
// else {

//     console.log(`not harfiniz F`);
// }

// const season = prompt("enter a season");

// if (season == "september" || season == "october" || season == "november") {
//   console.log(`the ${season} is in Autumn`);
// } else if (
//   season == "december" ||
//   season == "january" ||
//   season == "november"
// ) {
//   console.log(`the ${season} is in Winter`);
// } else if (season == "march" || season == "april" || season == "may") {
//   console.log(`the ${season} is in Spring`);
// } else if (season == "june" || season == "july" || season == "august") {
//   console.log(`the ${season} is in Summer`);
// }

// let dayUserInput = prompt("enter a day");
// let day =daUserInput.toLowerCase()
// if(
//   day == "monday" ||
//   day == "tuesday" ||
//   day == "wednesday" ||
//   day == "friday"
// ) {
//   console.log(`the ${day} is a working day`);
// }
// else if (day == "saturay" || day == "sunday") {
//   console.log(`the ${day} is a weekend`);
// }

// let january, march, may, july, august, october, december ="31"
// let april, june, september, november="30"
// let february="28"
// let monthUserInput = prompt("enter a month");
// let month = monthUserInput.toLowerCase()

// if (month=="january", month=="march" || month=="may" || month=="july" || month=="august" || month=="october" || month=="december"){
//   console.log(`${month} has 31 days`);
// }
// else if(month=="april" || month=="june" || month=="september" || month=="november"){
//   console.log(`${month} has 30 days`);
// }
// else if(month=="february"){
//   console.log(`${month} has 28 days`);
// }
// else{
//   console.log("enter a true month");
// }

//? ---------------Arrays--------------------------

const c = [
  23,
  ["nehir", "ayşe", 6],
  { name: "mehmet", surname: "yılmaz" },
  "naber",
];
console.log(c[1][2]);
console.log(c[1][1], c[1][0]);
console.log(c[2]);
const d = c[2];
console.log(d);

const string = "osmankaya";
console.log(string.split(""));
const names = "ali,veli,deli,haydar";

const list1 = names.split(",");

console.log(list1);

const sentence = "I like to play football";
const isim = sentence.split(" ");
console.log(isim.length);

const lastisim = isim.length - 3;
console.log(isim[lastisim]);
