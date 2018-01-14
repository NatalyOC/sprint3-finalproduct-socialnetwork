$(document).ready(function() {
  // declarando variables para los inputs del formulario
  var $nameInput2 = $('#name-2');
  var $emailInput2 = $('#email-2');
  var $passwordInput2 = $('#password-2');
  // ----------------------------------------------
  var verifyName2 = false;
  var verifyEmail2 = false;
  var verifyPassword2 = false;
  // ----------------------------------------------
  $nameInput2.on('input', function() {
    verifyName2 = true;
    activeButton2();
  });
  $emailInput2.on('input', function() {
    verifyEmail2 = true;
    activeButton2();
  });
  $passwordInput2.on('input', function(event) {
    // console.log($passwordInput.val());
    var $passwordValue2 = $passwordInput2.val();
    var regExpPassword2 = new RegExp(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/);
    console.log(regExpPassword2.test($passwordValue2));
    if (regExpPassword2.test($passwordValue2)) {
      verifyPassword2 = true;
      activeButton2();
    } else {
      desactiveButton2();
    }
  });
  function activeButton2(event) {
    if (verifyName2 && verifyEmail2 && verifyPassword2) {
      $('#signup-button').attr('disabled', false);   
    }
  }
  function desactiveButton2() {
    if (verifyName2 && verifyEmail2 && verifyPassword2) {
      $('#signup-button').attr('disabled', true);
    }
  }
  // ----------------------------------------------
  $('#logo-heart').on('click', function() {
    $('#logo-heart').attr('href', '../index.html');
  });
  $('#signup-button').on('click', function(event) {
    event.preventDefault();
    console.log(event);
    $(location).attr('href', 'newsfeed.html');
  });
});