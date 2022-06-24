let button = document.querySelector('#login-btn-entrar');

// Checa quando se houve uma mudança e seta o atributo
$('#candidate').change(function () {
	if ($(this).is(':checked')) {
		button.setAttribute('onclick', 'loginCandidate()');
	}
});

// Checa quando se houve uma mudanca e seta o atributo
$('#company').change(function () {
	if ($(this).is(':checked')) {
		button.setAttribute('onclick', 'loginCompany()');
	}
});

// Checa quando se houve uma mudanca e seta o atributo
$('#admin').change(function () {
	if ($(this).is(':checked')) {
		button.setAttribute('onclick', 'loginAdmin()');
	}
});

// Funcao que posta os dados do usuario atual e ainda armazena as informacoes no localStorage
function loginCompany() {
	var user = document.getElementById('login-input-email').value;
	var senha = document.getElementById('login-input-senha').value;

	$.ajax({
		url: '/api/companies/login',
		type: 'POST',
		data: {
			email: user,
			password: senha,
		},
		success: (data) => {
			console.log(data);
			localStorage.setItem('UserBITDiscover', JSON.stringify(data));
			window.location.href = '/page_recruiter/my_jobs/index.html';
		},
	}).fail(function (err) {
		console.log(err);
		alert('Credenciais Incorretas');
	});
}

// Funcao que posta os dados do usuario atual e ainda armazena as informacoes no localStorage
function loginCandidate() {
	var user = document.getElementById('login-input-email').value;
	var senha = document.getElementById('login-input-senha').value;

	$.ajax({
		url: '/api/candidates/login',
		type: 'POST',
		data: {
			email: user,
			password: senha,
		},
		success: (data) => {
			console.log(data);
			localStorage.setItem('UserBITDiscover', JSON.stringify(data));
			window.location.href = '/page_candidates/jobs_visualization/index.html';
		},
	}).fail(function (err) {
		console.log(err);
		alert('Credenciais Incorretas');
	});
}

// Funcao que posta os dados do usuario atual e ainda armazena as informacoes no localStorage
function loginAdmin() {
	var user = document.getElementById('login-input-email').value;
	var senha = document.getElementById('login-input-senha').value;

	$.ajax({
		url: '/api/admins/login',
		type: 'POST',
		data: {
			email: user,
			password: senha,
		},
		success: (data) => {
			console.log(data);
			$('#admin-modal').modal('show');
			//window.location.href = '/page_admins/person/';
		},
	}).fail(function (err) {
		console.log(err);
		alert('Credenciais Incorretas');
	});
}
