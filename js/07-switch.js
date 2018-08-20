'use strict'

//Switch

var edad = 75;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 20:
        imprime = "Ya eres un adulto";
    break;
    case 30:
        imprime = "Los 30 son los nuevos 20";
    break;
    case 40:
        imprime = "Cuarenton";
    break;
    default:
        imprime = "Tu edad es neutra";
}

console.log(imprime);
    