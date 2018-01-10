$(document).ready(function() {
  var $posting = $('#posting');
  var $textarea = $('#textarea');
  /* $posting.on('click', function() {
    // console.log('hola');
    var hey = $posting.append('<div>hola</div>');
    $posting
    if ($textarea.val()) {
      var $div = $posting.append('div');
      var $text = $posting.text($textarea.val());
    } else {
      console.log('hey');
    }
  });*/
  var $user = $('#user').val(localStorage.user);
  $posting.on('click', function(event) {
    console.log($textarea.val());
    // if ($textarea.val() !== '') {
    var $content = $textarea.val();
    var $inputField = $('.file-path').val();
    console.log($inputField);
    var div = $('body').append('<div class="textarea "> <img class="img-user img-user-2" src="../assets/images/moon.jpg" alt="img-user"><span id="user" class="username dark-text"></span><br>' + $content + '<img class="img-input" src="' + $inputField +'">' + '<br><br><hr><i class="fa fa-heart" aria-hidden="true"></i></div><br>');
    // $('body').append(div);
    // }
    $textarea.val('');
    $inputField.val('');
  });
});