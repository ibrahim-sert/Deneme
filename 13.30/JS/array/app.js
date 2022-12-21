const empty = Array();
const aar = [1, 2, 3, 4, 5];
console.log(aar.length);

console.log(aar[0], aar[2], aar[4]);

const mixDataType = [
  "hello",
  1,
  7,
  { name: "john", surname: "ellis" },
  [1, 7, 9],
  true,
  [],
];
console.log(mixDataType);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);

console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

console.log(`${itCompanies.toString()} are big companies`);

console.log(itCompanies.indexOf("Google"));

//!----!. Yöntem-------

// let itCompany = prompt("enter a company");

// if (itCompanies.indexOf(itCompany) >= 0) {
//   console.log(`${itCompany} vardır`);
// } else {
//   console.log(`Şirket bulunamadı`);
// }

//!------------2.Yöntem-----------
// const company = prompt("enter a company")
// const varMi = itCompanies.includes(company)

// if(varMi){
//   console.log(company);
// }
// else{
//   console.log(`Şirket bulunamadı`);
// }

const company = prompt("enter your company");

const first = itCompanies[company].split("");
console.log(first);
