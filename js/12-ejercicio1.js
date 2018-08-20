'use strict'

/* Programa que pida dos numeros y que nos diga cual es el mayor, el menor o si son iguales 
PLUS: Si los datos no son un numero, o si el numero es igual o menor a cero, 
vuelva a pedir los datos*/


var num1 = parseInt (prompt("Introduce el primer numero", 0));
var num2 = parseInt (prompt("Introduce el segundo numero", 0));

while( num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt (prompt("ERROR: Introduce el primer numero", 0));
    num2 = parseInt (prompt("ERROR: Introduce el segundo numero", 0));
}

if (num1 == num2){
    alert("Los numeros son iguales");
} else if(num1 > num2){
    alert("El numero mayor es " + num1);
    alert("El numero menor es " + num2);
} else if(num2 > num1){
    alert("El numero mayor es " + num2);
    alert("El numero menor es " + num1);
}else{
    alert("Introduce numeros correctos");
}
