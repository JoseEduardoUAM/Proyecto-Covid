import {Formulario,nombrePaciente,apellidosPaciente,numeroExpediente,nombreFamiliar,apellidosFamiliar} from './identificadores.js';

export function CrearDatos(url){
	let datos = new Datos(
		nombrePaciente.value,
		apellidosPaciente.value,
		numeroExpediente.value,
		nombreFamiliar.value,
		apellidosFamiliar.value,
		url
	);
	return datos;
}

export function IngresarSala(url){
	nombrePaciente.disabled = true;
	apellidosPaciente.disabled = true;
	numeroExpediente.disabled = true;

	let agregar = [ [ "url" , url ] , [ "persona" , "familiar" ] ];

	for( let x of agregar ){
		let input = document.createElement('input');
		input.style.display = "none";
		input.type = "text";
		input.name = x[0];
		input.value = x[1];
		Formulario.appendChild( input );
	}
	Formulario.action = url;
}

function Datos( nombrePaciente , apellidosPaciente , numeroExpediente , nombreFamiliar, apellidosFamiliar , url ){
  this.nombrePaciente = nombrePaciente
  this.apellidosPaciente = apellidosPaciente
  this.numeroExpediente = numeroExpediente;
  this.nombreFamiliar = nombreFamiliar;
  this.apellidosFamiliar = apellidosFamiliar;
  this.url = url;
}
