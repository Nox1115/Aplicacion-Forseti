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
    var nombreEncuestado = document.getElementById('nombre').value();
    var respuestaPregunta1 = setAnswers('pregunta1');
    var respuestaPregunta2 = setAnswers('pregunta2');
    var respuestaPregunta3 = setAnswers('pregunta3');
    var respuestaPregunta4 = setAnswers('pregunta4');
    var respuestaPregunta5 = setAnswers('pregunta5');

    var respuestasGuardadas = nombreEncuestado + ' sus respuestas:[' + respuestaPregunta1 + ', ' + respuestaPregunta2 + ', ' + respuestaPregunta3 + ', ' + respuestaPregunta4 + ', ' + respuestaPregunta5 + '].';
    var blob = new Blob([respuestasGuardadas], {
      type:"application/json;utf - 8"
    })
    var userLink = document.createElement('a');
    userLink.setAttribute('download', "respuestas.txt");
    userLink.setAttribute('href', window.URL.createObjectURL(blob));
    userLink.click();
})
