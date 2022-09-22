function mean() {
    var num1 = Number(prompt("dame un primer numero"))
    var num2 = Number(prompt("dame un segundo numero"))
    var num3 = Number(prompt("dame un tercer numero"))
    var promedio = (num1 + num2 + num3)/3

    document.write("<p>el promedio es " + promedio+ '</p>')
    document.write('\n')
    document.write('<a href="./jsextra.html">volver</a>')
}

function operations() {
    var num1 = Number(prompt("dame un primer numero"))
    var num2 = Number(prompt("dame un segundo numero"))

    var suma = num1 + num2
    var resta = num1 - num2
    var multiplicacion = num1* num2
    var division = num1 / num2
    var resto = num1 % num2 

    document.write("la suma entre eso numeros es " + suma)
    document.write('<p>la diferencia entre esos numeros es ' + resta + '</p>')
    document.write('<p>el producto entre esos numeros es ' + multiplicacion + '</p>')
    document.write('<p>el cociente entre esos numeros es ' + division + '</p>')
    document.write('<p>el resto entre esos numeros es ' + resto + '</p>')
    document.write('\n')
    document.write('<a href="./jsextra.html">volver</a>')
}

function reactance() {
    var frec = Number(prompt("dame la frecuencia"))
    var c = Number(prompt("dame la capacitancia en milifaradios"))/1000
    var l = Number(prompt("dame la inductancia en microhenrios"))/1000000
    
    var omega = 2*3.1416*frec
    var xl = omega*l
    var xc = 1/(omega*c)

    document.write("la reactancia capacitiva es " + xc)
    document.write('<p>la reactancia inductiva es' + xl+ '</p>')
    document.write('\n')
    document.write('<a href="./jsextra.html">volver</a>')
}