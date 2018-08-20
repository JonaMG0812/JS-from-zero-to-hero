//Let y Var, cual es la diferencia?
/*Let permite declarar variables limitando su alcance al bloque, declaracion o expresion 
donde se esta usando.
Var define una variable global o local en una funcion sin importar el ambito del bloque
*/

'use strict'

//Pruebas con var
var numero = 40;
console.log(numero); //Valor de numero = 40
if (true){
    var numero = 50;
    console.log(numero); //Valor de numero = 50
}
console.log(numero); //Valor de numero = 50


//Pruebas con let
var texto = "Esto es con var :B";
console.log(texto); //valor de var
if (true){
    let texto = "Esto es con let :O";
    console.log(texto); //valor de let
}
console.log(texto); //valor de var