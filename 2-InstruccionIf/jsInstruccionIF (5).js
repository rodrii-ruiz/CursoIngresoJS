function mostrar()
{
    //tomo la edad  
    let edad = parseInt(document.getElementById("edad").value);
    if(edad <= 13 || edad >= 17){
        alert("La persona no es adolescente");
    }

}//FIN DE LA FUNCIÓN