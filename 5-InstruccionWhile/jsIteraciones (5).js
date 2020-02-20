function mostrar()
{

var sexo = prompt("ingrese f ó m .");


while(sexo == "f"){
    sexo = "Femenino";
}
while(sexo == "m"){
    sexo = "Masculino";
}

document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN