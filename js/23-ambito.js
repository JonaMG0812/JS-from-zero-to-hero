'use strict'

/*Una variable puede ser utilizada en todo si esta ubicada fuera de 
funciones, lo que significa en un ambit global, si un variable esta localizada dentro de uan funcion
solo puede ser utilziada por la funcion*/

//NOTA: para convertir un tipo de dato a string e con: .toString

function holaMundo(texto){
    var hola_mundo = "texto dentroo de una funcion";

    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy un variable global";

holaMundo(texto);