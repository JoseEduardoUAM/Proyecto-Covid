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