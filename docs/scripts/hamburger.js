const hamburger = () => {
  // ハンバーガーボタンを押したら、メニューを表示
  $('#hamburger-btn').click(function () {
    $(this).toggleClass('in-open');
    $('#nav-menu').toggleClass('hamburger-menu');
  });

  // メニューアイテムを押したら、メニューを閉じる
  $('.c-scroll-link').click(function () {
    $('#hamburger-btn').removeClass('in-open');
    $('#nav-menu').removeClass('hamburger-menu');
  });
};

export default hamburger;
