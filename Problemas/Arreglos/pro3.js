
var arre1=[2,8];
var arre2=[5,3];
var arre3=[2,8];
var arre=[0,0];

 

for (var i=0;i<=1;i++){
 var dato=prompt("ingresa el numero___")

  
 arre[i]=dato;

}


document.write("<br />3. Paco esta haciendo un algoritmo de cifrado, el recibe una serie de números "+
	  " los cuales el debe alterar para ocultar el verdadero mensaje, el 2 se debe cambiar "+
	  " por un 5 y viceversa, el 8 se debe cambiar por un 3 y viceversa, ¿podrías ayudarle "+
	  " haciendo un programa que haga esto y al final escribe la serie númerica alterada?\n"+arre3)
	
	


  if  (arre1===arre3){
 document.write("<br /><br />Cifrado invertido" + arre2);
}
	
else if (arre2===arre){
 document.write("<br /><br />Cifrado invertido"+ arre1)
}
else{
 document.write("<br /><br />arreglo no valido")

}


