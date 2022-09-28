function conteo (){

    var count = 0;
document.write("Empenzando ciclo :p ");
while (count < 10){
 document.write("Cuenta : " + count + "<br />");
 count++;
}
doc
}

function tabla (){
    var a = Number(prompt("Ingrese numero para ver la tabla de multiplicacion"));
var count= -1

document.write("Empenzando ciclo <br/>");
while (count < 10){
 count++;
 var multi= a * count   
  document.write(+a);
  document.write ("x");
  document.write (+count);
  document.write ("=    ");
  document.write (+multi);
  document.write ("<br/>")
}
document.write( "Ciclo terminado! ");
}

function hasta0(){
    var a= 1
 var count= 0
 var suma=0
 var promedio=0
document.write ("RESULTADOS :y <br/> <br/>")
while ( a > 0){
 var a = Number(prompt("Ingrese numeros y al ingresar 0 se termina el programa."));
 count++;
 var suma= suma + a;
}   
var promedio= suma/count;
  document.write("Cantidad de numeros ingresados= " +count ); document.write("<br/> <br/>");
  document.write("La suma total de numeros ingresados= " +suma ); document.write("<br/> <br/>");
  document.write("El promedio de numeros ingresados es= "+promedio); document.write("<br/> <br/>")

}