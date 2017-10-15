

var vdolar = prompt("\n  Escribe tasa de cambio del dolar___");
var vdeuro = prompt("\n  Escribe tasa de cambio del euro____");
var Mex=130000;
var Usa=1000*1.10*vdolar;
var Esp=990*1.09*vdeuro;

var pregunta=("10. Anuar quiere poner un negocio de videojuegos, para ello necesita comprar" +
      "varios Nintendo Switch  como primera consola. El tiene 3 posibles proveedore " +
      "americano, un mexicano y uno español todos. Anuar tiene $50000 pesos en el banco." +
      "El proveedor americano le cobra $1000 dólares por unidad y el costo de aduanas " +
      "es de 10% de su compra y envío gratuito, el proveedor mexicano le cobra $13000 pesos"  +
      "por unidad y envío gratuito, El proveedor español $990 euros por unidad y el costo de" +
      "aduanas es de 9% de su compra y envio gratuito, ¿Que proveedor le conviene elegir a Anuar? <br /><br /><br />");

document.write ("<br />"+pregunta+("Mexicano su venta en pesos es  =" + Math.round(Mex,2)) +
	"<br />"+ ( "Americano su venta en pesos es ="+ Math.round(Usa,2)) +
    "<br />"+ ( "Español su venta en pesos es ="+ Math.round(Esp,2)) + ("<br /><br />La mejor compra sugerida es de:  " + Mex)) .innerHTML; 


/*
document.write ("La mejor compra sugerida es de:  " + Mex) .innerHTML;

*/
