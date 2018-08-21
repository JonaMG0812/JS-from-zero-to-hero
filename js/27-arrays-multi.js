'use strict'

//Un array multidimensional es un array que contiene otros arrays
var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["Y Pelicula 1", "C Pelicula 2", "A Pelicula 3", "J Pelicula 4"];

/*En el siguiente array se muestra como un array contiene los 2 anteriores arrays declarados */
var cine = [categorias, peliculas]

/*Si queremos acceder al array de cine en el indice uno, este correspondera a las 
categorias: ["Accion", "Terror", "Comedia"]; y si a su vez accedemos al indice uno de este, este 
correspondera a Terror, ya que se encuentra en el indice uno del array*/
 /*
console.log(cine[0][1]); //Terror
console.log(cine[1][2]); //Pelicula 3
*/ 

/*Añadir elementos a un array, se realiza con .push */
/*
var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
}while(elemento != "FIN");
*/

//peliculas[0] = undefined; //podemos determinar como aparesca el indice
// peliculas.pop(); /*Elimina el ultimo elemento del array */ 


//si Necesitamos eliminar un elemento en concreto del array es:
/*var indice = peliculas.indexOf("Pelicula 3");
if(indice > -1){
    peliculas.splice(indice, 1);
}*/

//Convertir un array a texto o string
var peliculas_string = peliculas.join();

//Convertir texto o strings en array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

//Ordenar un array en orden alfabetico, se hace con .sort
peliculas.sort();

//Invetir el orden de un array
peliculas.reverse();

console.log(peliculas);


console.log(peliculas_string);
console.log(cadena_array);