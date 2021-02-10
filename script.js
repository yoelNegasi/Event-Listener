const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");

button1.addEventListener("click", btnObj);
button2.addEventListener("click", btnSkill);
button3.addEventListener("click", btnInterest);
button4.addEventListener("click", btnExperience);

function btnObj() {
  document.getElementById("obj").style.backgroundColor = "brown";
}

function btnSkill() {
  document.getElementById("allSkill").innerHTML = "Computer skills";
}

function btnInterest() {
  document.getElementById("int").innerText = "YOU JUST MISSED MY INTERESTS";
}

function btnExperience() {
  document.getElementById("exp").style.color = "red";
}
