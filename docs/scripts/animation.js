const animation = () => {
  $('section').attr({
    'data-aos': 'fade-up',
  });

  $('.p-feature-outer:nth-child(even)').attr({
    'data-aos': 'fade-left',
  });
  $('.p-feature-outer:nth-child(odd)').attr({
    'data-aos': 'fade-right',
  });

  $('.p-article-item').attr({
    'data-aos': 'flip-left',
  });

  if (window.innerWidth > 1024) {
    for (let n = 0; n < 3; n++)
      $(`.p-article-item:nth-child(${n + 1})`).attr({
        'data-aos-delay': 200 * n,
      });
  }

  AOS.init();
};

export default animation;
