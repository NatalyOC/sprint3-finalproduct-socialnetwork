$(document).ready(function() {
  // Llamada para activar el menu hamburguesa
  $('.button-collapse').sideNav();
  $btnLogin = $('#button-login');
  
  /* var validateEmail = false;
  var validatePassword = false; 
  // Validacion de inputs
  $('#password').on('input', function(event) {
    $valueName = $(this).val();
    
    // Evalua si input se encuentra vacio por medio de la longitud
    if ($valueName.length > 0) {
      // Modifica el valor de la variable y llama a la funcion habilita boton
      validatePassword = true;
      enabledButton();
    } else {
      disabledButton();
    }
  });
  $('#email').on('input', function(event) {
    $valueName = $(this).val();
    // Evalua si input se encuentra vacio por medio de la longitud
    if ($valueName.length > 0) {
      // Modifica el valor de la variable y llama a la funcion habilita boton
      localStorage.user = $valueName;
      validateEmail = true;
      enabledButton();
    } else {
      disabledButton();
    }
  });
  function enabledButton() {
    // Evalua si las 4 variables son verdaderas
    if (validateEmail && validatePassword) {
      // Habilita boton
      $btnLogin.prop('disabled', false);
  
    }
  }
  // Funcion que deshabilita boton
  function disabledButton() {
    $btnLogin.prop('disabled', true);
  }  
  $('#button-login').on('click', function() {
    $(location).attr('href', 'newsfeed.html');
  });*/

  // ---------------------------------------------
  var $emailLogin = $('#email');
  var $passwordLogin = $('#password');
  var $buttonLogin = $('#button-login');
  // ---------------------------------------------
  var verifyEmailLogin = false;
  var verifyPasswordLogin = false;
  // ----------------------------------------------
  $emailLogin.on('input', function() {
    if ($(this).val() === localStorage.email) {
      verifyEmailLogin = true;
      activeButton2();
    }
  });
  $passwordLogin.on('input', function() {
    if ($(this).val() === localStorage.password) {
      verifyPasswordLogin = true;
      activeButton2();
    } 
  });
  function activeButton2() {
    if (verifyEmailLogin && verifyPasswordLogin) {
      $buttonLogin.prop('disabled', false);
    }
  }
  $buttonLogin.on('click', function() {
    $(location).attr('href', 'newsfeed.html'); 
  });
});
// 