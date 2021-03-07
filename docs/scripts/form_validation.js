const formValidation = () => {
  let nameValid = false;
  let emailValid = false;
  let commentValid = false;
  let privacyValid = false;
  const buttonEnable = () => {
    console.log('sss');
    if (nameValid && emailValid && commentValid && privacyValid) {
      $('#submit').prop('disabled', false);
    } else {
      $('#submit').prop('disabled', true);
    }
  };

  $('#name').on('blur', () => {
    if (
      $('#name')
        .val()
        .match(/[^\s\t]/)
    ) {
      $('#name').prev().children('.c-validation').addClass('valid');
      nameValid = true;
    } else {
      $('#name').prev().children('.c-validation').removeClass('valid');
    }
    buttonEnable();
  });

  $('#email').on('blur', () => {
    if (
      $('#email')
        .val()
        .match(
          /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
        )
    ) {
      $('#email').prev().children('.c-validation').addClass('valid');
      emailValid = true;
    } else {
      $('#email').prev().children('.c-validation').removeClass('valid');
    }
    buttonEnable();
  });

  $('#comment').on('blur', () => {
    if (
      $('#comment')
        .val()
        .match(/[^\s\t]/)
    ) {
      $('#comment').prev().children('.c-validation').addClass('valid');
      commentValid = true;
    } else {
      $('#comment').prev().children('.c-validation').removeClass('valid');
    }
    buttonEnable();
  });

  $('#privacy').on('change', () => {
    if ($('#comment').val()) {
      privacyValid = true;
    } else {
      privacyValid = false;
    }
    buttonEnable();
  });
};

export default formValidation;
