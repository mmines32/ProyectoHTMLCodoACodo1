const btn = document.getElementById('submit')
const name = document.getElementById('name');
const email = document.getElementById('email');
const comentario = document.getElementById('comentario');



const error_name = document.getElementById('error-name');
const error_email = document.getElementById('error-email');
const error_comentario = document.getElementById('error-comentario');


let error = [];

function validateName() {
	if (!name.value) {
		 error_name.innerHTML = `<p>Escriba su nombre y apellido!</p>`;
	}
	else {
		 error_name.innerHTML = ``;
		 return true;
	}

}

function validateEmail() {

	if (!email.value) {
		error_email.innerHTML = `<p>Por favor, ingrese su email!</p>`
	} else {
		error_email.innerHTML = ``

	}
}

function validateComentario() {
	if (!comentario.value) {
		error_comentario.innerHTML = `<p>Por favor, ingrese un comentario!</p>`
	} else {
		error_comentario.innerHTML = ``

	}
}

function validate() {
	validateName();
	validateEmail();
	validateComentario();

	console.log(validateName())
	console.log(validateEmail())
	console.log(validateComentario())

	if (validateName() && validateEmail() && validateComentario()===true) {
		btn.style.display = "flex";
	
	}
}


btn.onclick = function submit() {

	window.alert('Registro concluido con Éxito');
  window.reload()
	return true;
}
