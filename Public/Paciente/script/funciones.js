export function CrearFormulario( nombre , url ){
	let form = document.createElement('form');
	document.body.appendChild(form);
	form.method = 'post';
	form.action = url;

	let datos = [[ "nombrePaciente" , nombre ] , [ "url" , url ] , ["persona", "paciente" ] ];

	for( let x of datos ){
		let input = document.createElement('input');
		input.style.display = "none";
		input.type = "text";
		input.name = x[0];
		input.value = x[1];
		form.appendChild(input);
	}
	form.submit();
}

export function CrearSalas(datos , DivSala){
	let etiquetas = [
		["Nombre del Paciente:",`${datos.nombrePaciente} ${datos.apellidosPaciente}`],
		["Numero de Expediente",datos.numeroExpediente],
		["Nombre del Familiar",`${datos.nombreFamiliar} ${datos.apellidosFamiliar}`]
	];
	for(let x of etiquetas){
	  let DivObjeto = document.createElement("div");
	  DivObjeto.className = x[0];
	  DivSala.appendChild(DivObjeto);
		let Titulo = document.createElement("div");
		///Este es el Titulo
		Titulo.className = "Titulo";
		Titulo.innerText = x[0];
		DivObjeto.appendChild(Titulo);
		///Este es el dato
		let Dato = document.createElement("div");
		Dato.className = "dato";
		Dato.innerText = x[1];
		DivObjeto.appendChild(Dato);
	}
}
