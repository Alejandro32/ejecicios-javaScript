

var arti=[];
var cont=0;
var porce=0;
document.write("6. Orlando va a abrir una tienda de ropa, para llenarla va a comprar N " +
	  " cantidad de artículos y cada articulo tiene cierto porcentaje de ganancia.   "  + 
	  " ¿Cuánto ganará Orlando por cada artículo? <br />")


numero=prompt("Ingresa El numero de articulos___")


for(var i=0;i<numero;i++){
     cont+=1;
	porcentaje=Math.round(Math.random()*100);
	arti[i]=cont;
	document.write("<br />El articulo  "+ arti[i] + "  el porcentaje de ganancia es  "+ porcentaje+"%")
}