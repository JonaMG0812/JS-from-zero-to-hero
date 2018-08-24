'use strict'

window.addEventListener('load', function(){

    /*Agregar pelicula a localstorage y validar que el campo sea valido antes de enviarlo */
    var formulario = document.querySelector("#formPeliculas");
    formulario.addEventListener('submit', function(){
        var titulo = document.querySelector("#addPelicula").value
        if(titulo.length >= 1){
            localStorage.setItem(titulo, titulo);
        }else{
            alert("Titulo no valido, inserta otro");
        }
    });

    /*Mostrando peliculas desde localstorage */
    var ul = document.querySelector("#peliculasList");
    for(var i in localStorage){        
        if(typeof this.localStorage[i] == 'string'){
            var li = document.createElement("li");
            li.append(this.localStorage[i]);
            ul.append(li);
        }
    }

    /*Borrando peliculas */
    var formulariob = document.querySelector("#formBorrarPeliculas");
    formulariob.addEventListener('submit', function(){
        var titulo = document.querySelector('#borrarPelicula').value;
        if(titulo.length >= 1){
            localStorage.removeItem(titulo);
        }
    });


});