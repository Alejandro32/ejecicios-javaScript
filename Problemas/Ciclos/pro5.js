
var cont=0;



var numero=prompt("Ingresa El rango del 1 al ")



for (var i=1;i<=numero;i++){
 var entre3= i % 3
 var entre5= i % 5

 if (entre3 === 0 & entre5 === 0){
 	   cont =cont + 1 
 	   document.write("<br /> El numero encontrado divisible es__" + i)
 	}
 	   
}


document.write("<br /><br /><br />5. A Diego le encargaron de tarea investigar la"+
      " cantidad de números divisibles entre 3 y 5 en una serie "+
      " numérica que va de 1 a N, ¿Puedes apoyarlo?"+
      "<br /><br /><br />El total de numeros divisibles de la serie numerica "+ cont)



 	
 	