
var pro=0;



var mat=prompt("Ingresa El numero de Materias a promediar___")
var alum=prompt("Ingresa El Nombre del alumno a promediar___")

for (var i=0;i<=mat-1;i++){
var numero=prompt("Ingresa las calificaciones___")//+ i).innerHTML;

pro=pro + parseInt(numero);

}

document.write("3. Joel se da cuenta que su algoritmo quedo genial"+
      " y quiere que más gente lo utilice, el problema es que "+
      " algunos de sus compañeros no llevan las mismas materias " +
      " que él, ¿podrías ayudarlo a modificar su algoritmo para "+
      " solucionar ese inconveniente? " + 
      "<br /><br /><br /><br />  El promedio de " + 
      alum +"es  " + Math.round(pro/mat,2)).innerHTML;

