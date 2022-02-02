var nombreEncuestado = document.getElementById('nombre');
document.getElementById('BotonEnviar').addEventListener('click', ()=>{
    var nombre = nombreEncuestado.value
    var respuestaPregunta1 = setAnswers("preg1");
    var respuestaPregunta2 = setAnswers("preg2");
    var respuestaPregunta3 = setAnswers("preg3");
    var respuestaPregunta4 = setAnswers("preg4");
    var respuestaPregunta5 = setAnswers("preg5");
    //var respuestasGuardadas = nombre + ' sus respuestas: [' + respuestaPregunta1 + '].';
    var respuestasGuardadas = nombre + ' sus respuestas:[' + respuestaPregunta1 + ', ' + respuestaPregunta2 + ', ' + respuestaPregunta3 + ', ' + respuestaPregunta4 + ', ' + respuestaPregunta5 + '].';
    var blob = new Blob([respuestasGuardadas], {
      type:"application/json;utf - 8"
    })
    var userLink = document.createElement('a');
    userLink.setAttribute('download', "respuestas.txt");
    userLink.setAttribute('href', window.URL.createObjectURL(blob));
    userLink.click();
})

var setAnswers = function(numberPreg){
      var opciones = document.getElementsByName(numberPreg);
      for(i=0; i<opciones.length; i++){
        if(opciones[i].checked){
          return opciones[i].value;
        }
      }

};
