import {CrearFormulario} from './funciones.js';

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
  //console.log(m);
  Salas.push( m );
  pintarDatos( m );
});

let Inicio = document.getElementById('Inicio');

function pintarDatos( datos ){
  console.log("Si entro");
    let Sala = document.createElement("div");
    Sala.className = "Sala";
    Sala.id = datos.numeroExpediente;

    let encabezado = document.createElement("div");
    encabezado.className = "encabezado";
    Sala.appendChild(encabezado);

    /* Se crea contenido */
    let contenido = document.createElement("div");
    contenido.className = "contenido";

    let etiquetas = [
        ["Nombre del Paciente:",`${datos.nombrePaciente} ${datos.apellidosPaciente}`],
        ["Numero de Expediente",datos.numeroExpediente],
        ["Nombre del Familiar",`${datos.nombreFamiliar} ${datos.apellidosFamiliar}`]
    ];

    for( let x of etiquetas ){
      /* Se crea primera celda */
      let celda = document.createElement("div");
      celda.className = "celda";
      /* Se crea titulo de la primera celda */
      let titulo = document.createElement("div");
      titulo.className = "Titulo";
      titulo.innerText = x[0];
      celda.appendChild(titulo);
      let dato = document.createElement("div");
      dato.className = "Dato";
      dato.innerText = x[1];
      celda.appendChild(dato);
      contenido.appendChild(celda);
    }

  /* Se crea el boton */
  let celdaBtn = document.createElement("div");
  celdaBtn.className = "celda_btn";
  let boton = document.createElement("button");
  boton.className = "btn";
  boton.innerText = "Enviar";
  boton.onclick = function(){
    socket.emit( 'unirseSala' , datos.url);
    CrearFormulario( `${datos.nombrePaciente} ${datos.apellidosPaciente}` , datos.url );
  }
  console.log( `${datos.nombrePaciente} ${datos.apellidosPaciente}` );
  celdaBtn.appendChild(boton);
  contenido.appendChild(celdaBtn);

  Sala.appendChild(contenido);

  Inicio.appendChild(Sala);    
};
