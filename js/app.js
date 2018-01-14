$(document).ready(function() {
  // Controlador de evento del elemento button login
  $('#login').on('click', function() {
    $(location).attr('href', 'views/login.html');
  });
  // Controlador de evento del elemento button login en el header
  var $buttonSignup = $('#signup');
  $buttonSignup.on('click', function() {
    $(location).attr('href', 'views/signup.html');
  }); 
  // validar formulario del index
  var $nameInput = $('#name');
  var $emailInput = $('#email');
  var $passwordInput = $('#password');
  var $spanForm = $('#span-signup');
  // -----------------------
  var verifyName = false;
  var verifyEmail = false;
  var verifyPassword = false;
  // -----------------------
  $nameInput.on('input', function(event) {
    verifyName = true;
    activeButton();
  }); 
  $emailInput.on('input', function(event) {
    verifyEmail = true;
    activeButton();
  });
  $passwordInput.on('input', function(event) {
    // console.log($passwordInput.val());
    var $passwordValue = $passwordInput.val();
    var regExpPassword = new RegExp(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/);
    // console.log(regExpPassword.test($passwordValue));
    /**
     * Contraseñas que contengan al menos una letra mayúscula.
Contraseñas que contengan al menos una letra minúscula.
Contraseñas que contengan al menos un número o caracter especial.
Contraseñas cuya longitud sea como mínimo 8 caracteres.
Contraseñas cuya longitud máxima no debe ser arbitrariamente limitada.
aA789ggg     
*/
    if (regExpPassword.test($passwordValue)) {
      verifyPassword = true;
      activeButton();
      $('#span-signup').fadeOut();
    } else {
      $('#span-signup').fadeIn();
      desactiveButton();
    }
  });
  function activeButton(event) {
    if (verifyName && verifyEmail && verifyPassword) {
      $('#button-signup').css('background', 'teal');     
    }
  }
  function desactiveButton() {
    if (verifyName && verifyEmail && verifyPassword) {
      $('#button-signup').attr('disabled', true);
    }
  }
  $('#button-signup').on('click', function(event) {
    event.preventDefault();
    console.log(event);
    $(location).attr('href', '../views/newsfeed.html');
  });
});
