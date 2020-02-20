function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta != null){
		respuesta = prompt("Ingrese un numero: ");
		if(respuesta != null){
			acumulador += parseInt(respuesta);
			contador++;
		}
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN