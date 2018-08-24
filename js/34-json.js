'use strict'

window.addEventListener('load', function(){
/* JSON - Javascript Object Notation: nos permite crear objetos o arrays asociativos */

/*estructura de JSON */
var pelicula = {
    titulo: 'Pelicula 1',
    year: '2018',
    pais: 'USA'
};

/*Podemos tener un arreglo y mostrar el arreglo de JSON que creamos previamente */
var peliculas = [
    {titulo: "Pelicula2", year: 2018, pais: "USA"},
    pelicula
];

var divPeliculas = document.querySelector("#peliculas");
var index;

for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    divPeliculas.append(p);
}

});