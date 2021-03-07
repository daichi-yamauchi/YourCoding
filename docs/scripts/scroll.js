const scroll = () => {
  const hOffset = window.innerWidth > 1024 ? $('.l-nav-bar').height() : 0;
  $('a.c-scroll-link').on('click', function () {
    const href = $(this).attr('href');
    const target = $(href == '#' || href == '' ? 'body' : href);
    const position = target.offset().top - hOffset;
    $('html, body').animate({ scrollTop: position }, 500, 'swing');
    return false;
  });
};

export default scroll;
