$(document).ready(function() {
  // Llamada para activar el menu hamburguesa
  $('.button-collapse').sideNav();
  $btnLogin = $('#button-login');
  
  var validateEmail = false;
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
  });
});
