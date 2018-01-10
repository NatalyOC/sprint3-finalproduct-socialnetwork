$(document).ready(function() {
  // Llamada para activar el menu hamburguesa
  $('.button-collapse').sideNav();
  // Activa el modal
  $('.modal').modal();
  var $email = $('#email').val();
  var $password = $('#password').val();
  var $btnLogin = $('#button-login');
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
 
  
 /*  auth.createUserWithEmailAndPassword(email,pass);
  $btnLogin.addEventListener('click',e=>{
    const auth = firebase.auth();
    const email=$email;
    const pass=$password;
    console.log($email);
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e=>console.log(e.message));
  }); */
  
});