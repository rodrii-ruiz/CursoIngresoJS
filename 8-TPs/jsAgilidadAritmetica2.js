/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

var temporizador;
var respuesta;
var operador = "";
var numberOne = Math.round(Math.random()*10);
var numberTwo = Math.round(Math.random()*10);
var operation = Math.round(Math.random()*3 + 1);
var perdio = true;
function comenzar() {

    if(operation == 1){
        operador = "+";
    }
    else if(operation == 2){
        operador = "-";
    }
    else if(operation == 3){
        operador = "*";
    }
    else {
        operador = "/";
    }

    document.getElementById("PrimerNumero").value = numberOne;
    document.getElementById("Operador").value = operador;
    document.getElementById("SegundoNumero").value = numberTwo;
    switch (operador){
        case "+":
            respuesta = numberOne + numberTwo;
        break;
        case "-":
            respuesta = numberOne - numberTwo;
        break;
        case "/":
            if(numberTwo != 0){
                respuesta = numberOne / numberTwo;
            }
            else{
                alert("No se puede dividir por 0");
            }
        break;
        case "*":
            respuesta = numberOne * numberTwo;
        break;
    }
    console.log(respuesta);
        window.setTimeout(function(){
            if(input == respuesta){
                alert("Ganaste");
            }
            else{
                alert("Perdiste");
        }
    },4000);
}
function Responder() {
    input = parseInt(document.getElementById("Respuesta").value);
}
