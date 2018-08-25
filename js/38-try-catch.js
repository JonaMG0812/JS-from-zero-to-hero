'use strict'

window.addEventListener('load', function(){

    try{
        /*Error para testear try catch 
        var year = 2018;
        alert(yea);*/
        //decodeURIComponent nos ayuda a ver si una URL es valida ya que no tenga caracteres invalidos
        console.log(decodeURIComponent('https://victorroblesweb.es'));
        //URL Invalida para ver el error
        //console.log(decodeURIComponent('https://v#$%ictorroblesweb.es'));
    }catch(error){
        console.log("A ocurrido un error en el codigo")
    }
    
    

});