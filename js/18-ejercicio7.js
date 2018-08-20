'use strict'

/* Tabla de multiplicar de un numero introducido por pantalla */

var num1 = parseInt(prompt('De que numero queires la tabla de multiplicar?', 1));

document.write('<h1> Tabla de multiplicar del numero ' + num1 + '</h1>')
for(var i = 1; i <=10; i++){
    document.write(i + ' x ' + num1 + ' = ' + (i * num1) + '<br/>')
}

/* Todas las tablas de multiplicar */

for(var j = 1; j <=10; j++){
    document.write('<h1> Tabla de multiplicar del numero ' + j + '</h1>')
    for(var i = 1; i <=10; i++){
        document.write(i + ' x ' + j + ' = ' + (i * j) + '<br/>')
    }
}