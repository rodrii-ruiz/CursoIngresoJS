function mostrar()
{
	var positivo = 0;
	var negativo = 0;
	var contadorPositivo = 0;
	var contadorNegativo = 0;
	var cantidadDeCeros = 0;
	var cantidadDePares = 0;

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta != null){
		respuesta = prompt("Ingrese un numero: ");
		if(respuesta>0){
			positivo += parseInt(respuesta);
			contadorPositivo++;
		}
		if(respuesta<0){
			negativo += parseInt(respuesta);
			contadorNegativo++;
		}
		if(parseInt(respuesta) == 0){
			cantidadDeCeros++;
		}
		if((parseInt(respuesta)%2)==0){
			cantidadDePares++;
		}

	}

	document.write("Suma de los negativos: " + negativo + "<br>" +
					"Suma de los positivos: " + positivo + "<br>" +
					"Cantidad de positivos: " + contadorPositivo + "<br>" +
					"Cantidad de negativos: " + contadorNegativo + "<br>" +
					"Cantidad de ceros: " + cantidadDeCeros + "<br>" +
					"Cantidad de pares: " + cantidadDePares + "<br>" +
					"Promedio de positivos: " + (positivo/contadorPositivo) + "<br>" +
					"Promedio de negativos: " + (negativo/contadorNegativo) + "<br>" +
					"Diferencia entre positivos y negativos: " + (positivo-negativo));

}//FIN DE LA FUNCIÓN