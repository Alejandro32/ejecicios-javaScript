
var num=0;

passw=prompt("Ingrese su password______")
num=passw.length;

for  (var i=0;i<=num-1;i++){

 if (passw[i]==="a" || passw[i]==="A"){
  passw=passw.replace("a","");
    passw=passw.replace("A","");
 
}
 else if (passw[i]==="e" || passw[i]==="E"){
  passw=passw.replace("e","");
    passw=passw.replace("E","");
 
}
else if (passw[i]==="i" || passw[i]==="I"){
  passw=passw.replace("i","");
    passw=passw.replace("I","");
}
else if (passw[i]==="o" || passw[i]==="O"){
  passw=passw.replace("o","");
    passw=passw.replace("O","");
}
else if (passw[i]==="u" || passw[i]==="U"){
  passw=passw.replace("u","");
    passw=passw.replace("U","");
}
}

document.write("2. Diego esta haciendo un programa similar al de Anuar," +
	  " solamente que él no quiere sustituir vocales, el quiere desaparecerlas," +
	  " ¿puedes ayudarle?" + "Constraseña Modificada----->" + passw)