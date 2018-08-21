'use strict'

/* Arrays, arreglos o matrices, es una coleccion de tipo de datos que puede estar en una variable, 
un array peude llevar cualquier tipo de dato en el, el indice en un array es la posicion que nos indica
donde se encuentra un elemento
*/

//Ejemplo de array 1
var indices = ["Indice 0", "Indice 1", "Indice  2", 25, true];

//Ejemplo de array en objeto
var lenguajes = new Array("PHP", "JS", "Ruby", "Go", "Java");

console.log(indices);

/*Si se desea acceder a un elemento del array en especificio, se puede hacer con el indice de el elemento
que se esta requiriendo*/
console.log(lenguajes[2]);

/*La propiedad de .length tambien nos sirve para determinar cuantos elementos tiene un array */
console.log(lenguajes.length);

/*Ejercicio 1 */
/*
var elemento = parseInt(prompt("Que elemento del array necesitas?"));

if(elemento >= lenguajes.length){
    alert("Introduce otro indice menor a " + lenguajes.length);
}else{
    console.log(lenguajes[elemento]);
}
*/

/*Ejercicio 2 */
document.write("<h2>Lenguajes de programacion</h2>");
document.write("<ul>");

/* Forma de recorrer un arrary #1
for(var i=0; i < lenguajes.length; i++){
        document.write("<li>" + lenguajes[i] + "</li>");
}*/

/* Forma de recorrer un array #2*/
lenguajes.forEach((elemento, indice)=>{
    document.write("<li>" + indice + " - " + elemento + "</li>");
})

/* Forma de recorrer un array #3 */
for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");

/*Busqueda dentro de un array, fomra #1*/
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "JS"
});

/*Busqueda dentro de un array, fomra #2*/
var busqueda2 = lenguajes.find(lenguaje => lenguaje == "JS");

/*Busqueda dentro de un array por indice */
var busqueda3 = lenguajes.findIndex(lenguaje => lenguaje == "JS");

/*Busquedas con .some, nos ayuda a cencontrar elementos dentro de un array 
que cumplan con una condicion en concreto*/
var precios = [10,20,30,40,15,12,80];
var busquedaPrecios = precios.some(precio => precio >= 80);
console.log(busquedaPrecios);

//Mostrando busquedas previas
console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);