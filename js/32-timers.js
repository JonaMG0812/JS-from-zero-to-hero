'use strict'

//Timers
//Cargando Load
window.addEventListener('load', function(){

        function intervalo(){
            /* Set interval, nos ayuda a ejecutar una accion cada "x" segundos*/
            var tiempo = setInterval(function(){
                var encabezado = document.querySelector("h1");
                if(encabezado.style.fontSize == "50px"){
                    encabezado.style.fontSize = "30px";
                }else{
                    encabezado.style.fontSize = "50px";
                }
            }, 1000 /*milisegundos*/ );

            return tiempo;
        }

    var tiempo = intervalo();

    /*NOTA: Set timeout, se ejecutara una accion al tiempo que se le indique solo una vez */
    //Detener parpadeo de H1
    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function(){
        alert("Has detenido el parpadeo del H1");
        clearInterval(tiempo);
    });

    //Iniciar parpadeo de H1
    var start = document.querySelector("#start");
    start.addEventListener("click", function(){
        alert("Has iniciado el parpadeo del H1");
        intervalo();
    });

});