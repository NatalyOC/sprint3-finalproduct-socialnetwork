$(document).ready(function() {
  // Llamada para activar el menu hamburguesa
  $('.button-collapse').sideNav();
  // Activa el modal
  $('.modal').modal();
  $('.dropdown-button').dropdown('open');
  var $posting = $('#posting');
  var $textarea = $('#textarea');
  var images = '';
  var $imageInput = $('#img1');
  var userSession = localStorage.username;
  $('.usertext').text(userSession);
  var $userText = $('.usertext').text(userSession);
  
  $posting.on('click', function(event) {
    console.log($textarea.val());
    var $content = $textarea.val();
    var div = $('#container-publish').append('<div class="div-publish"><img class="img-user img-user-2" src="../assets/images/moon.jpg" alt="img-user"><span id="user" class="username dark-text">' + userSession + '</span><br>' + $content + '<br><img class="img-input" src="' + images + '">' + '<br><br><i class="fa fa-heart" aria-hidden="true"></i><br></div><br><hr><br>');

    $textarea.val('');
    $inputField.val('');
    $imageInput.val('') ;
    // $inputField.val('');
    countPost();
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
// Contador de Posts
function countPost() {
  var countElements = $('.count-publish').length;
  console.log(countElements);
  $('#span-posts').text(countElements);
}    
// Obtiene las publicaciones 
function getPublish() {
  return data.publications;
}
// Muestra las publicaciones 
function showPublish(user) {
  var publication = getPublish();
  for (var i = 0;i < publication.length;i++) {
    if ((publication[i].iduser) == user) {
      var div = $('#container-publish').append('<img class="img-user img-user-2 count-publish" src="../assets/images/moon.jpg" alt="img-user"><span id="user" class="username dark-text"></span><br>' + publication[i].text + '<img class="img-input" src="">' + '<br><br><hr><i class="fa fa-heart" aria-hidden="true"></i><br>');
    }
  }
}