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
