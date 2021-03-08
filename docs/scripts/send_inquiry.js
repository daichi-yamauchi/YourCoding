const sendInquiry = () => {
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url:
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfl-6gaX2s_7E9u067jsxvasd_c-a9Q9r_oEei-yQg3gqJaqQ/formResponse',
      data: formData,
      type: 'POST',
      dataType: 'xml',
      statusCode: {
        0: function () {
          $('.c-complete-send').slideDown();
          $('#submit').fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $('.c-false-send').slideDown();
        },
      },
    });
    event.preventDefault();
  });
};

export default sendInquiry;
