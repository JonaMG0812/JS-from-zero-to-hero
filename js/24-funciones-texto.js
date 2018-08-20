'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JS curso";
var texto2 = "Texto prueba 2";

var dato = numero.toString(); //Transformar texto
    dato = texto1.toUpperCase(); //Tranfosrma texto en mayusculas
    dato = texto1.toLowerCase(); //Transformar texto en minusculas

console.log(dato);

//Calcular logintud de texto

var nombre = "Jonathan MG";

//Lengt tambien peude contar la cantidad de elementos dentro de un string,  ej:

    nombre = ["Hola", "mundo"]
    //length nos dira la cantidad de elementos que hay dentro del string, la cual es 2. 


console.log(nombre.length);

//Contatenar o unir textos

//Ejemplo 1
var textoTotal1 = texto1 + " " + texto2;
console.log("Ejemplo 1: ", textoTotal1);

//Ejemplo 2

var textoTotal = texto1.concat(" " + texto2)
console.log("Ejemplo 2: ", textoTotal);

//Buscar coincidencias de texto
var busqueda = texto1.indexOf("curso"); //Buscara la primer coincidencia del string
    busqueda = texto1.search("curso"); //funcion que realiza lo mismo que indexOf
    busqueda = texto1.lastIndexOf("curso"); //Buscara la ultima coincidencia del string
    busqueda = texto1.match("curso"); /*Funcion que nos muestra a detalle la coincidencia del texto
    de la primer conincidencia encontrada, mas puede usarse para encontrar todas las coincidencias
    de ka siguiente manera:*/
    busqueda = texto1.match(/curso/g); /*la letra "g" indica que se realizara la busqueda 
    de manera global en el texto y asi mostrar todas las coincidencias*/

    busqueda = texto1.substr(14,5); /*buscara a partir de la posicion 14 en el texto y mostrara
    los siguientes 5 caracteres del string*/

    busqueda = texto1.charAt(18); /*Buscara el caracter en la posicion concreta que se le especifica */ 

    busqueda = texto1.startsWith("Bienvenido"); /*Buscara la cadena de texto especificada al 
    inicio del string, y mostrara false si no es encontrado o true si efectivamnte el string inicia
    con esa cadena de texto */

    busqueda = texto1.endsWith("JS curso");/*Hace lo mismo que startsWith pero buscando 
    al final del string */

    busqueda = texto1.includes("JS"); /*Buscara si hay coincidencias en todo el texto, solo mostrara
    true o false dependiendo si es hallado o no en el string */

    busqueda = texto1.replace("JS", "Node"); /*Remplazara el primer texto hallado en el string 
    por el especificado en el segundo parametro*/

    busqueda = texto1.slice(16); //Mostrara el texto siguiente a la posicion indicada en el parametro

    busqueda = texto1.split(); /*Introduce el string dentro de un array y podemos separar cad apalabra 
    por espacios para realizar algunas funciones mas especificas
    ejemplo: busqueda = texto1.split(" "); */

    busqueda = texto1.trim(); /*quitara espacion iniciales y finales dle texto */

console.log(busqueda);