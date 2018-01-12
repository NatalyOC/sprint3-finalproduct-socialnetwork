$(document).ready(function() {
  // Llamada para activar el menu hamburguesa
  $('.button-collapse').sideNav();
  // Activa el modal
  $('.modal').modal();
  $('.dropdown-button').dropdown('open');
  var $posting = $('#posting');
  var $textarea = $('#textarea');
  var images = '';
  var userSession=localStorage.user;
  $('#user').text(userSession);
  
  $posting.on('click', function(event) {
    console.log($textarea.val());
    var $content = $textarea.val();
    var div = $('#container-publish').append('<img class="img-user img-user-2" src="../assets/images/moon.jpg" alt="img-user"><span id="user" class="username dark-text"></span><br>' + $content + '<img class="img-input" src="' + images + '">' + '<br><br><hr><i class="fa fa-heart" aria-hidden="true"></i><br>');
    
    $textarea.val('');
    $inputField.val('');
  });

  // captura imagen y muestra el elemento
  $('#img-file').on('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event2) {
      images = event2.target.result;
      $('#img1').attr('src', event2.target.result);
    };
    reader.readAsDataURL(file);
  });
});