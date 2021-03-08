const formValidation = () => {
  let nameValid = false;
  let emailValid = false;
  let commentValid = false;
  let privacyValid = false;
  const buttonEnable = () => {
    if (nameValid && emailValid && commentValid && privacyValid) {
      $('#submit').prop('disabled', false);
    } else {
      $('#submit').prop('disabled', true);
    }
  };

  $('#name').on('blur', function () {
    if (
      $(this)
        .val()
        .match(/[^\s\t]/)
    ) {
      $(this).prev().children('.c-validation').addClass('valid');
      nameValid = true;
    } else {
      $(this).prev().children('.c-validation').removeClass('valid');
    }
    buttonEnable();
  });

  $('#email').on('blur', function () {
    if (
      $(this)
        .val()
        .match(
          /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
        )
    ) {
      $(this).prev().children('.c-validation').addClass('valid');
      emailValid = true;
    } else {
      $(this).prev().children('.c-validation').removeClass('valid');
    }
    buttonEnable();
  });

  $('#comment').on('blur', function () {
    if (
      $(this)
        .val()
        .match(/[^\s\t]/)
    ) {
      $(this).prev().children('.c-validation').addClass('valid');
      commentValid = true;
    } else {
      $(this).prev().children('.c-validation').removeClass('valid');
    }
    buttonEnable();
  });

  $('#privacy').on('change', function () {
    if ($(this).val()) {
      privacyValid = true;
    } else {
      privacyValid = false;
    }
    buttonEnable();
  });
};

export default formValidation;
