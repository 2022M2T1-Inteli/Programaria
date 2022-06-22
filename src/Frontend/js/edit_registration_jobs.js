// Carrega a NavBar e a SideBar
window.addEventListener('load', function () {
	$('#registrationJobs-header').load('/page_recruiter/side_and_navbar/index.html', function (response, status) {
		if (status == 'error') {
			console.log('Deu errado');
		} else {
			console.log('Funcionou');
		}
	})
	// Carrega as informações para os inputs
	getInformationJob()
	// Carrega as tags preenchidas se o usuario fez do Hard, Soft e Bonus
	loadHard()
	loadSoft()
	loadBonus()
});

// Carrega as tags e as preenche se o usuário tiver clicado antes
function loadSoft() {
$.get("http://127.0.0.1:3000/api/softskills/", function(response) {
	for (i of response) {
		$("#registrationJobs-tags-habilities-soft").append(
			`<button class="registrationJobs-button-tag" value="${i.id}">${i.name}</button>`
			)}
	var loadTagRoles = new Promise ((resolve, reject) => {
		resolve(addFuncionalityToTags('registrationJobs-tags-habilities-soft'))
	}).then((res) => {
		loadPaintTag(jobsTagsHabilitiesSoft,resultGetInformationJob[3])
	})
}

)
}

// Carrega as tags e as preenche se o usuário tiver clicado antes
function loadHard () {
$.get("http://127.0.0.1:3000/api/hardskills/", function(response) {
	for (i of response) {
		$("#registrationJobs-tags-habilities-hard").append(
			`<button class="registrationJobs-button-tag" value="${i.id}">${i.name}</button>`
		)}
	var loadTagRoles = new Promise ((resolve, reject) => {
		resolve(addFuncionalityToTags('registrationJobs-tags-habilities-hard'))
	}).then((res) => {
		loadPaintTag(jobsTagsHabilitiesHard,resultGetInformationJob[2])
	})
})
}

// Carrega as tags e as preenche se o usuário tiver clicado antes
function loadBonus() {
$.get("http://127.0.0.1:3000/api/bonus/", function (response) {
	for (i of response) {
		$("#registrationJobs-tags-bonus").append(
			`<button class="registrationJobs-button-tag" value="${i.id}">${i.name}</button>`
		)}
	var loadTagRoles = new Promise ((resolve, reject) => {
		resolve(addFuncionalityToTags('registrationJobs-tags-bonus'))
	}).then((res) => {
		loadPaintTag(jobsTagsBonus,resultGetInformationJob[4])
	})
})
}

// Adiciona Funcionalidade para as tags caso o usuário clique que seta as propriedades de estilo
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

// função pra ler querystring e pegar id do job para edição
function queryString(parameter) {  
	var loc = location.search.substring(1, location.search.length);   
	var param_value = false;   
	var params = loc.split("&");   
	for (i=0; i<params.length;i++) {   
		param_name = params[i].substring(0,params[i].indexOf('='));   
		if (param_name == parameter) {                                          
			param_value = params[i].substring(params[i].indexOf('=')+1)   
		}   
	}   
	if (param_value) {   
		return param_value;   
	}   
	else {   
		return undefined;   
	}   
}

//Var que recebe o id do job
var idJob = queryString("idJob");

// Carrega as tags pintadas dependendo do preenchimento que o usuário fez antes
function loadPaintTag (arrDiv, arrDataBase) {
	for (i of arrDiv) {
		for (j = 0; j < arrDataBase.length; j++) {
			if (i.value == arrDataBase[j]) {
				i.style.backgroundColor = '#530084';
				i.style.color = '#FFFFFF';
				i.className = 'registrationJobs-button-tag true';
			}
		}
	}
}

//DECLARAÇÃO DE VAR
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

var informationJob;

// Converte o numero do banco em um nome acessivel
function workloadGET (res) {
	return res == 6? 'half-time': 'full-time'
}

var resultGetInformationJob 

// Pega as informações do banco e coloca nos campos de entrada para o usuario editar
function getInformationJob () {
			$.ajax({
				url: `http://127.0.0.1:3000/api/jobs/${idJob}`,
				type: 'get',
				dataType: 'json',
				async: false,
				success: function(data) {
					result = [data[0], data[0].contact, data[0].requireds_hardskill.split(','), data[0].requireds_softskill.split(','), data[0].bonus.split(',')]
					resultGetInformationJob = result
				} 
			 });
			 jobsName.value = result[0].name
			 jobsType.value = result[0].type
			 jobsTime.value = workloadGET(result[0].workload)
			 jobsModality.value = result[0].modality
			 jobsShift.value = result[0].shift
			 jobsSalaryMin.value = result[0].salary_min
			 jobsSalaryMax.value = result[0].salary_max
			 jobsCP.value = result[0].postal_code
			 jobsProficiency.value = result[0].proficiency
			 jobsDescription.value = result[0].activities
			 jobsActivities.value = result[0].activities

			$.ajax({
				url: `http://127.0.0.1:3000/api/jobscontacts/${result[1]}`,
				type: 'get',
				dataType: 'json',
				async: false,
				success: function (data) {
					jobsEmail.value = data[0].email
					jobsCell.value = data[0].number
				}
			})

}

// Funcao que compara o input do usuario com a lista de nomes de vagas
function compareValueInNameJob (inputUser) {
	for (i of JobsNameList.children) {
		if (i.value == inputUser.value) {
			return 'certo'
	}
}}

// Promessa que valida se todos os campos foram preenchidos
// armazena os valores de entrada 
// Atualiza no banco e ainda encaminha para a pagina de minhas vagas do recrutador
var buttonTrigger = new Promise(function (resolve, reject) { 
	iconConfirm.addEventListener('click', function (e) {
	e.preventDefault();

		if (jobsSalaryMin.value && jobsSalaryMax.value && jobsCP.value && jobsDescription.value && jobsActivities.value && jobsEmail.value && jobsCell.value
			&& iterateTagsHabilitiesHard().length > 1 && iterateTagsHabilitiesSoft().length > 1 && iterateTagsBonus()
			&& compareValueInNameJob(jobsName) == 'certo') {

	resolve([informationJob = {
		postal_code: parseInt(jobsCP.value),
		activities: jobsActivities.value,
		name: jobsName.value,
		description: jobsDescription.value,
		type: jobsType.value,
		requireds_hardskill: iterateTagsHabilitiesHard().join(','),
		requireds_softskill: iterateTagsHabilitiesSoft().join(','),
		bonus: iterateTagsBonus().join(','),
		salary_min: parseFloat(jobsSalaryMin.value),
		salary_max: parseFloat(jobsSalaryMax.value),
		scholarship: jobsSchooling.value,
		modality: jobsModality.value,
		shift: jobsShift.value,
		workload: jobsTime.value === 'full-time' ? 6 : 4,
		proficiency: jobsProficiency.value,
		created_at: `${new Date().getDate()}`
	}, {email: jobsEmail.value, number: jobsCell.value}]);

} else {
	alert("Preencha todos os campos, coloque no minimo duas tags de Soft e duas Tags de Hard nos campos de requisitos e só use nomes de vagas dado pela lista")
}

})}).then((res) => {
	editRegistration('http://127.0.0.1:3000/api/jobs/',idJob, res[0])
	editRegistration('http://127.0.0.1:3000/api/jobscontacts/', resultGetInformationJob[1], res[1])
 })
.then((resp) => {
	// forca um clique e encaminha para a página minhas vagas
	$('#registrationJobs-target-myjobs').click(function () {
		window.location = 'http://127.0.0.1:3000/page_recruiter/my_jobs/index.html'
	})
})


// Funcao que faz o Método PUT
function editRegistration (urlPUT, idJob, information){
	$.ajax({
		url: `${urlPUT}${idJob}`,
		type: 'put',
		dataType: 'json',
        async: false,
		data: information,
		success: function(data){
			console.log('Atualização feita');
		}
	});
}





