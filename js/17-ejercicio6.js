'use strict'

/* Programa que diga si el numero es par o impar
ventana de prompt, comprobar si el numero no es valido y si no lo es volver a pedir un numero */

var number = parseInt(prompt('Introduce un numero:', 0));

while(isNaN(number)){
    number = parseInt(prompt('Introduce un numero', 0));
}

if(number % 2 == 0){
    alert('Es un numero par');
}else{
    alert('Es un numero impar');
}