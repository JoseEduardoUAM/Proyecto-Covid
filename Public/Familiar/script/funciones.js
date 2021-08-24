import { inputs, pantalla1, pantalla2 } from './identificadores.js';

export function VerificarDatos(){
	let verificar = [];
	for ( let x of inputs) {
		verificar.push( x.value.length != 0 ? true : false );
	}
	if( verificar[0] & verificar[1] & verificar[2] & verificar[3] & verificar[4]){
		pantalla1.style.display = "none";
		pantalla2.style.display = null;
		return true;
	}else{
		alert("Es necesario agregar todos los datos");
		return false;
	}
}

export function CrearDatos(url){
	let datos = new Datos(
		inputs[0].value,
		inputs[1].value,
		inputs[2].value,
		inputs[3].value,
		inputs[4].value,
		url
	);
	return datos;
}

function Datos( nombrePaciente , apellidosPaciente , numeroExpediente , nombreFamiliar, apellidosFamiliar , url ){
  this.nombrePaciente = nombrePaciente
  this.apellidosPaciente = apellidosPaciente
  this.numeroExpediente = numeroExpediente;
  this.nombreFamiliar = nombreFamiliar;
  this.apellidosFamiliar = apellidosFamiliar;
  this.url = url;
}
