// faz os botões de hard e soft skill funcionar
function button(id) {
  if (id.getAttribute("class") == "registrationCandidates-button-tag-unclicked") {
    id.setAttribute("class", "registrationCandidates-button-tag-clicked")
  }
  else {
    id.setAttribute("class", "registrationCandidates-button-tag-unclicked")
  }
}

if (!localStorage.getItem('UserBITDiscover')) {
  window.location.href = '/';
}
//executa a função ao iniciar a pagina adicionando os botões de hard e softskills
function onload() {
  //carrega os botões de softskill e os adiciona na página
  $.get("http://localhost:3000/api/softskills", function (softskills) {
    console.log(softskills)
    for (i = 0; i < softskills.length; i++) {
      $('#registrationCandidates-content-obligation').append(`<button class="registrationCandidates-button-tag-unclicked" onclick="selectSoftSkill(${softskills[i].id})" id="s${softskills[i].id}">` + softskills[i].name + `</button>`)
    }
  })


  $.get('http://localhost:3000/api/hardskills', function (hardskills) {
    //carrega os botões de hardskill e os adiciona na página
    for (i = 0; i < hardskills.length; i++) {
      $('#registrationCandidates-content-obligation-1').append(`<button class="registrationCandidates-button-tag-unclicked" onclick="selectHardSkill(${hardskills[i].id})" id="h${hardskills[i].id}">` + hardskills[i].name + `</button>`)
    }
  })
}

// atualiza os dados da usuária e vê se os campos esão preechidos corretamente
function create_profile() {
  // os if abaixo garantem que os dados estejam sendo inseridos de froma correta no formulário
  if ($("#registrationCandidates-input-name").val().length == 0 || $("#registrationCandidates-input-email").val().length == 0 || $("#registrationCandidates-input-confirm-email").val().length == 0 || $("#registrationCandidates-input-age").val().length == 0 || $("#registrationCandidates-input-CPF").val().length == 0 || $("#registrationCandidates-input-password").val().length == 0 || $("#registrationCandidates-input-confirm-password").val().length == 0 || $("#registrationCandidates-input-cp").val().length == 0 || $("#registrationCandidates-textarea").val().length == 0) {
    alert("não deixe nenhum campo em branco")
    return false
  }

  if (!($("#registrationCandidates-input-email").val() == $("#registrationCandidates-input-confirm-email").val())) {
    alert("Os emails não coincidem!")
    return false
  }
  if (!($("#registrationCandidates-input-password").val() == $("#registrationCandidates-input-confirm-password").val())) {
    alert("As senhas não coincidem!")
    return false
  }
  //guarda os botões apertados em strings
  var soft_text = ""
  var hard_text = ""
  for (i = 0; i < document.getElementById("registrationCandidates-content-obligation").childElementCount; i++) {
    if (document.getElementById(`s${i}`).getAttribute("class") == "registrationCandidates-button-tag-clicked") {
      soft_text += i + ","
    }
  }
  for (i = 0; i < document.getElementById("registrationCandidates-content-obligation-1").childElementCount; i++) {
    if (document.getElementById(`h${i}`).getAttribute("class") == "registrationCandidates-button-tag-clicked") {
      hard_text += i + ","
    }
  }
  // retira a última virgula das strings
  soft_text = soft_text.substring(0, soft_text.length - 1)
  hard_text = hard_text.substring(0, hard_text.length - 1)
  //salva as mudanças no perfil do usário
  $.ajax({
    url: "http://127.0.0.1:3000/api/candidates/",
    type: "POST",
    data: `name=${$("#registrationCandidates-input-name").val()}&email=${$("#registrationCandidates-input-email").val()}&age=${$("#registrationCandidates-input-age").val()}&CPF=${$("#registrationCandidates-input-CPF").val()}&password=${$("#registrationCandidates-input-password").val()}&postal_code=${$("#registrationCandidates-input-cp").val()}&scholarship=${$("#registrationCandidates-scholarity").val()}&graduation=${$("#registrationCandidates-graduation").val()}&description=${$("#registrationCandidates-textarea").val()}&hardskills=${hard_text}&softskills=${soft_text}&departaments=${$("#registrationCandidates-experience").val()}`,
    success: function (data) {
      alert("Perfil Criado com sucesso! :D")
      window.location.href = '/';
    }
  })
  // window.location.href = "../jobs_visualization/index.html"
}
//carrega ao iniciar pagina 
function onload() {
  //carrega os botões de softskill e os adiciona na página
  $.get("http://localhost:3000/api/softskills", function (softskills) {
    console.log(softskills)
    for (i = 0; i < softskills.length; i++) {
      $('#registrationCandidates-content-obligation').append(`<button class="registrationCandidates-button-tag-unclicked" id="s${softskills[i].id}"  onclick="button(s${softskills[i].id})">` + softskills[i].name + `</button>`)
    }
  })


  $.get('http://localhost:3000/api/hardskills', function (hardskills) {
    //carrega os botões de hardskill e os adiciona na página
    for (i = 0; i < hardskills.length; i++) {
      $('#registrationCandidates-content-obligation-1').append(`<button class="registrationCandidates-button-tag-unclicked" id="h${hardskills[i].id}" onclick="button(h${hardskills[i].id})">` + hardskills[i].name + `</button>`)
    }
  })
}

// função que faz voltar para a página inicial
function backbtn() {
  window.location.href = "/";
}