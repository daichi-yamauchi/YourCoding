const hamburger = () => {
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
};

export default hamburger;
