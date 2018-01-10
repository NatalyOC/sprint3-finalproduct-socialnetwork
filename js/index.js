$(document).ready(function() {
  /* Validacion de formulario */
  $('.button-collapse').sideNav();
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyA4JLJ0zW66Ev4W6MHXeSGHJDUJ6juimtg',
    authDomain: 'socialnetwork-c912e.firebaseapp.com',
    databaseURL: 'https://socialnetwork-c912e.firebaseio.com',
    projectId: 'socialnetwork-c912e',
    storageBucket: 'socialnetwork-c912e.appspot.com',
    messagingSenderId: '292794213885'
  };
  firebase.initializeApp(config);
  
  $('#button-signup').click(function(event) {
    
    var email = $('#email');    
    var pass = $('#password');      
    
    if (email.val() && pass.val()) {
      firebase.auth().createUserWithEmailAndPassword(email.val(), pass.val()).then(function(user) {
        console.log('everything went fine');
        console.log('user object:' + user);
        // you can save the user data here.
      }).catch(function(error) {
        console.log('there was an error');
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + ' - ' + errorMessage);
        alert(errorCode + ' - ' + errorMessage);
      });
    } else {
      console.log('fill in both fields');
    }  
  });
});