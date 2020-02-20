function mostrar()
{
    let numerosPares = 0;
    let texto = "";
    var number = prompt("Ingrese un numero: ");
    for(var i = 0 ; i < parseInt(number) ; i++){
        if((parseInt(i)%2) == 0){
            numerosPares++;
            texto += i + "<br>";
        }
    }
    document.write("Numeros pares encontrados: " + numerosPares + "<br>" + texto);

}//FIN DE LA FUNCIÓN