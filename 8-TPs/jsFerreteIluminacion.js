/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadDeLamparas = parseInt(document.getElementById("Cantidad").value);
    var marcas = document.getElementById("Marca");
    var marcaSeleccionada = marcas.options[marcas.selectedIndex].value;
    var precio = 35;
    var total = 0;
    var impuesto = 0;
    if(cantidadDeLamparas >= 6){
        //descuento del 50%
        total = (cantidadDeLamparas*precio)*0.5;
    }
    else if(cantidadDeLamparas == 5){
        if(marcaSeleccionada == "ArgentinaLuz"){
            //descuento del 40%
            total = (cantidadDeLamparas*precio)*0.6;
        }
        else{
            //descuento del 30%
            total = (cantidadDeLamparas*precio)*0.7;
        }
    }
    else if(cantidadDeLamparas == 4){
        if(marcaSeleccionada == "ArgentinaLuz" || marcaSeleccionada == "FelipeLamparas"){
            //descuento del 25%
            total = (cantidadDeLamparas*precio)*0.75;
        }
        else{
            //descuento del 20%
            total = (cantidadDeLamparas*precio)*0.8;
        }
    }
    else if(cantidadDeLamparas == 3){
        if(marcaSeleccionada == "ArgentinaLuz"){
            //descuento del 15%
            total = (cantidadDeLamparas*precio)*0.85;
        }
        else if(marcaSeleccionada == "FelipeLamparas"){
            //descuento del 10%
            total = (cantidadDeLamparas*precio)*0.9;
        }
        else{
            //descuento del 5%
            total = (cantidadDeLamparas*precio)*0.95;
        }
    }
    if(total>120){
        impuesto = total * 0.1;
        total = total + impuesto;
        alert("Usted pago $" + impuesto + " de IIBB");
    }

    document.getElementById("precioDescuento").value = total;

}
