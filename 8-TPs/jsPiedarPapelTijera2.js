var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar(){
    eleccionMaquina = Math.round(2*Math.random()) + 1;
    console.log(eleccionMaquina);
}
function piedra(){
	if(eleccionMaquina == 1){
		alert("Empate");
		ContadorDeEmpates++;
    }
    else if(eleccionMaquina == 2){
		alert("Perdiste");
		ContadorDePerdidas++;
    }
    else{
		alert("Ganaste");
		ContadorDeGanadas++;
	}
	comenzar();
	mostrarResultado()
}
function papel(){
	if(eleccionMaquina == 1){
		alert("Ganaste");
		ContadorDeGanadas++;
    }
    else if(eleccionMaquina == 2){
		alert("Empate");
		ContadorDeEmpates++;
    }
    else{
		alert("Perdiste");
		ContadorDePerdidas++;
	}
	comenzar();
	mostrarResultado()
}
function tijera(){
	if(eleccionMaquina == 1){
		alert("Perdiste");
		ContadorDePerdidas++;
    }
    else if(eleccionMaquina == 2){
		alert("Ganaste");
		ContadorDeGanadas++;
    }
    else{
		alert("Empate");
		ContadorDeEmpates++;
	}
	comenzar();
	mostrarResultado()
}

function mostrarResultado()
{
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;
}