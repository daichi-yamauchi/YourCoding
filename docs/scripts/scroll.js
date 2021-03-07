// 特定の位置までスクロール
const scrollPage = (link, target) => {
  const offset = 100;
  $(link).click(() => {
    $('html,body').animate({ scrollTop: $(target).offset().top - offset });
  });
};

const scroll = () => {
  $(window).load(function () {
    scrollPage('.link-feature', '#feature');
    scrollPage('.link-price', '#price');
    scrollPage('.link-contact', '#contact');
  });
};

export default scroll;
