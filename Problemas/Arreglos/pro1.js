
var promedio=[10,9,9,10,7,10,9];
var cal=0;




for (var i=0;i<promedio.length;i++){

	  cal=promedio[i]+cal;


}

console.log("1. Joel ya recibió sus calificaciones 10, 8, 9, 10, 7 , 10, 9. " +
	  " ¿podrías sacar su promedio usando menos de 5 variables?" +

      "El Promedio de Joel es___",Math.round(cal/7))

