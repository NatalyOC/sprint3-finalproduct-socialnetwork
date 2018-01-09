$(document).ready(function() {

  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  var refComments = '';
  
  var contenido=$('#public-users');
  var refData = firebase.database().ref();
  refComments =refData.child('recentComments');
 
 $('#bt').on('click',function(){
    showData();
 });
  function showData() {
    refComments.on('value', function(snap) {
      var data = snap.val();
      console.log(data);
      var filaAMostrar = '';
      for (var key in data) {
        filaAMostrar += '<div>'+data[key]+'<div>'; 
      }
      contenido.append(filaAMostrar);
    });
  }
});