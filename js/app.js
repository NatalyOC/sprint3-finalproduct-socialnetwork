$(document).ready(function() {
  var $login = $('#login');
  $login.on('click', function() {
    $(location).attr('href', 'views/login.html');
  });
  $signup.on('click', function() {
    $('body').append('');
  }
});