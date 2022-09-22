function notas() {
    var nota1 = Number(prompt("dame la primera nota"))
    var nota2 = Number(prompt("dame la segunda nota"))
    var nota3 = Number(prompt("dame la tercera nota"))
    var promedio = (nota1 + nota2 + nota3)/3

    if (promedio > 6.49){
        document.write("aprobaste")
    }
    else{
        document.write("desaprobaste")        
    }
    document.write('\n')
    document.write('<a href="./condif.html">volver</a>')
}

function par() {
    var numero = Number(prompt("dame un numero y te dire si es par o no"))

    if (numero%2 == 0){
        document.write("es par")
    }
    else{
        document.write("es impar")        
    }
    document.write('\n')
    document.write('<a href="./condif.html">volver</a>')
}

function edad() {
    var numero = Number(prompt("dime tu edad"))

    if (numero > 17){
        document.write("puede manejar")
    }
    else{
        document.write("no puede manejar")        
    }

    document.write('\n')
    document.write('<a href="./condif.html">volver</a>')
}

function cap_ind() {
    var frec = Number(prompt("dame la frecuencia"))
    var c = Number(prompt("dame la capacitancia en milifaradios"))/1000
    var l = Number(prompt("dame la inductancia en microhenrios"))/1000000
    
    var omega = 2*3.1416*frec
    var xl = omega*l
    var xc = 1/(omega*c)

    if (xl == xc){
        document.write("resonancia")
    }
    else if (xc > xl){
        document.write("capacitivo")
    
    }
    else{
        document.write("inductivo")    
    }
    document.write('\n')
    document.write('<a href="./condif.html">volver</a>')
}