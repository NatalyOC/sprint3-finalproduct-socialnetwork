$(document).ready(function() {
  // Llamada para activar el menu hamburguesa
  $('.button-collapse').sideNav();
  $('#button-login').on('click', function() {
    $(location).attr('href', 'newsfeed.html');
  });
});

