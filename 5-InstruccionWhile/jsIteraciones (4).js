function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	do{
		alert(numero);
		numero = null;
	} while (numero < 9 && numero > 0);
}//FIN DE LA FUNCIÓN