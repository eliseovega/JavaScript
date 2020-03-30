//app de calificaciones que al ingresar una nota la califica teniendo los siguientes criterios:
//Deficientes si la nota >= 0 y <2
//Insuficiente si la nota >=2 y <3
//Aceptable si la nota >=3 y <4
//Sobresaliente si nota >=4 y <5
//Excelente si nota es igual 5
//-------------------------------------
//Definir variables
var nota;
//Mensaje de entrada
nota =parseFloat(prompt("Digite su Nota: "));
//Condiciones y salida
if(nota >=0 && nota <2){ //Condicion1
	document.write("Deficiente!"); 
}else if(nota >=2 && nota <3){  //Condicion2
		document.write("Insuficiente!"); 
}else if(nota >=3 && nota <4){  //Condicion3
		document.write("Aceptable!"); 
}else if(nota >=4 && nota <5){  //Condicion4
		document.write("Sobresaliente!");
}else if(nota ==5){ //Condicion5
		document.write("Excelente!");
}else{ //Condicion falsa en caso de no cumplirse ninguna anterior
	document.write("lo sentimos, hay un error!"); 
}



				
