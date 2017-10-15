
var num=0;

passw=prompt("Ingrese su password______")
num=passw.length;

for  (var i=0;i<=num-1;i++){

 if (passw[i]==="a" || passw[i]==="A"){
  passw=passw.replace("a",4);
    passw=passw.replace("A",4);
 
}
 else if (passw[i]==="e" || passw[i]==="E"){
  passw=passw.replace("e",3);
    passw=passw.replace("E",3);
 
}
else if (passw[i]==="i" || passw[i]==="I"){
  passw=passw.replace("i",1);
    passw=passw.replace("I",1);
}
else if (passw[i]==="o" || passw[i]==="O"){
  passw=passw.replace("o",0);
    passw=passw.replace("O",0);
}
}
 
document.write("1. Anuar quiere hacer sus contraseñas más seguras, se da cuenta que puede cambiar vocales por números"+
      " a = 4, e = 3, i = 1, o = 0. ¿Podrías hacer un programa que reciba una contraseña, la altere sustituyendo las "+
      " vocales y al final la imprima?" + "Constraseña Modificada----->" + passw)