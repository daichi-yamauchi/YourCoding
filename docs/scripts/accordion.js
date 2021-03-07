const accordion = () => {
  $(function () {
    $('div.c-question').each(function () {
      $(this).click(function () {
        $('+.c-answer', this).slideToggle();
        return false;
      });
    });
  });
};

export default accordion;
