

var lanza=0;
var cont=0;

var numero=prompt("Ingresa el numero de lanzamientos__");



for (var i=1;i<=numero;i++){
var dado=Math.round(Math.random()*6);

 if (dado !=0){
 lanza= dado % 2
 	 if (lanza === 0){
  cont =cont + 1 
  document.write("<br />Lanzamiento_ " + i + " Numero de dado es__" + dado + "_____"+ numero +" lanzamientos ingresados")
  dado=0
  } 
  }

  else{
  	i=i-1
  } 
}



document.write("<br /><br />6. Anuar está haciendo un estudio estadístico " +
	  " sobre la probabilidad de que en N cantidad de lanzamientos " + 
	  " de un dado el número sea par, ¿Puedes ayudarlo?." +
	  "<br />El total de numeros de lanzamientos par es ",cont)


