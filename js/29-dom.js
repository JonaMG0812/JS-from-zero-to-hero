'use strict'

/*DOM - document Object Model
Ejemplos basicos de DOM */

//Funcion para cambiar color
function cambiaColor(color){
    caja.style.background = color;
}

//Conseguir elementos por su ID concreto
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja"); //Mejor forma para seleccionar un elemento

caja.innerHTML = "Esto es un texto desde JS"; /*nos permite ver el texto del elemento seleccionado,
pero de igual forma nos permite asignar un nuevo valor desde JS*/
caja.style.background = "red"; //Cambiamos background por default de el div
caja.style.padding = "20px"; //Padding del div
caja.style.color = "white"; //Color de letra dentro del div
caja.className = "Clase1 Clase2" //Agregando calses al div con JS



//Conseguir elementos por sus etiquetas
var todosLosDivs = document.getElementsByTagName('div')
var contenidoEnTexto = todosLosDivs[2].textContent; //Viendo el texto de acuerdo al indice del elemento

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
var valor;

for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p"); //Creando nuevos elementos en HTML desde JS
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto); //append = agregar, prepend = agregar antes de...
        seccion.append(parrafo);
    }
}
seccion.append(hr);
console.log(contenidoEnTexto);


//Conseguir elementos por su clase CSS
var divsRojos = document.getElementsByClassName('rojo');

var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;

for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}

/*Query selector, mas reocmendable para seleccionar elementos como id, si se requierne varios elementos
es mejo usar el  correspondiente: getElementsByClassName por ej.*/