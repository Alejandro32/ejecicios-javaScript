
var lanza=0;
var lanza1=0;
var cont=0;
var cont1=0;


var numero=prompt("Ingresa el numero de lanzamientos__");

for  (var i=1;i<=numero;i++){
 var  dado=Math.round(Math.random()*6);
 var  dado1=Math.round(Math.random()*6);
 lanza= dado % 2
 lanza1= dado1 % 2

 if (dado !=0){
 lanza= dado % 2
 	 if (lanza === 0){
  cont =cont + 1 
  document.write("<br />Lanzamiento_ " + i + " Numero de dado1 es__" + dado + "_____"+ numero +" lanzamientos ingresados")
  dado=0
  } 
  }

  else{
  	i=i-1
  } 


 if (dado1 !=0){
 lanza1= dado1 % 2
 	 if (lanza1 === 0){
  cont1 =cont1 + 1 
  document.write("<br />Lanzamiento_ " + i + " Numero de dado2 es__" + dado1 + "_____"+ numero +" lanzamientos ingresados")
  dado=0
  } 
  }

  else{
  	i=i-1
  } 

}

document.write("<br /><br />7. Basado en su estudio anterior Anuar quiere hacer un estudio similar, " +
	  " pero ahora usando 2 dados, ¿podrías ayudarlo a modificar su algoritmo para lograr " +
	  " su objetivo?." + "<br />El total de numeros de lanzamientos de los 2 dados con resultados par " + 
	  "<br />Dado1="+ cont + "<br />Dado2="+ cont1)

