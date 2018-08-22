'use strict'

/*BOM - Browser Object Model,  */

//Funcion para obtener alto y ancho de la ventana del explorador
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}

getBom();

/*Calcular tamaño de pantalla del usuario */ 
console.log(screen.height);
console.log(screen.width); 

/*Ver en que posicion estamos */ 
console.log(window.location);
console.log(window.location.href); //url

//Redireccionar url
function redirrect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"", "with=400, height=300");
}