let Containers1 = document.getElementsByClassName("Container1");
let Containers2 = document.getElementsByClassName("Container2");
let Img = document.getElementById("BannerProduct");
let Name = document.getElementById("Flavour");
let Rating = document.getElementById("Rating");
let Reveal1 = document.getElementById("Reveal1");
let Reveal2 = document.getElementById("Reveal2");
let Reveal3 = document.getElementById("Reveal3");
let Reveal4 = document.getElementById("Reveal4");
let Reveal5 = document.getElementById("Reveal5");
let Reveal6 = document.getElementById("Reveal6");

document.getElementById("P1btn").addEventListener("click", () => {
  Img.src = "./Images/P1.png";
  setContainersBackground("#199593ab", "#559988");
  Name.innerHTML = "Wild Stone Edge Perfume";
  Rating.innerHTML = "⭐⭐⭐⭐☆";
});

document.getElementById("P2btn").addEventListener("click", () => {
  Img.src = "./Images/P2.png";
  setContainersBackground("#199593bd", "#08708ffc");
  Name.innerHTML = "Wild Stone Hydra Energy Perfume";
  Rating.innerHTML = "⭐⭐⭐☆☆";
});

document.getElementById("P3btn").addEventListener("click", () => {
  Img.src = "./Images/P3.png";
  setContainersBackground("#ef5555e2", "#966476");
  Name.innerHTML = "Wild Stone Ultra Sensual Perfume";
  Rating.innerHTML = "⭐⭐☆☆☆";
});

document.getElementById("P4btn").addEventListener("click", () => {
  Img.src = "./Images/P4.png";
  setContainersBackground("#31d77cf0", "#49807289");
  Name.innerHTML = "Wild Stone Forest Spice Perfume";
  Rating.innerHTML = "⭐⭐⭐☆☆";
});

function setContainersBackground(color1, color2) {
  for (let i = 0; i < Containers1.length; i++) {
    Containers1[i].style.background = `linear-gradient(${color1}, ${color2})`;
  }
  for (let i = 0; i < Containers2.length; i++) {
    Containers2[i].style.background = `linear-gradient(${color2}, ${color1})`;
  }
}


// Hamburger 

const Hamburger = document.querySelector(".Hamburger");
const Navs = document.querySelector(".Navs");
const Links = document.querySelector(".btn")
Hamburger.addEventListener("click", () => {
  Navs.classList.toggle('Slide');
});
