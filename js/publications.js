$(document).ready(function() {
  // Llamada para activar el menu hamburguesa
  $('.button-collapse').sideNav();
  // Activa el modal
  $('.modal').modal();
  // Declaramos variables que almacenará la referencia
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