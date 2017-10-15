
var num=0;

passw=prompt("Ingrese su Frase______")
num=passw.length;
var passwor=passw;
//document.write(passwor +"---" + passw);

for  (var i=0;i<=num-1;i++){

 if (passw[i]= " "){
  passw=passw.replace(" ","_");
}
}


document.write("<br />3. Joel quiere hacer un programa que reciba una frase, cambie los espacios por un guión bajo " +
	" y al final imprima la frase original y la alterada solo para corroborar resultados." +
	 "<br />Frase Normal---------->" + passwor +  "<br />Frase Modificada----->" + passw);

	