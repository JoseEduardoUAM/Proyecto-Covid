import {CrearFormulario,CrearSalas} from './funciones.js';

let Salas = [];

const socket = io();

socket.on( 'connect' , () => {
	socket.emit( 'solocitarSalas', );
});

socket.on( 'salasPrevias' , (salasPrevias) => {
	Salas = salasPrevias;
	for( let x of Salas ){
		pintarDatos(x);
	}
});

socket.on( 'agregarSala' , (datos) => {
  let m = datos;
  Salas.push( m );
  pintarDatos( m );
});

let Contenido = document.getElementById('Contenido');

function pintarDatos( datos ){
    ///div para la sala
    let DivSala = document.createElement("div");
    DivSala.className = "Sala";
    DivSala.id = datos.numeroExpediente;
    DivSala.onclick = function (){
        socket.emit( 'unirseSala' , datos.url);
        CrearFormulario( `${datos.nombrePaciente} ${datos.apellidosPaciente}` , datos.url , DivSala );
    };
    Contenido.appendChild(DivSala);

	CrearSalas(datos,DivSala);
};
