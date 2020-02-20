function mostrar()
{
    let numerosDivisores = 0;
    let texto = "";
    var number = prompt("Ingrese un numero: ");
    for(var i = 0 ; i < parseInt(number) ; i++){
        if((parseInt(number)%i) == 0){
            numerosDivisores++;
            texto += i + "<br>";
        }
    }
    document.write("Numeros divisores encontrados: " + numerosDivisores + "<br>" + texto);




}//FIN DE LA FUNCIÓN