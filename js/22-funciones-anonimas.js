'use strict'

/*Funciones anonimas, son funciones que no tienen ningun nombre y se pueden 
guardar dentro de alguna variables, utilizadas para realizar callbacks, 
un callback es una funcion que se peude usar dentro de otra funcion*/

//Ejemplo

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7,function(dato){
    console.log("La suma es: ", dato);
}, 
function(dato){
    console.log("La suma por dos es: ", (dato*2));
});

//Funciones de flecha, manera de definir un callback de una manera mas limpia

sumame(5, 7, dato =>{
    console.log("La suma es: ", dato);
}, 
dato => {
    console.log("La suma por dos es: ", (dato*2));
});

//NOTA: si lleva dos parametros se lleva parentesis: 
/*
sumame(5, 7, (dato, dato2) =>{
    console.log("La suma es: ", dato);
}, 
(dato, dato2) => {
    console.log("La suma por dos es: ", (dato*2));
});
*/