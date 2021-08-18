import { btnEnviar, btnURL, conAviso, conBtn, form, URL } from './identificadores.js';
import { CrearDatos, VerificarDatos } from './funciones.js';

let urlSala;

const socket = io('/');

socket.on( 'recibirURL' , (url) => {
	urlSala = url;
    URL.value = url;
    form.action = url;
});

btnURL.onclick = () =>{
    socket.emit( 'solicitarURL' ,  );
    conBtn.style.display = "none";
    conAviso.style.display = null;
    btnEnviar.disabled = null;
}

btnEnviar.onclick = () =>{
    if( VerificarDatos() ){
        socket.emit( 'nuevaSala' , CrearDatos(urlSala) );
    }
}

