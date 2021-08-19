//Identificadores de elementos HTML
const mensajes = document.getElementById('Mensajes');

export const entradaMensaje = document.getElementById('entrada-mensaje');

export const videoLocal = document.getElementById('video-local');

export const videoRemoto = document.getElementById('video-remoto');

export const registrarMensaje = (msg,mensajePersona,nombrePersona) => {
  let contenedorMensaje = document.createElement("div");
  contenedorMensaje.className = `ContenedorMsg ${mensajePersona}`;
      let nombre = document.createElement("div");
      nombre.className = "NombreMensaje";
      nombre.innerText = `${nombrePersona}`;
      contenedorMensaje.appendChild(nombre);
      let dato = document.createElement("div");
      dato.className = "DatoMensaje";
      dato.innerText = msg;
      contenedorMensaje.appendChild(dato);
  mensajes.appendChild(contenedorMensaje);
};

export let miNombre = document.getElementById('miNombre');
export let familiarNombre = document.getElementById('familiarNombre');
export let url = document.getElementById('url');
export let regresar = document.getElementById('regresar');
