/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso(){
    var edadValidada = false;
    var sexoValidado = false;
    var estadoCivilValidado = false;
    var sueldoBrutoValidado = false;
    var numeroLegajoValidado = false;
    var nacionalidadValidada = false;

    while(!edadValidada){
        var edad = parseInt(prompt("Ingrese su edad: "));
        if(edad >= 18 && edad<=90){
            edadValidada = true;
        }
        else{
            edadValidada = false;
            alert("Por favor ingrese una edad valida.");
        }
    }

    while(!sexoValidado){
        var sexo = prompt("Ingrese su sexo: ");
        if(sexo.toLowerCase() == "m" || sexo.toLowerCase() == "f"){
            sexoValidado = true;
        }
        else{
            sexoValidado = false;
            alert("Por favor ingrese un sexo valido.");
            }   
        }

    while(!estadoCivilValidado){
        var estadoCivil = parseInt(prompt("Ingrese su estado civil: "));
        if(estadoCivil == 1 || estadoCivil == 2 || estadoCivil == 3 || estadoCivil == 4){
            estadoCivilValidado = true;
        }
        else{
            estadoCivilValidado = false;
            alert("Por favor ingrese un estado civil valido.");
        }   
    }
    
    while(!sueldoBrutoValidado){
        var sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto: "));
        if(sueldoBruto > 8000){
            sueldoBrutoValidado = true;
        }
        else{
            sueldoBrutoValidado = false;
            alert("Por favor ingrese un sueldo bruto valido.");
        }   
    }

    while(!numeroLegajoValidado){
        var numeroLegajo = prompt("Ingrese un numero de legajo: ");
        if(numeroLegajo.length == 4 && (
            numeroLegajo.charAt(0) != "0" &&
            numeroLegajo.charAt(1) != "0" &&   
            numeroLegajo.charAt(2) != "0") || (
            numeroLegajo.charAt(0) != "0" &&
            numeroLegajo.charAt(1) != "0") || (
            numeroLegajo.charAt(0) != "0")){ 
            numeroLegajoValidado = true;
        }
        else{
            numeroLegajoValidado = false;
            alert("Por favor ingrese un numero de legajo valido.");
        }   
    }

    while(!nacionalidadValidada){
        var nacionalidad = prompt("Ingrese su nacionalidad: ");
        if(nacionalidad.toLowerCase() == "a" || nacionalidad.toLowerCase() == "e" || nacionalidad.toLowerCase() == "n"){
            nacionalidadValidada = true;
        }
        else{
            nacionalidadValidada = false;
            alert("Por favor ingrese una nacionalidad valida.");
        }   
    }
    if(nacionalidadValidada){
        document.getElementById("Edad").value = edad;
        switch (sexo){
            case "m": 
            case "M":
                document.getElementById("Sexo").value = "Masculino";
            break;
            case "f":
            case "F":
                document.getElementById("Sexo").value = "Femenino";
            break;
        }
    
        switch (estadoCivil){
            case 1: 
                document.getElementById("EstadoCivil").value = "Soltero";
            break;
            case 2:
                document.getElementById("EstadoCivil").value = "Casado";
            break;
            case 3:                
                document.getElementById("EstadoCivil").value = "Divorciado";
            break;
            case 4:
                document.getElementById("EstadoCivil").value = "Viudo";
            break;
        }

        document.getElementById("Sueldo").value = sueldoBruto;
        document.getElementById("Legajo").value = numeroLegajo;

        switch (nacionalidad){
            case "a": 
            case "A":
                document.getElementById("Nacionalidad").value = "Argentino/a";
            break;
            case "e":
            case "E":
                document.getElementById("Nacionalidad").value = "Extranjero/a";
            break;
            case "n":
            case "N":
                document.getElementById("Nacionalidad").value = "Nacionalizado/a";
            break;
        }   
    }
}