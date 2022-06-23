// Pega a Nav bar e a Side Bar
window.addEventListener('load', function () {
    $('#companyProfile-header').load('/page_recruiter/side_and_navbar/index.html', function (response, status) {
    });
});

if (!localStorage.getItem('UserBITDiscover')) {
    window.location.href = '/';
}

// Funcao que desabilita inputs
function pencilbutton() {
    var inputs = document.querySelectorAll("input")
    var textarea = document.querySelectorAll("textarea")
    var buttons = document.querySelectorAll(".companyProfile-button-tag")
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false
        inputs[i].classList.remove("companyProfile-disabled")
    }
    for (let g = 0; g < textarea.length; g++) {
        textarea[g].disabled = false
        textarea[g].classList.remove("companyProfile-disabled")
    }
    for (let h = 0; h < buttons.length; h++) {
        buttons[h].disabled = false
    }
}
var user = JSON.parse(localStorage.getItem('UserBITDiscover'));
var id = user.id
// Requisição que puxa os valores para os campos
$.ajax({
    url: `http://127.0.0.1:3000/api/companies/?id=${id}`,
    type: "GET",
    success: function (data) {
        console.log(data);
        console.log(data[0]["name"]);
        $("#companyProfile-input-company-name").val(data[0]["name"]);
        $("#companyProfile-input-email").val(data[0]["email"]);
        $("#companyProfile-input-confirmemail").val(data[0]["email"]);
        $("#companyProfile-input-cnpj").val(data[0]["cnpj"]);
        $("#companyProfile-input-password").val(data[0]["password"]);
        $("#companyProfile-input-confirmpassword").val(data[0]["password"]);
        $("#companyProfile-input-cp").val(data[0]["postal_code"]);
        $("#companyProfile-input-link").val(data[0]["website"]);
        $("#companyProfile-textarea").val(data[0]["description"]);
    },
});
// salva as modificações do perfil
function update_profile() {
    //checka se algum campo em branco
    if ($("#companyProfile-input-company-name").val().length == 0 || $("#companyProfile-input-email").val().length == 0 || $("#companyProfile-input-confirmemail").val().length == 0 || $("#companyProfile-input-cnpj").val().length == 0 || $("#companyProfile-input-password").val().length == 0 || $("#companyProfile-input-confirmpassword").val().length == 0 || $("#companyProfile-input-cp").val().length == 0 || $("#companyProfile-input-link").val().length == 0 || $("#companyProfile-textarea").val().length == 0) {
        alert("não deixe nenhum campo em branco")
        return false
    }
    //check de coincidência de email
    if (!($("#companyProfile-input-email").val() == $("#companyProfile-input-confirmemail").val())) {
        alert("Os emails não coincidem!")
        return false
    }
    //check de coincidência de senha
    if (!($("#companyProfile-input-password").val() == $("#companyProfile-input-confirmpassword").val())) {
        alert("As senhas não coincidem!")
        return false
    }
    //muda as informações no banco de dados
    $.ajax({
        url: `http://127.0.0.1:3000/api/companies/${id}`,
        type: "PUT",
        data: `name=${$(
            "#companyProfile-input-company-name"
        ).val()}&email=${$("#companyProfile-input-email").val()}&cnpj=${$(
            "#companyProfile-input-cnpj"
        ).val()}&password=${$(
            "#companyProfile-input-confirmpassword"
        ).val()}&postal_code=${$(
            "#companyProfile-input-cp"
        ).val()}&website=${$(
            "#companyProfile-input-link"
        ).val()}&description=${$("#companyProfile-textarea").val()}`,
    });
    //redieciona para a próxima pagina
    window.location.href = "../my_jobs/index.html"
}
