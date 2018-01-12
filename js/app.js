$(document).ready(function() {
  // Controlador de evento del elemento button login
  $('#login').on('click', function() {
    $(location).attr('href', 'views/login.html');
  });
  // Controlador de evento del elemento button signup
  $('#button-signup').on('click',function() {
    alert('Registro Sastifactorio');
    $(location).attr('href', 'views/login.html');
  });
  $('#signup').on('click', function() {
    $(location).attr('href', 'views/signup.html');
  });  
});