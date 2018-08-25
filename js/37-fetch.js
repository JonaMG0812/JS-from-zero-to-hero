'use strict'

window.addEventListener('load', function(){

    /*Fetch y peticios a servicios/APIs REST, 
    NOTA: API REST: Backend que regresa datos en formato JSON */ 

    /*Ejemplo de uso de fetch y peticiones asincronas */
    var divUsuarios = document.querySelector('#usuarios');
    var divUsuario = document.querySelector('#usuario');
    
    //fetch('https://jsonplaceholder.typicode.com/users')
    
    /* Es bueno ir encadenando promises para evitar un callback hell*/
    getUsuarios()
        .then(data => data.json())
        .then(users => {
            listadoUsuarios(users.data);
            return getUsuario();
        })
        .then(data => data.json())
        .then(user => {
            mostrarUsuario(user.data);

            /*Encadenando promesa de getInfo */
            return getInfo();
        })
        .then(data => {
            console.log(data);
        })
        /*El metodo cath nos permite capturar los errores en las promesas */
        .catch(error => {
            console.log(error + 'Error en las peticiones');
        });

    /* Obteniendo todos los usuarios desde la API*/ 
    function getUsuarios(){
        return fetch('https://reqres.in/api/users?page=2')
        /*URL para tester el error: return fetch('https://reqres.in113341/api/users?page=2') */
    }

    /* Obteniendo un solo usuario desde la API*/
    function getUsuario(){
        return fetch('https://reqres.in/api/users/2')
    }

    /*Creando funcion con un JSON para posteriormente crear una promesa y encadenarla */
    function getInfo(){
        var myInfo= {
            nombre: 'Jonathan',
            apellidos: 'MG',
            web: 'www.join0812.com'
        };

        /* Creando nueva promesa, resolve es el JSON es correctamente convertido a string
        reject, es si no lo fue */
        return new Promise((resolve, reject) => {
        var myInfoString = JSON.stringify(myInfo);
        if(typeof myInfoString != 'string') return reject('error');
        return resolve(myInfoString);
        });
    }

    /* Funcion para mostrar todos los usuarios obtenidos de la API*/
    function listadoUsuarios(usuarios){
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + ".- " + user.first_name + " " + user.last_name;
            divUsuarios.appendChild(nombre);
            document.querySelector(".loading").style.display = "none";
        });
    }

    /* Funcion para mostrar solo un usuario en especifico desde la API*/
    function mostrarUsuario(user){
            /*Variables que corren dentro de este scope y crean nuevos elementos HTML */
            let nombre = document.createElement('h3');
            let avatar = document.createElement('img');

            /*Informacion obtenida de API */
            nombre.innerHTML = user.first_name + " " + user.last_name;
            avatar.src = user.avatar;
            avatar.width = '100';
            avatar.height = '100';

            /*Mostrando informacion obtenida */
            divUsuario.appendChild(nombre);
            divUsuario.appendChild(avatar);

            /* Ocultando: Cargando usuarios... en divUsuario*/
            document.querySelector("#usuario .loading").style.display = "none";
    }
    
});