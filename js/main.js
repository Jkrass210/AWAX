//подключаем свайпер
const swiper = new Swiper(".swiper-container--header", {
 slidesPerView: 1,
 
  loop: false,

  pagination: {
   el: ".swiper-pagination",
   clickable: true,
 },
});

//медленный скролл
document.querySelectorAll(".js-scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
  });
});

//настройки бургера
const burger = document.querySelector("#burger");
const nav = document.querySelector("#nav");
const closeNav = document.querySelector("#closeNav");
let linkNav = document.querySelectorAll(".nav__link")

burger.addEventListener('click', function () {
  nav.classList.toggle("header__burger-active");
  document.body.classList.toggle("stop-scroll");
});

closeNav.addEventListener('click', function() {
  nav.classList.remove("header__burger-active");
  document.body.classList.remove("stop-scroll");
});

linkNav.forEach(function (elem) {
  elem.addEventListener('click', function() {
    nav.classList.remove("header__burger-active");
    document.body.classList.remove("stop-scroll");
  })
});

//инпутмаск
const form = document.querySelector('.modal-container__form');
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask('+00 9 9999 9999');
im.mask(selector);



//настройка кнопки вызова
const heroBtnTel =  document.querySelector("#heroBtnTel");
const modal = document.querySelector("#modal");
const overlay = document.querySelector(".overlay");

heroBtnTel.addEventListener('click', function() {
  modal.style.visibility = "visible";
  modal.style.top = "50%";
  modal.style.zIndex = "1000";
  overlay.style.visibility = "visible";
  overlay.style.bottom = "0";
  document.body.classList.add("stop-scroll");
});

