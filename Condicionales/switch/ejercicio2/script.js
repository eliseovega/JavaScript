    qxc/*Desarrolle una app Js que pida al usuario dos numero y una opcion del menu 1.suma 2.resta 
3.multiplicacion y 4.division. calcule la operacion y la muestre Si se introduce un
 valor que no corresponda a una opcion a operar, se le mostrará un mensaje al usuario.*/
//Definir Variables
var n1; //variable de entrada
var n2; //variable de entrada
var opcion; // variable de entrada
var suma; //variable de salida
var resta; //variable de salida
var multiplicacion; //variable de salida
var division; //variable de salida
//Mensaje de entrada >> como es un string se pasa a parseFloat
opcion = parseFloat(prompt("Digite la opcion (1-4) a operar:"));
n1 = parseFloat(prompt("Digite un primero número:"));
n2 = parseFloat(prompt("Digite un segundo número:"));

//Switch palabra reservada que funciona igual que segun en pseint
switch (opcion) { //(dia)el valor de entrada introduccido por el usuario
    case 1: //case "":compara el valor de entrada con el valor supuesto
        suma=n1+n2;
        document.write("La Suma de: "+n1+" + "+n2+" es: "+suma); //Mensaje de salida 
        break; //break; Esta sentencia le indica |que salga del código switch en ese punto
    case 2:
        resta = n1-n2;
        document.write("La Resta de: "+n1+" - "+n2+" es: "+resta); //Mensaje de salida 
        break;
    case 3:
        multiplicacion = n1*n2;
        document.write("La Multiplicación de: "+n1+" * " +n2+ " es: "+multiplicacion); //Mensaje de salida 
        break;
    case 4:
        division = n1/n2;
        document.write("La División de: "+n1+" / "+n2+" es: "+division); //Mensaje de salida 
        break;
    default: // De otro modo, sino se cumple ningun valor 
        alert("No es una opción para operar, selecione otra!");
}