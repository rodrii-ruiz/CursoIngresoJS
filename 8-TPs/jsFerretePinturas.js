/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temp = parseInt(document.getElementById("Temperatura").value);
    alert(temp + " fahrenehit son " + (temp - 32)/1.8 + " centigrados.");
}

function CentigradosFahrenheit () 
{
	var temp = parseInt(document.getElementById("Temperatura").value);
    alert(temp + " centigrados son " + (temp + 32)*1.8 + " fahrenheit.");
}
