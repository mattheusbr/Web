window.oninput = function(event){
       
    switch (event.target.id) {
        case "nome":
            PreencherTexto("#d-nome", "#nome")
            break;
        case "faculdade":
            PreencherTexto("#d-faculdade", "#faculdade")
            break;
        case "curso":
            PreencherTexto("#d-curso", "#curso")
        break;
        case "cpf":
            PreencherTexto("#d-cpf", "#cpf")
            break;
        case "rg":
            PreencherTexto("#d-rg", "#rg")
        break;
        case "dataNasc":
            PreencherTexto("#d-nascimento", "#dataNasc")
            break;
    }   
 };

 function PreencherTexto(campoDireita, campoEsquerda) {
    document.querySelector(campoDireita).innerText = document.querySelector(campoEsquerda).value;
 };
 
 function LimparCampos() {
    document.location.reload(true);
 }

 