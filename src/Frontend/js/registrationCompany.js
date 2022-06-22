// Funcao que recebe os valores de entrada do usuario com validação e posta no banco de dados
function create_profile() {

    if ($("#registrationCompany-input-company-name").val().length == 0 || $("#registrationCompany-input-email").val().length == 0 || $("#registrationCompany-input-confirmemail").val().length == 0 || $("#registrationCompany-input-link").val().length == 0 || $("#registrationCompany-input-cnpj").val().length == 0 || $("#registrationCompany-input-password").val().length == 0 || $("#registrationCompany-input-confirmpassword").val().length == 0 || $("#registrationCompany-input-cp").val().length == 0 || $("#registrationCompany-textarea").val().length == 0) {
        alert("não deixe nenhum campo em branco")
        return false
    }

    if (!($("#registrationCompany-input-email").val() == $("#registrationCompany-input-confirmemail").val())) {
        return alert("Os emails não coincidem!")
    }
    if (!($("#registrationCompany-input-password").val() == $("#registrationCompany-input-confirmpassword").val())) {
        return alert("As senhas não coincidem!")
    }
    $.ajax({
        url: "http://127.0.0.1:3000/api/companies/",
        type: "POST",
        data: `name=${$(
            "#registrationCompany-input-company-name"
        ).val()}&email=${$("#registrationCompany-input-email").val()}&cnpj=${$(
            "#registrationCompany-input-cnpj"
        ).val()}&password=${$(
            "#registrationCompany-input-confirmpassword"
        ).val()}&postal_code=${$(
            "#registrationCompany-input-cp"
        ).val()}&website=${$(
            "#registrationCompany-input-link"
        ).val()}&description=${$("#registrationCompany-textarea").val()}`,
    },
        window.location.href = "/"
    );

};

// função que faz voltar para a página inicial
function backbtn() {
    window.location.href = "/";
}