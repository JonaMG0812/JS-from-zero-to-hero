'use strict'

/*Nota: Operadores relacionales
    Mayor que: >
    Menor que: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto de: !=
*/

/*Condicional If: Estructura de control que permite comprara algo
por Ej: Si A = B entonces haz algo
*/

//Ejemplo 1: Saber si una edad es mayor que otra
var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("Edad 1 es mayor que Edad 2");
}else{
    console.log("Edad 1 es menor que que Edad 2")
}


/*Ejemplo 2: Saber si el usuario es mayor de edad, ademas de saber si el usuario es joven
aun o esta cerca de los 30 años, o si el usuario es anciano ya que pasa de los 70 años
*/

var edad = 80;
var nombre = 'Jonathan MG'

if(edad >= 18){
    console.log("El usuaio " + nombre + " tiene " + edad + " años");
    if( edad <= 25){
        console.log("Aun sigues joven :o");
    }else if(edad >= 70){
        console.log("Valla que eres anciano :s");
    }
    else{
        console.log("Ya no eres joven, estas cerca de los 30 :c");
    }
}else{
    console.log("El usuaio " + nombre + " es menor de edad");
}


/*Operadores Logicos
    AND(Y): &&
    OR(O): ||
    Negacion: !
*/

var year = 2028;

/* Ejemplo de AND*/

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}


/*Ejemplo de OR */

if(year == 2008 || year == 2018){
    console.log("El año acaba con el numero 8");
}


/*Podemos combinar operadores logicos en condiciones */
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba con el numero 8");
}else{
    console.log("Año no registrado");
}


/* Ejemplo de Negacion*/

if(year != 2016){
    console.log("El año no es 2016, realmente es: " + year);
}
