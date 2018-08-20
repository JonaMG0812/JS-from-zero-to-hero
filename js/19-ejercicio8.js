'use strict'

/* Calculadora: pedir dos numeros por pantalla
-si metemos un numero mal que lo vuelva a pedir
-mostrar en el body de la pagina en una alerta y por consola el resultado de sumar, restar, multiplicar y
dividir esas dis cifras */

var num1 = parseInt(prompt('Introduce el primer numero', 0));
var num2 = parseInt(prompt('Introduce el segundo numero', 0));

while( num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) ){
    num1 = parseInt(prompt('Introduce el primer numero', 0));
    num2 = parseInt(prompt('Introduce el segundo numero', 0));  
}

var resultado = "La Suma es: " + (num1+num2) + "<br/>" +
                "La resta es: " + (num1-num2) + "<br/>"+
                "La Multiplicacion es: " + (num1*num2) + "<br/>" +
                "La Division es: " + (num1/num2) + "<br/>";

var resultadocmd = "La Suma es: " + (num1+num2) + "\n" +
                "La resta es: " + (num1-num2) + "\n" +
                "La Multiplicacion es: " + (num1*num2) + "\n" +
                "La Division es: " + (num1/num2) + "\n";

document.write(resultado);
console.log(resultadocmd);
alert(resultadocmd);