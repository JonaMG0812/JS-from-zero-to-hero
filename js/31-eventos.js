'use strict'

//Eventos, son acciones que se ejecutan cuando sucede algo

/*Evento Load, ejecuta todo el codigo de JS cuando todas als etoiquetas y 
elementos de HTML han sido cargados en la pagina*/

//INICIO DE LOAD
window.addEventListener('load', () =>{

//Cambiar color de boton cada que presionas click sobre el
/*Onclick - capturar un click
ondblclick - capturar doble click */

function cambiarColor(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "yellow";
    }else{
        boton.style.background = "green";
    }
    return true;
}

var boton = document.querySelector("#boton");

//Evento click llamado por funcion
boton.addEventListener('click', function(){
    cambiarColor();
});

/*Evento Mouse over */
//Cambiar color al pasar el mouse sobre el boton
boton.addEventListener('mouseover',function(){
    boton.style.background = "purple";
});

/*Evento Mouseout: lanza el evento cuando el mouse sale del elemento */
boton.addEventListener('mouseout',function(){
    boton.style.background = "orange";
    boton.style.padding = "10px";
});

//Focus, lanzara el evento cuando este en focus un elemento
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
    console.log("Estas con focus en el input");
});

//Blur, lanzara el evento cuando no se tenga focus en un elemento
input.addEventListener('blur',function(){
    console.log("Estas fuera del input");
});

//Keydown, lanza el evento pero cuando presionas una tecla
input.addEventListener('keydown', function(event){
    console.log("Pulsando tecla: ", String.fromCharCode(event.keyCode));
});

//Keypress, Lanza el evento cuando una tecla es presionada
input.addEventListener('keypress', function(event){
    console.log("Tecla presionada: ", String.fromCharCode(event.keyCode));
});

//Keyup, lanza el evento cuando se suelta la techa
input.addEventListener('keyup', function(event){
    console.log("Tecla soltada: ", String.fromCharCode(event.keyCode));
});


}); //FINAL DE LOAD