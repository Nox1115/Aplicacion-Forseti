var setAnswers = function(idFormularioPregunta){
    var respuesta = null;
    let opciones = document.querySelectorAll('input[type="radio"]');

    document.querySelector(idFormularioPregunta).addEventListener('change',()=>{

    opciones.forEach(opcion =>{

        if(opcion.checked){
            respuesta = opcion.value;
            return respuesta;
        }
    })
})
};

$(document).ready(function() {
    $('#botonEnviar').click(function () {


      var respuestapreg1 = $('#txtfirstname').val();
      var respuestapreg2 = $('#txtlasttname').val();
      var respuestapreg3 = $('#txtemail').val();
      var respuestapreg4 = $('#txtfirstname').val();
      var respuestapreg5 = $('#txtlasttname').val();

      var userDetails = firstname + ' ' + lastname + ' ' + email;

      var blob = new Blob([userDetails],
      {
          type:"application/json;utf - 8"
      }
    )
    var userLink = document.createElement('a');
    userLink.setAttribute('download', firstname + '.txt');
    userLink.setAttribute('href', window.URL.createObjectURL(blob));
    userLink.click();
  });
});
