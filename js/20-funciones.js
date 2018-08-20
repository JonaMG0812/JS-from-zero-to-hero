'use strict'

/*Funciones, grupo de ordenes agrupado con un nombre en concreto, se peude utilizar 
las veces que uno quiera, todo esto es un conjunto de instrucciones*/

//Ejemplo 1
//Definiendo la funcion
function calculadora( /* Aqui pueden ir parametros, por ej: numero1, numero2*/ ){
    //Conjunto de instrucciones a ejecutar de la funcion
    return "Hola soy la calculadora";
}

//Llamando o invocando a la funcion
console.log(calculadora());

//Ejemplo 2
//definiendo la funcion
function calculadora2(){
    //Conjunto de instrucciones a ejecutar de la funcion
    console.log("Soy la calculadorsita");
}

//Llamando o invocando a la funcion
calculadora2();

/*Parametros opcionales: que son? un parametro opcional es un parametro
que ya viene incializado en la funcion y que no necesariamente tiene que ser introducido cada que
se invoca a la funcion, este nos srive como un flag */

/* Podemos crear pequeñas funciones que ejecuten ciertas instrucciones, y estas 
a su vez podemos ejecutarlas dentro de una funcion, ESTO ES UNA BUENA PRACTICA DE DESARROLLO  */