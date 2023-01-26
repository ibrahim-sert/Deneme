let bilgituş = document.addEventListener("keydown", (e) => {
  par1.innerText = "You Press" + "  " + e.key;
});
let bilgichar = document.addEventListener("keydown", (e) => {
  par2.innerText = e.keyCode;
});

let par1 = document.getElementById("par1");

par1.style.backgroundColor = "gray";
par1.style.width = "200px";
par1.style.height = "40px";
let par2 = document.getElementById("par2");

par2.style.backgroundColor = "gray";
