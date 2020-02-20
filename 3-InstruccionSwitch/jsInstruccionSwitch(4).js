function mostrar(){
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño){
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Mes con 30 dias");
        break;
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Mes con 31 dias");
        break;
        default:
            alert("Mes con 28 dias");
        break;
    }
}//FIN DE LA FUNCIÓN