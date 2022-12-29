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


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.hero__list a[href="#${id}"]`);
      if (entry.isIntersecting) {
        let current = document.querySelector(".active");
        current.classList.remove("active");
        menuLink.classList.add("active");
      }
    });
  },
  { rootMargin: "-35% 0px -65% 0px" }
);

for (let i = 0; i < cta.length; i++) {
  const hash = cta[i].getAttribute("href");
  const section = document.querySelector(hash);
  if (section) {
    observer.observe(section);
  }
}

