// document.getElementById("demo").innerHTML="Azime"

// const afa=document.getElementById("intro")

// const add = async function (x) {
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     return x + a + b;

//   };

//   add(10).then((v) => {
//     console.log(v); // prints 60 after 4 seconds.
//   });

//   fetch('https://restcountries.com/v2/all').then((res)=>res.json().then(data)

const bekle = (ms) => {
  //!blocking code
  const start = new Date().getTime();
  while (new Date().getTime() < start + ms); //? süslü açamayacaksan ";" kullan!!!
};

console.log("hello");
console.time("timer");

bekle(3000);
console.timeEnd("timer");
console.log("FS11");
