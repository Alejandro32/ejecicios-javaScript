

var tiempo=0;
var cont=0;


numero=prompt("Ingresa El numero de libros___")
nombre=prompt("Ingresa El nombre de Alumno___")

document.write("5. Joel se da cuenta que no es el único con ese problema y quiere hacer " +
	  " un algoritmo similar al anterior para que lo puedan utilizar más personas,  " +
	  " ¿Que necesitaría cambiar?" + "<br />La consulta para el Alumno  " + nombre + "  es:")



var certi=[numero];
for (var i=0;i<certi;i++){
    cont+=1;
	paginas=Math.round(Math.random()*1000);
	tiempo=paginas*2
	document.write("<br />Por el libro___"+ cont +"__contiene__"+ paginas+"__paginas " + " tiempo invertido__" + tiempo + "__minutos")
  }