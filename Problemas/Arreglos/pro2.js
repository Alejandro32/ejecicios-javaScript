var rif=[0,1,2,3,4,5,6,7];

console.log("2. Antonio es el encargado de hacer la rifa de la compañía, cada empleado "+
	"participa usando su clave de empleado y necesita determinar a un ganador. " +
	  " ¿Puedes hacer un programa que le ayude a elegir al ganador de la rifa?")



 var rifa=Math.round(Math.random()*7);


for (var i=0;i<rif.length;i++){

	 if (rif[i]===rifa){
	 	console.log("el ganador es el numero __-"+ rifa)
}
}

