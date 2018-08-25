'use strict'

/*Fechas en JS */
/*Referencias date: https://www.w3schools.com/jsref/jsref_obj_date.asp */
/*Referencias Math: https://www.w3schools.com/js/js_math.asp */
window.addEventListener('load', function(){

    var fecha = new Date();
    console.log(fecha);

    var year = fecha.getFullYear();
    var month = fecha.getMonth();
    var day = fecha.getDate();
    var hour = fecha.getHours();
    var minute = fecha.getMinutes();
    var second = fecha.getSeconds();

    var textDate = `
        El año es: ${year}
        El mes es: ${month}
        El dia es: ${day}
        La hora es: ${hour}
        Los minutos son: ${minute}
        Los segundos: ${second}
    `
    console.log(textDate);
});