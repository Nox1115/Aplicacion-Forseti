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


document.getElementById('BotonPrueba').addEventListener('click', ()=>{
    var nombre1 = "Braulio";
    var nombre2 = "Nicolas";
    var nombre3 = "Yayo";

    var nombresCombinados = nombre1 + ' ' + nombre2 + ' ' + nombre3;
    var blob = new Blob([nombresCombinados], {
      type:"application/json;utf - 8"
    })
    var userLink = document.createElement('a');
    userLink.setAttribute('download', "descarga.txt");
    userLink.setAttribute('href', window.URL.createObjectURL(blob));
    userLink.click();
})
