'use strict'

/*
1- Pedir 6 numeros por pantalla y meterlos en un array *
2- Mostarar el array entero en el cuerpo de la pagina y por consola *
3- Mostrar el array ordenado *
4- Invertir el orden del array y mostrarlo *
5- Mostrar cuantos elementos tiene el array *
6- Busqueda de un valor introducido por el usuario y que nos diga si esta 
en el array y nos diga su indice */

//Funcion para mostrar en cuepro de pagina
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>")
    });
    document.write("</ul>")
}

//Declarando array
//var numeros = new Array(6);
var numeros = [];

//Solicitando numeros al usuario
for(var i = 0; i <= 5; i++){
    //numeros[i] = parseInt(prompt("Introduce un numero", 0));
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

//Mostrando el array original, en el cuerpo de la pagina y consola
//document.write(`<h2>Los elementos del array son:</h2></br> ${numeros}`);
mostrarArray(numeros)
console.log(numeros);

//Ordenar y mostrar array
numeros.sort();
mostrarArray(numeros, 'ordenado')

//Mostrar array ordenado numericamente
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, 'ordenado numericamente')

//Mostrar array invertido
numeros.reverse();
mostrarArray(numeros, 'invertido');

//mostrar cuantos elementos tiene el array
document.write("<h2> El array tiene " + numeros.length +  " elementos</h2>");

//Busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex (numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr/><h2>Encontrado</h2>");
    document.write("<h2>Posicion de la busqueda " + posicion + "</h2><hr/>");
}else{
    document.write("<hr/><h2>No encontrado</h2><hr/>")
}
