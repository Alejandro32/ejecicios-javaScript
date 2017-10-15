
document.write("6. Paco está haciendo un videojuego y necesita" +
      " hacer un programa que determine la jerarquía de usuario" +
      " de acuerdo a su nivel, las jerarquías son paladin : nivel" +
      " 0 -10, caballero dorado : nivel 11 - 30, dios destructor: " +
      " 31 - 50.")

var numero = prompt("\n Escribe un numero___")


if (numero >= 0 & numero <= 10){

	document.write("<br />Es de Jerarquia Paladin")
}
else if (numero >= 11 & numero <= 30){
	document.write("<br />Es de Jerarquia Caballero Dorado")
}
else if (numero >= 31 & numero <= 50){
	document.write("<br />Es de Jerarquia Dios Destructor")	
}
else{
	document.write("<br />No es un rango valido")
}


