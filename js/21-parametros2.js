'use strict'

//Parametros REST y SPREAD

/*Parametros REST: se ultilzan con "..." antes del parametro, son utilizados para recibir 
parametros los cuales no se sabia que se recibirian dentro de la funcion*/

//Ejemplo REST

function listado_de_frutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listado_de_frutas("Mango", "Piña", "Fresa", "Platano", "Naranja");

console.log("************************************************");

/* Parametros SPREAD: son elementos dentro d un array que peuden ser pasados como parametros pero 
de tipo SPREAD */
//Ejemplo SPREAD

var frutas = ["Coco", "Durazno"];
listado_de_frutas( ...frutas, "Mango2", "Piña2", "Fresa2", "Platano2", "Naranja2");