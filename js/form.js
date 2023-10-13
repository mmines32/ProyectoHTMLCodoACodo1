const btn = document.getElementById('submit')
const name = document.getElementById('name');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const gender = document.getElementsByName('gender');


const error_name = document.getElementById('error-name');
const error_password1 = document.getElementById('error-password1');
const error_password2 = document.getElementById('error-password2');
const error_gender = document.getElementById('error-gender');


var error = [];

function validateName() {
	if (!name.value) {
		 error_name.innerHTML = `<p>Por favor, insira um nome!</p>`;
	}
	else {
		 error_name.innerHTML = ``;
		 return true;
	}

}

function validatePassword1() {

	if (!password1.value) {
		error_password1.innerHTML = `<p>Por favor, insgresa una contraseña!</p>`
	} else {
		error_password1.innerHTML = ``

	}
	validatePassword();
}

function validatePassword2() {
	if (!password2.value) {
		error_password2.innerHTML = `<p>Por favor, confirme su contraseña!</p>`
	} else {
		error_password2.innerHTML = ``

	}
	validatePassword();

}

function validatePassword() {
	if (password1.value && password2.value) {
		if (password1.value != password2.value) {
			
			 error_password2.innerHTML = `<p>Su contraseña  no coincide!</p>`;
		}
		return true;
	
	}
}

function validateChecked() {
	var isChecked = false;
	for (var i = 0; i < gender.length; i++) {
		if (gender[i].checked) {
			isChecked = true;
			break;
		}
	}
	if (!isChecked) {
		error_gender.innerHTML = `<p>Por favor, selecione un sexo.</p>`
	
	} else {
		error_gender.innerHTML = ``
	}


}

function validate(){
	validateName();
	validatePassword1();
	validatePassword2();
	validateChecked();
	console.log(validateName())
	console.log(validatePassword())
	
	if(validateName() && validatePassword() === true){
		btn.style.display = "flex";
	}
}



btn.onclick = function submit() {

	window.alert('Registro concluido con Éxito');
  window.reload()
	return true;
}