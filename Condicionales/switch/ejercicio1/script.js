/*Desarrolle una app Js que pida al usuario un día de la semana y que muestre el nombre del dia. Si se introduce un
 valor que no corresponda a un día de la semana, se le mostrará un mensaje al usuario.*/
//Definir Variables
var dia; //variable de entrada
//Mensaje de entrada >> como es un string no se utilizan los parse
dia= prompt("Introduce un día de la semana: (en minúsculas)");

//Switch palabra reservada que funciona igual que segun en pseint
switch (dia) { //(dia)el valor de entrada introduccido por el usuario
    case "lunes": //case "":compara el valor de entrada con el valor supuesto
        document.write("Hoy es lunes"); //Mensaje de salida 
        break; //break; Esta sentencia le indica |que salga del código switch en ese punto
    case "martes":
        document.write("Hoy es Martes");
        break;
    case "miércoles":
        document.write("Hoy es Miercoles");
        break;
    case "jueves":
        document.write("Hoy es Jueves");
        break;
    case "viernes":
        document.write("Hoy es Viernes");
        break;
    case "sabado":
        document.write("Hoy es Sabado");
        break;
    case "domingo":
        document.write("Hoy es Domingo");
        break;
    default: // De otro modo, sino se cumple ningun valor 
        alert("No es un día de la semana");
}