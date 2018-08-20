'use strict'

/* Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario */ 

var num1 = parseInt (prompt("Introduce un numero: ", 0));
var num2 = parseInt (prompt ("Introduce un numero: ", 0));

document.write("<h2>De " + num1 + " a " + num2 + " estan los siguientes numeros: </h2>")

for(var i = num1; i<= num2; i++){
    document.write(i + "<br/>");
}