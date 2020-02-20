function mostrar()
{

    let numerosDivisores = 0;
    let texto = "";
    var number = prompt("Ingrese un numero: ");
    for(var i = 2 ; i <= parseInt(number) ; i++){
        if((parseInt(number)%i) === 0){
            texto = "No es primo";
        }
        else{
            texto = "Es primo";
        }
    }
    document.write(texto);




}//FIN DE LA FUNCIÓN