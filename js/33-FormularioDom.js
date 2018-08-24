'use strict'

window.addEventListener('load', function(){
    console.log("DOM Cargado!");

    var formulario = document.querySelector("#formulario");
    var boxDashed = this.document.querySelector(".dashed");
    boxDashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        /* Validacion de formulario con JS*/
        if(nombre == null || nombre.trim().length == 0){
            alert("El nombre no es valido");
            document.querySelector("#errorNombre").innerHTML = "El nombre no es valido";
            return false
        }else{
            document.querySelector("#errorNombre").style.display = "none";
        }

        if(apellidos == null || apellidos.trim().length == 0){
            alert("Los apellidos no son valido");
            document.querySelector("#errorApellidos").innerHTML = "Los apellidos no son validos";
            return false
        }else{
            document.querySelector("#errorApellidos").style.display = "none";
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valida");
            document.querySelector("#errorEdad").innerHTML = "La edad no es valida";
            return false
        }else{
            document.querySelector("#errorEdad").style.display = "none";
        }
        /*Fin de validacion */

        boxDashed.style.display = "block";
        
        var p_nombre = document.querySelector("#pNombre span");
        var p_apellidos = document.querySelector("#pApellidos span");
        var p_edad = document.querySelector("#pEdad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
        
        /* Forma 1
        var datosUsuario = [nombre, apellidos, edad];
        var indice;
        for(indice in datosUsuario){
            var parrafo = document.createElement("p");
            parrafo.append(datosUsuario[indice]);
            boxDashed.append(parrafo);
        }
        */

    });

});