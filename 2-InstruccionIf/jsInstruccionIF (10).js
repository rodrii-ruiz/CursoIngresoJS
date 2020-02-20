function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota = parseInt(Math.floor(10*Math.random())+1);
	if(nota>=9){
		alert("Excelente");
	}
	else if(nota>=4 && nota<9){
		alert("Aprobo");
	}
	else{
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN