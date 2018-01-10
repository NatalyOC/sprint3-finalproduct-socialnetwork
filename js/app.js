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
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
});