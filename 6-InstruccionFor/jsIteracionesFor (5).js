function mostrar()
{
    var howManyTimes = prompt("Cuantas veces quiere repetir el mensaje?");
    for(var i = 0 ; i < 10000 ; i++){
        if(howManyTimes == 9){
            document.write("Hola UTN FRA");
            break;
        }
        howManyTimes =prompt("Cuantas veces quiere repetir el mensaje?");
    }



}//FIN DE LA FUNCIÓN