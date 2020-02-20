function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';


	while(respuesta != null){
		respuesta = prompt("Ingrese un numero: ");
		if(respuesta != null && respuesta>0){
			positivo += parseInt(respuesta);
		}
		else if(respuesta != null && respuesta<0){
			negativo = (negativo * repuesta);
		}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN