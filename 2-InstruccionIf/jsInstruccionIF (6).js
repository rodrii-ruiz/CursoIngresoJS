function mostrar(){
//tomo la edad  

    let edad = parseInt(document.getElementById("edad").value);
    if(edad >= 18){
        alert("La persona es mayor de edad");
    }
    else if(edad <= 13){
        alert("La persona es menor de edad");
    }
    else{
        alert("La persona es un adolescente");
    }

}//FIN DE LA FUNCIÓN