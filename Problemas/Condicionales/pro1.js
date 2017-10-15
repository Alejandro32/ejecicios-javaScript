

document.write("1- Arnoldo le gustan mucho los números y quiere saber más de ellos," +
	  "él denomina números cool a los que son divisibles entre 3 y 5, el quiere crear" +
	  "un programa en el cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo? ")


var numero = prompt(" Escribe el numero a validar___");





if (numero % 5 === 0 & numero % 3 === 0){

	document.write("<br / >Es cool");

}
else{
	document.write("<br / >No Es cool");
}


