

var tiempo=0;
var cont=0;

document.write("4. Joel tiene que leer bastante para su exámen de certificación, en total " +
	  "  tiene que leer N libros, cada uno con un número diferente de páginas, en promedio"+
	  " Joel tarda 2 minutos por página, ¿Cuánto tiempo tardará Joel en leer cada libro?")

numero=prompt("Ingresa El numero de libros___")
//certi=certi.lenght(numero)

var certi=[numero];
for (var i=0;i<certi;i++){
    cont+=1;
	paginas=Math.round(Math.random()*1000);
	tiempo=paginas*2
	document.write("<br />Por el libro___"+ cont +"__contiene__"+ paginas+"__paginas " + " tiempo invertido__" + tiempo + "__minutos")
  }