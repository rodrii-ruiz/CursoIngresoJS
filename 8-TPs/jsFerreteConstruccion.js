/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   
   var largo = parseInt(document.getElementById("Largo").value);
 var ancho = parseInt(document.getElementById("Ancho").value);
    var rectanguloDeAlambre = 3*(largo*ancho);
    alert("Cantidad de alambre necesaria: " + rectanguloDeAlambre);
}
function Circulo () 
{   
    var radio = parseInt(document.getElementById("Radio").value);
   var radioALa2 = Math.pow(radio, 2);
    console.log(radioALa2);
    var circuloDeAlambre = 3*(3.14*radioALa2);
    alert("Cantidad de alambre necesaria: " + circuloDeAlambre);
}
function Materiales () 
{
  var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
   var metrosCuadrados = (largo*ancho);
    var bolsasDeCemento = 0;
    var bolsasDeCal = 0;
    for(var i = 0; i < metrosCuadrados ; i++){
        bolsasDeCemento += 2;
        bolsasDeCal += 3;
    }
    alert("Se necesitan " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de cal.");
}