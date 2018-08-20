'use strict'

/*Una plantilla de texto nos permite realizar una impression de texto mas extenso */

var nombre = prompt("Como te llamas?");
var pelicula = prompt("Cual es tu pelicula favorita?");
var edad = prompt("Que edad tienes?");

var texto = `Hola, que tal ${nombre}, ahora se que tu pelicula favorita es: ${pelicula} </br>
    y que tienes ${edad} años`

document.write(texto);