const btnMenu = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn__close");
const menu = document.querySelector(".hero__menu");
btnMenu.onclick = () => {
  menu.classList.add("show--menu");
};
btnClose.onclick = () => {
  menu.classList.remove("show--menu");
};

let cta = document.querySelectorAll(".nav__cta");

for (let i = 0; i < cta.length; i++) {
  cta[i].onclick = (event) => {
    let current = document.querySelector(".active");
    current.classList.remove("active");
    cta[i].classList.add("active");
    menu.classList.remove("show--menu");
  };
}
