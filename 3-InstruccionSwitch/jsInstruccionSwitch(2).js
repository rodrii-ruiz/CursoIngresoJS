function mostrar(){
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
        switch(mesDelAño){
            case "Julio":
            case "Agosto":
            case "Septiembre":
                alert("Abrigate que hace frio");
            break;
            case "Abril":
            case "Mayo":
            case "Junio":
                alert("Falta para el invierno.");
            break;
            case "Diciembre":
            case "Enero":
            case "Febrero":
                alert("Ya pasamos el frio, ahora calor!!");
            break;
    }
}//FIN DE LA FUNCIÓN