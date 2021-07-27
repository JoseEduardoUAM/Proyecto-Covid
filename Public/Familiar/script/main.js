import {url,Aviso,Ingresar} from './identificadores.js';
import {CrearDatos,IngresarSala} from './funciones.js';

let urlSala;

url.onclick = () => {
	socket.emit( 'solicitarURL' ,  );
	Ingresar.disabled = false;
	Aviso.style.display = null;
	url.style.display = "none";
}

Ingresar.onclick = () => {
	socket.emit( 'nuevaSala' , CrearDatos(urlSala) );
	IngresarSala(urlSala);
}

const socket = io('/');

socket.on( 'recibirURL' , (url) => {
	urlSala = url;
});
