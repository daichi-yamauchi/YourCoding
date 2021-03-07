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

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1.2,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
  },
});

/********************
 * ハンバーガーメニュー *
 ********************/
// ハンバーガーボタンを押したら、メニューを表示
$('#hamburger-btn').click(function () {
  $(this).toggleClass('in-open');
  $('#nav-menu').toggleClass('hamburger-menu');
});

// メニューアイテムを押したら、メニューを閉じる
$('.menu-item').click(function () {
  $('#hamburger-btn').toggleClass('in-open');
  $('#nav-menu').toggleClass('hamburger-menu');
});
