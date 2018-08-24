'use strict'
window.addEventListener('load', function(){

/*Localstorage: Permite que los datos persistan entre ventanas/tabs con el mismo origen. */

/*Comprobacion de disponibilidad del localstorage */
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage up");
}else{
    console.log("Localstorage unvailable");
}

/*Guardar datos en localstorage */
localStorage.setItem("titulo", "JS from Zero to Hero");

/*Recuperar elemento de localstorage e insertar en la pagina*/
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

/*Guardar un objeto en localstorage, NOTA: no se puede enviar un JSON puro, se tiene que convetir 
siempre en string o number */

//JSON
var usuario = {
    nombre: "Jonathan",
    apellidos: "MG",
    edad: 25
};

//JSON string
localStorage.setItem("usuario", JSON.stringify(usuario));

/*Recuperar objeto de localstorage siendo un JSON string a JSON puro*/
var userJs = JSON.parse(localStorage.getItem("usuario"));
console.log(userJs);

//Ya teniendo el objeto se peude hacer lo que se requiera con el, ej:
document.querySelector("#peliculas").append("El nombre es: " + userJs.nombre 
+ userJs.apellidos + "y su edad es: " + userJs.edad);

/*Borrar elementos especificos de localstorage */
localStorage.removeItem("usuario");

/*Borrar todo de localstorage */
localStorage.clear();

});