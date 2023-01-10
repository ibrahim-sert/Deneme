const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let i = -1;
while (i < countries.length - 1) {
  i++;
  if (countries[i] == "Ethiopia") {
    continue;
  } else {
    console.log(countries[i]);
  }
}
