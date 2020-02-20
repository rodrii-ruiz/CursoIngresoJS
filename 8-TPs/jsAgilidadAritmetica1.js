/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
división o multiplicación) para realizar entre estos
dos números, estas operaciones también serán Random.
En el cuadro de texto resultado el jugador debe ingresar
el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var operador = "";
var numberOne = Math.round(Math.random()*10);
var numberTwo = Math.round(Math.random()*10);
var operation = Math.round(Math.random()*3 + 1);

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

}
function Responder() {
    
    input = parseInt(document.getElementById("Respuesta").value);
    if(input == respuesta){
        alert("Ganaste");
    }
}
