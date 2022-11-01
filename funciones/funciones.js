function sayHello() {
    document.write ("<br/>Hello there!");
    document.write('<p><a href="./funciones.html">Volver</a></p>')
} 

function triangle_values () {
    var a = Number(prompt("dame la base"))
    var b = Number(prompt("dame la altura"))
    function square(x) { return x*x; }
   
    var hypotenuse  = Math.sqrt(square(a) + square(b));
    var perimeter = a + b + hypotenuse
    var surface = (a * b)/2

    document.write('<br/>la hipotenusa es ' + hypotenuse)
    document.write('<br/>el perimetro es ' + perimeter)
    document.write('<br/>la superficie es ' + surface)
    document.write('<p><a href="./funciones.html">Volver</a></p>')

   }

function isTriangle (){

    var a = Number(prompt("dame el primer lado"))
    var b = Number(prompt("dame el segundo lado"))
    var c = Number(prompt("dame el tercer lado"))

    if (((a + b) > c) && ((a + c)> b) && ((b + c)> a)) {
        return true
    } else {
        return false
    }

}

var R;
var L;
var C;
var F;
var dospi = Math.PI * 2;
var M;
var H;
const  G = 9.8

function XL( F, L){
    ResultadoXL= dospi * F * L;
return ResultadoXL;
}	
function  XC(F,C){

    ResultadoXC= 1/ (dospi * F * C);
 return ResultadoXC;
}

 function square(x){
return x*x
}
function Z(R,C,L,F){
    CuadradoZ= (square(R) + square((XL(F,L)-XC(F,C))));
    ResultadoZ= Math.sqrt (CuadradoZ);
return ResultadoZ;
}
function fi(R,C,L,F){
    Resultadofi=Math.atan (XL(F,L)-XC(F,C)/R);
return Resultadofi; 
}
function circuitoRLC(){
    R = Number(prompt("Ingresar la resistencia "))
    L= Number(prompt("Ingrese la inductancia "))
    C= Number(prompt("Ingrese la capacitancia"))
    F= Number(prompt("Ingrese la frencuencia"));

    document.write ("<br/>El valor de XC es " +XC(F,C))
    document.write ("<br/>El valor de XL es " +XL(F,L))
    document.write ("<br/>El valor de Z es " +Z(R,C,L,F))
    document.write ("<br/>El valor de FI es " +fi(R,C,L,F));
    document.write('<p><a href="./funciones.html">Volver</a></p>')
}

function EP( M,H,G){
    ResultadoEP= M*G*H;
    return ResultadoEP;
}	
function  V(M,H,G){

	ResultadoV= 2*EP(M,H,G)/M;
	RaizV= Math.sqrt (ResultadoV) 
 	return RaizV;
}
function energia(){
    M = Number(prompt("Ingresar la masa en KG "))
    H = Number(prompt("Ingrese la altura en M "))

    document.write ("<br/>El valor de la energia potencial " +EP(M,H,G))
    document.write ("<br/>El valor de la energia cinematica en 0 es " +EP(M,H,G))
    document.write ("<br/> valor de la velocidad es " +V(M,H,G))
    document.write('<p><a href="./funciones.html">Volver</a></p>')
}