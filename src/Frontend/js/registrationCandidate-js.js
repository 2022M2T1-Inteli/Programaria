// variável que pega todos os botões que ficam em formato de array
var botao = document.querySelectorAll(".registrationCandidates-button-tag");
for (item of botao) {
  item.className = "registrationCandidates-button-tag false";
}
// loop que passa por cada botão e adciona propriedades em cada um deles
// visto que quando o evento é disparado o botão que foi clicado se ve com propriedades novas
for (let i = 0; i < botao.length; i++) {
  botao[i].addEventListener("click", function (e) {
    if (botao[i].className == "registrationCandidates-button-tag false") {
      e.preventDefault();
      botao[i].style.backgroundColor = "#530084";
      botao[i].style.color = "#FFFFFF";
      botao[i].className = "registrationCandidates-button-tag true";
    } else if (botao[i].className == "registrationCandidates-button-tag true") {
      e.preventDefault();
      botao[i].style.borderStyle = "solid";
      botao[i].style.borderStyle = "#530084";
      botao[i].style.backgroundColor = "#FFFFFF";
      botao[i].style.color = "#530084";
      botao[i].className = "registrationCandidates-button-tag false";
    }
  });
}

function onload() {
  console.log('teste');
  $.get('http://localhost:3000/api/softskills', function(softskills) {
    softskills.map((result) => {
      $('#registrationCandidates-content-obligation').append(`<button class="registrationCandidates-button-tag">` + result.name + `</button>`)

    })

  })
}