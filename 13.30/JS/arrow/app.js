//? Exercises: Level 2
//*1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
//ax + by + c = 0
// const solving =(a,b,c)=>{
//   let x=-c/a
//   let y=-c/b
//   return `${x},${y}`
// }
// console.log(solving(6,9,-54));
//*2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// let solving2=(a,b,c)=>{
// dis=b*b - 4*a*c
//   diskar=Math.sqrt(b*b - 4*a*c)
// if(dis>=0){
//   let x1=(-b-diskar)/2*a
//     let x2 = (-b +  diskar) / 2* a;
//   return `${x1},${x2}`
// }
// else if(dis===0){
//   return -b/2*a
// }else{
//   console.log("reel kök yoktur");
// }
// }
// console.log(solving2(1,7,12));
//*3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// const printArray=(arry)=>{
//   for(i=0;i<arry.length; i++){
//     console.log(arry[i]);
//   }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let arr1=["li","veli","deli"]
// printArray(arr)
// printArray(arr1)
//*4Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = () => {
  const x = new Date();
  let y = x.getFullYear();
  let m = x.getMonth() + 1;
  let d = x.getDate();
  let t = x.getHours() + ":" + x.getMinutes();
  // const y = new Date().getDate;
  //   const y = new Date().getDate;
  //     const y = new Date().getDate;
  //       const y = new Date().getDate;
  //         const y = new Date().getDate;
  console.log(y + "/" + m + "/" + d + " " + t);
};
showDateTime();
//* 5 Declare a function name swapValues. This function swaps value of x to y.
const değiştirdim = (a, b) => {
  x = b;
  b = a;
  a = x;
  return `${a},${b}`;
};
console.log(değiştirdim(5, 6));
//*6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method)
const reversearr2 = [];
const array = (arr2) => {
  for (i = arr2.length - 1; i >= 0; i--) {
    reversearr2.push(arr2[i]);
  }
  return reversearr2;
};
const arr3 = ["alii", 3, 4, "veli", 5, 6];
console.log(array(arr3));
//*7Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// capitalizeArray=[]
// const h=(y)=>{
//   for(i=0;i<y.length;i++){
//    capitalizeArray.pushy([i].toUpperCase())
// }
// return capitalizeArray
// }
// console.log(h(arr3));
//*8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (arr, esya) => {
  arr.push(esya);
  return arr;
};
let inventory = ["pencil", "sword"];
let inventory2 = ["pencil", "sword"];
console.log(addItem(inventory, "anahtar"));
console.log(addItem(inventory2, "kalem"));
//* 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (arr, esya) => {
  x = arr.indexOf(esya);
  if (x < 0) {
    return arr;
  }
  return arr;
};
let canta = ["su", "kalem", "kitap"];
console.log(removeItem(canta, "araba"));
