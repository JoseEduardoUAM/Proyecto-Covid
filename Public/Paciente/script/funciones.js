// Funcion que envia los datos para la videollamada
export function CrearFormulario( miNombre , nombreFamiliar , url ){
	let form = document.createElement('form');
	document.body.appendChild(form);
	form.method = 'post';
	form.action = url;

	let datos = [[ "miNombre" , miNombre ] , [ "nombreFamiliar" , nombreFamiliar ] , [ "url" , url ] , ["persona", "paciente" ] ];

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

// Variable que selecciona el contenedor principal donde se mostraran las salas
let Inicio = document.getElementById('Inicio');

export function CrearDatosSala( Sala , datos){
	Sala.className = "Sala";
	Sala.id = datos.numeroExpediente;
	// Conetendor del encabezado de la sala 
	let encabezado = document.createElement("div");
	encabezado.className = "encabezado";
	Sala.appendChild(encabezado);
	// Contenedor para los datos del Paciente, Familiar y el Boton
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
	// Contenedor del Boton
	let celdaBtn = document.createElement("div");
	celdaBtn.className = "celda_btn";
	// Creacion del boton
	let boton = document.createElement("button");
	boton.className = "btn";
	boton.innerText = "Enviar";
	celdaBtn.appendChild(boton);
	contenido.appendChild(celdaBtn);
	Sala.appendChild(contenido);
	Inicio.appendChild(Sala); 
	return boton;
}