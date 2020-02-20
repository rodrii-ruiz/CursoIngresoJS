/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
var startTime;
var stopTime;
function comenzar(){    
    startTime = new Date();
    let random = Math.round(Math.random()*5);
    console.log(random);
    switch (random){
        case 0:
            ColorSecreto = "azul";
        break;
        case 1:
            ColorSecreto = "amarillo";
        break;
        case 2:
            ColorSecreto = "marron";
        break;
        case 3:
            ColorSecreto = "verde";
        break;
        case 4:
            ColorSecreto = "celeste";
        break;
        case 5:
            ColorSecreto = "rojo";
        break;
    }
    console.log(ColorSecreto);
    document.getElementById("ColorElejido").value = ColorSecreto;
}

function Responder(colorParametro){
	if(colorParametro == ColorSecreto){
        stopTime = new Date();
        alert("Tiempo: " + Math.round((stopTime-startTime)*0.001) + " segundo/s.");
    }
}
