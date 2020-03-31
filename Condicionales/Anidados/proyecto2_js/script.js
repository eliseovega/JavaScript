//app de nomina de empleados que al ingresar el cargo, la antiguedad y el sueldo 
//Resolver teniendo los siguientes criterios:
//Si cargo es Enfermera y antiguedad mayor a 10 años, muestre el sueldo, bono de 25% y Total
//Si cargo es Medico y antiguedad mayor a 15 años, muestre el sueldo, bono de 35% y Total
//Si cargo es Especialista y antiguedad mayor a 12 años, muestre el sueldo, bono de 40% y Total
// Caso de no cumplirse ninguna muestre el sueldo , sin bono y el total
//-------------------------------------
//Definir variables
var cargo;      //entrada
var antiguedad; //entrada
var sueldo;     //entrada
var bono;       //salida
var total;      //salida
//Mensaje de entrada
cargo = prompt("Cargo del Empleado: ");
antiguedad = parseFloat(prompt("Antiguedad (años): "));
sueldo = parseFloat(prompt("Sueldo Básico(COP): "));
//Condiciones y salida
if(cargo=="enfermera" && antiguedad>10){ //Condicion1
	document.write("Sueldo Básico: "+sueldo+" pesos<br>");      //Mestra el Sueldo
	bono=sueldo*0.25;                                            //Calcula el Bono del 25%
	document.write("Bono de Antiguedad: " + bono +" pesos<br>"); //Muestra el Bono
	total=sueldo+bono;                                           //Calcula el total
	document.write("Total Devengado: " + total +" pesos<br>");   //Muestra el Total

} else if (cargo == "medico" && antiguedad > 15){  //Condicion2
	document.write("Sueldo Básico: " + sueldo + " pesos<br>");   //Mestra el Sueldo
	bono = sueldo * 0.35;                                        //Calcula el Bono del 35%
	document.write("Bono de Antiguedad: " + bono + " pesos<br>");//Muestra el Bono
	total = sueldo + bono;                                       //Calcula el total
	document.write("Total Devengado: " + total + " pesos<br>");  //Muestra el Total 
} else if (cargo == "especialista" && antiguedad > 12){  //Condicion3
	document.write("Sueldo Básico: " + sueldo + " pesos<br>");   //Mestra el Sueldo
	bono = sueldo * 0.40;                                        //Calcula el Bono del 40%
	document.write("Bono de Antiguedad: " + bono + " pesos<br>"); //Muestra el Bono
	total = sueldo + bono;                                        //Calcula el total
	document.write("Total Devengado: " + total + " pesos<br>");   //Muestra el Total 
}else{ //Condicion falsa en caso de no cumplirse ninguna muestra valores sin el bono
	document.write("Sueldo Básico: " + sueldo + " pesos<br>");    //Mestra el Sueldo
	bono = sueldo * 0.0;                                          //Calcula el Bono del 0%
	document.write("Bono de Antiguedad: " + bono + " pesos<br>"); //Muestra el Bono
	total = sueldo + bono;                                        //Calcula el total
	document.write("Total Devengado: " + total + " pesos<br>");   //Muestra el Total
}



				
