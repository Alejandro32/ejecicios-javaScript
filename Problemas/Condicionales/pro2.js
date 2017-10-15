
var TPizza=(40*8)/3
var Trefresco=20*4*2

document.write("2. Miguel está planeando una fiesta, el esta planeando comprar 40" +
      "pizzas(8 rebanadas por pizza) y 20 refrescos de 4 litros para 100 personas," +
      "¿Hay refresco suficiente? ¿Hay pizza suficiente? <br /><br /> ")

personas=prompt(" Escribe cuantos invitados tendras___");


if (TPizza > personas & Trefresco > personas){
	
	document.write("Hay suficiente pizza y refrescos para las  ", personas," personas").innerHTML;

}
else{
	document.write("Pizza y Refrescos insuficientes");
}







 
