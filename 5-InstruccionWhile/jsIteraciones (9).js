function mostrar()
{
	var max = -10000;
	var min = 10000;
	var contador=0;
	// declarar variables
	
	var respuesta='si';


	while(respuesta != null){
		respuesta = prompt("Ingrese un numero: ");
		if(respuesta != null && parseInt(respuesta)>max){
			max = parseInt(respuesta);
		}
		else if(respuesta != null && parseInt(respuesta)<min){
			min = parseInt(respuesta);
		}

	}


document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;



}//FIN DE LA FUNCIÓN