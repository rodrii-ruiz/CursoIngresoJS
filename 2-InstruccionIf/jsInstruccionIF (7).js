    function mostrar()
    {
    //tomo la edad  
    let edad = parseInt(document.getElementById("edad").value);
    let genero = document.getElementById("estadoCivil").value;

    if(edad < 18 && genero != "Soltero"){
        alert("Es muy pequeño para NO ser soltero");
    }


}//FIN DE LA FUNCIÓN