//*=======EX1=======/
//?======Q1========/
const p1 = document.querySelector("p");
console.log(p1);
//?======Q2========/
let x1 = document.getElementById("par1");
let x2 = document.getElementById("par2");
let x3 = document.getElementById("par3");
let x4 = document.getElementById("par4");

console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);

//?======Q3========/
let pp = document.querySelectorAll("p");

console.log(pp);

console.log(Object.values(pp));

//?======Q4========/
pp.forEach((x) => console.log(x.innerText));

//?======Q5========/

const p4 = (pp[3].innerText += " Dördüncü Paragraf");

console.log(p4);

//?======Q6========/

pp.forEach((title) => title.setAttribute("class", "myClass"));

console.log(pp);

const elem = [].map.call(pp, (x) => x.getAttribute("class"));
console.log(elem);

//*=======EX2=======/
//?======Q1========/
pp.forEach((x) => {
  x.style.backgroundColor = "blue";
  x.style.color = "yellow";
  x.style.border = "solid 4px black";
  x.style.fontSize = "2rem";
  x.style.fontFamily = "arial";
  x.style.width = "200px";
});

let body = document.getElementsByTagName("body");

console.log(body);

body[0].style.display = "flex";
body[0].style.justifyContent = "space-around";

//?======Q2========/

let oddEvenp=document.querySelectorAll("p:nth-child(odd)")
let evenOddp=document.querySelectorAll("p:nth-child(even)")

console.log(oddEvenp);
console.log(evenOddp);

oddEvenp.forEach(x=>x.style.backgroundColor="green")

evenOddp.forEach(x=>x.style.backgroundColor="black")

//?======Q3========/

pp.forEach(x=>x.classList.add("myClass","p-title"))
pp.forEach(x=>x.classList.add("a","p-title"))


console.log(pp);


