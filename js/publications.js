$(document).ready(function() {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  var refComments = '';
  
  var contenido=$('#public-users');
  refComments = firebase.database().ref().child('recentComments');
 
 $('#bt').on('click',function(){
    showData();
 });
  function showData() {
    refComments.on('value', function(snap) {
      var data = snap.val();
      var filaAMostrar = '';
      for (var key in data) {
        filaAMostrar += '<div>'+data[key].comment+'<div>'; 
      }
      contenido.innerHTML=filaAMostrar;
    });
  }
});