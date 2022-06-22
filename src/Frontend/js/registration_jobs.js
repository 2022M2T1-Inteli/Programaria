// Pega a Nav bar e a Side Bar
window.addEventListener('load', function () {
	$('#registrationJobs-header').load('/page_recruiter/side_and_navbar/index.html', function (response, status) {
		if (status == 'error') {
			console.log('Deu errado');
		} else {
			console.log('Funcionou');
		}
	});
});

//Pega os dados para colocar nas tags de soft e adiciona funcionalidade a essas tags
$.get("http://127.0.0.1:3000/api/softskills/", function(response) {
	for (i of response) {
		$("#registrationJobs-tags-habilities-soft").append(
			`<button class="registrationJobs-button-tag" value="${i.id}">${i.name}</button>`
			)}
	addFuncionalityToTags('registrationJobs-tags-habilities-soft')
}

)

// Pega os dados para colocar nas tags hard e adiciona funcionalidade a essas tags
$.get("http://127.0.0.1:3000/api/hardskills/", function(response) {
	for (i of response) {
		$("#registrationJobs-tags-habilities-hard").append(
			`<button class="registrationJobs-button-tag" value="${i.id}">${i.name}</button>`
		)}
	addFuncionalityToTags('registrationJobs-tags-habilities-hard')
})

// Pega os dados para colocar nas tags de bonus e adciona funcionalidade a essas tags
$.get("http://127.0.0.1:3000/api/bonus/", function (response) {
	for (i of response) {
		$("#registrationJobs-tags-bonus").append(
			`<button class="registrationJobs-button-tag" value="${i.id}">${i.name}</button>`
		)}
	addFuncionalityToTags('registrationJobs-tags-bonus')
})

// Funcao que adiciona a funcionalidade de evento click que muda de cor dependendo do estado da tag
function addFuncionalityToTags (nameId) {
	var button = document.getElementById(nameId).children
	for (item of button) {
		item.className = 'registrationJobs-button-tag false';
	}
	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener('click', function (e) {
			if (button[i].className == 'registrationJobs-button-tag false') {
				e.preventDefault();
				button[i].style.backgroundColor = '#530084';
				button[i].style.color = '#FFFFFF';
				button[i].className = 'registrationJobs-button-tag true';
			} else if (button[i].className == 'registrationJobs-button-tag true') {
				e.preventDefault();
				button[i].style.borderStyle = 'solid';
				button[i].style.borderStyle = '#530084';
				button[i].style.backgroundColor = '#FFFFFF';
				button[i].style.color = '#530084';
				button[i].className = 'registrationJobs-button-tag false';
			}
		});
	}
}

// Pega as tags e põem novas
var addNewTag = document.getElementById('registrationJobs-add-new-tag');
var listNewTag = document.getElementById('registrationJobs-input-add-tag');
var divFatherOption = document.getElementById('registrationJobs-new-tags-box');

addNewTag.addEventListener('click', function () {
	var newTag = document.createElement('button');
	newTag.className = 'registrationJobs-button-tag';
	newTag.style.backgroundColor = '#530084';
	newTag.style.color = 'white';
	newTag.innerHTML = `${listNewTag.value}`;
	divFatherOption.appendChild(newTag);
});

// Variaveis dos inputs que recebem os valores de entrada do usuario
var jobsName = document.getElementById('registrationJobs-name-job');
var jobsType = document.getElementById('registrationJobs-type');
var jobsTime = document.getElementById('registrationJobs-time');
var jobsModality = document.getElementById('registrationJobs-modality');
var jobsShift = document.getElementById('registrationJobs-shift');
var jobsSalaryMin = document.getElementById('registrationJobs-salary-min');
var jobsSchooling = document.getElementById('registrationJobs-schooling');
var jobsSalaryMax = document.getElementById('registrationJobs-salary-max');
var jobsCP = document.getElementById('registrationJobs-cp');
var jobsProficiency = document.getElementById('registrationJobs-profiency');
var jobsNameCompany = document.getElementById('registrationJobs-name-company');
var jobsDescription = document.getElementById('registrationJobs-description-jobs');
var jobsActivities = document.getElementById('registrationJobs-description-activities');
var jobsTagsHabilitiesHard = document.getElementById('registrationJobs-tags-habilities-hard').children;
var jobsTagsHabilitiesSoft = document.getElementById('registrationJobs-tags-habilities-soft').children;
var jobsTagsBonus = document.getElementById('registrationJobs-tags-bonus').children;
var iconConfirm = document.getElementById('registrationJobs-icon-confirm');
var jobsEmail = document.getElementById('registrationJobs-email')
var jobsCell = document.getElementById('registrationJobs-cellphone')
var JobsNameList = document.getElementById('registrationJobs-jobs-list')

// Validacao com condicao do campo input do Regime de trabalho
jobsType.addEventListener('input', function () {
	console.log(this.value)
	if (this.value == "estagio") {
		jobsTime.disabled = true
		jobsProficiency.disabled = true
		jobsTime.style.backgroundColor = 'gray'
		jobsProficiency.style.backgroundColor = 'gray'
		jobsProficiency.value = 'JUNIOR'
		jobsTime.value = 'half-time'
	} else {
		jobsTime.disabled = false
		jobsProficiency.disabled = false
		jobsTime.style.backgroundColor = 'white'
		jobsProficiency.style.backgroundColor = 'white'
	}
})

// Formatacao de entrada do campo do codigo postal
jobsCP.addEventListener('input', function () {
	if (isNaN(this.value)) {
		this.value = this.value.slice(0,-1)
	}
})

// Formatacao de entrada do campo de telefone
jobsCell.addEventListener('input', function () {
	if (isNaN(this.value)) {
		this.value = this.value.slice(0, -1)
	}
})

// Funcao que itera sobre as tags de Hard para ver se foi clicado
function iterateTagsHabilitiesHard() {
	var arrHabilitiesHard = [];
	for (item of jobsTagsHabilitiesHard) {
		if (item.className == 'registrationJobs-button-tag true') {
			arrHabilitiesHard.push(item.value);
		}
	}
	return arrHabilitiesHard;
}

// Funcao que itera sobre as tags de Soft para ver se foi clicado
function iterateTagsHabilitiesSoft() {
	var arrHabilitiesSoft = [];
	for (item of jobsTagsHabilitiesSoft) {
		if (item.className == 'registrationJobs-button-tag true') {
			arrHabilitiesSoft.push(item.value);
		}
	}
	return arrHabilitiesSoft;
}

// Funcao que itera sobre as tags de Bonus para ver se foi clicado
function iterateTagsBonus() {
	var arrBonus = [];
	for (item of jobsTagsBonus) {
		if (item.className == 'registrationJobs-button-tag true') {
			arrBonus.push(item.value);
		}
	}
	return arrBonus;
}

// variavel que irá armazenar valores dos inputs inseridos pelo usuário
var informationJob;

// Funcao que compara o input do usuario com a lista de nomes de vagas
function compareValueInNameJob (inputUser) {
	for (i of JobsNameList.children) {
		if (i.value == inputUser.value) {
			return 'certo'
	}
}}

// Promessa que valida se todos os campos foram preenchidos
// armazena os valores de entrada 
//posta no banco e ainda encaminha para a pagina de minhas vagas do recrutador
var buttonTrigger = new Promise(function (resolve, reject) { 
	iconConfirm.addEventListener('click', function (e) {
	e.preventDefault();

		if (jobsSalaryMin.value && jobsSalaryMax.value && jobsCP.value && jobsDescription.value && jobsActivities.value && jobsEmail.value && jobsCell.value
			&& iterateTagsHabilitiesHard().length > 1 && iterateTagsHabilitiesSoft().length > 1 && iterateTagsBonus()
			&& compareValueInNameJob(jobsName) == 'certo') {

			postRegistration('http://127.0.0.1:3000/api/jobscontacts/', {email: jobsEmail.value , number: jobsCell.value})

	resolve(informationJob = {
		postal_code: parseInt(jobsCP.value),
		company: getIdCompany(JSON.parse(localStorage.UserBITDiscover).id,'http://127.0.0.1:3000/api/companies/'),
		activities: jobsActivities.value,
		name: jobsName.value,
		description: jobsDescription.value,
		type: jobsType.value,
		requireds_hardskill: iterateTagsHabilitiesHard().join(','),
		requireds_softskill: iterateTagsHabilitiesSoft().join(','),
		bonus: iterateTagsBonus().join(','),
		salary_min: parseFloat(jobsSalaryMin.value),
		salary_max: parseFloat(jobsSalaryMax.value),
		contact: getIdContact(),
		scholarship: jobsSchooling.value,
		modality: jobsModality.value,
		shift: jobsShift.value,
		workload: jobsTime.value === 'full-time' ? 6 : 4,
		proficiency: jobsProficiency.value,
		created_at: `${new Date().getDate()}`
	});

} else {
	alert("Preencha todos os campos, coloque no minimo duas tags de Soft e duas Tags de Hard nos campos de requisitos e só use nomes de vagas dado pela lista")
}

})}).then((res) => {
	// Posta o registro no banco
	postRegistration('http://127.0.0.1:3000/api/jobs/',res)
 })
.then((resp) => {
	$('#registrationJobs-target-myjobs').click(function () {
		// ecaminha para a página de minhas vagas do recrutador
		window.location = 'http://127.0.0.1:3000/page_recruiter/my_jobs/index.html'
	})
})


// Funcao que posta no banco
function postRegistration(url,information) {
	$.post(url, information, function (response) {
		console.log(response); 
	});
}

// Funcao que pega o Id da empresa que esta usando no banco
function getIdCompany(id, urlGet)
{
     $.ajax({
        url: `${urlGet}${id}`,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            result = data[0].id
        } 
     });
     return result;
}

// Funcao que pega o id de contato 
function getIdContact () {
	$.ajax({
        url: `http://127.0.0.1:3000/api/jobscontacts/`,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            result = data[data.length -1].id
        } 
     });
     return result;
}

