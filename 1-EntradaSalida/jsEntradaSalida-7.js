/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numerouno;
    var numerodos;
 var resultado;
    numerouno = parseInt (document.getElementById("numeroUno").value);
    numerodos = parseInt(document.getElementById("numeroDos").value);
    resultado = numerouno + numerodos;
    alert(resultado);
	
}

function restar()
{var numerouno;
    var numerodos;
    var resultado;
    numerouno = parseInt(document.getElementById("numeroUno").value);
    numerodos = parseInt(document.getElementById("numeroDos").value);
    resultado = numerouno - numerodos;
    alert(resultado);

	
}

function multiplicar()
{ var numerouno;
    var numerodos;
    var resultado;
 numerouno = parseInt(document.getElementById("numeroUno").value);
 numerodos = parseInt(document.getElementById("numeroDos").value);
 resultado = numerouno * numerodos;
 alert(resultado);
	
}

function dividir()
{var numerouno;
    var numerodos;
    var resultado;
    numerouno = parseInt(document.getElementById("numeroUno").value);
    numerodos = parseInt(document.getElementById("numeroDos").value);
    resultado = numerouno / numerodos;
    alert(resultado);
	
}

