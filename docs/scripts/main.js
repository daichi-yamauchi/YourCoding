/***** よくある質問のアコーディオンメニューの実装 *****/
$(function () {
  $('div.c-question').each(function () {
    $(this).click(function () {
      $('+.c-answer', this).slideToggle();
      return false;
    });
  });
});

/***** 制作実績のスワイパーの実装 *****/

// import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
  },
});
