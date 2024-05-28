
function cadastrar() {
    var nome = document.querySelector('#nome').value;
    var dtNasc = document.querySelector('#dtNasc').value;
    var endereco = document.querySelector('#endereco').value;
    var cidade = document.querySelector('#cidade').value;
    var estado = document.querySelector('#estado').value;
    var telFixo = document.querySelector('#telFixo').value;
    var telCelular = document.querySelector('#telCelular').value;
    var email = document.querySelector('#email').value;
    var confSenha = document.querySelector('#confSenha').value;
    var senha = document.querySelector('#senha').value;
    if (nome == null || senha == null || email == null) {

    }
    if (localStorage.nome == nome || localStorage.email == email) {
        let info = document.querySelector("#info")
        info.innerHTML += `<h2>usuario ou email nao disponiveis</h2>`
    }
    if(senha == confSenha){
        sessionStorage.nome = nome
        sessionStorage.dtNasc = dtNasc
        sessionStorage.endereco = endereco
        sessionStorage.cidade = cidade
        sessionStorage.estado = estado
        sessionStorage.telFixo = telFixo
        sessionStorage.telCelular = telCelular
        sessionStorage.email = email
        sessionStorage.confSenha = confSenha
        sessionStorage.senha = senha

        let info = document.querySelector("#info")
        info.innerHTML += `<h2>cadastro bem sucedido</h2>`

        document.querySelector('#nome').value;
        document.querySelector('#dtNasc').value;
        document.querySelector('#endereco').value;
        document.querySelector('#cidade').value;
        document.querySelector('#estado').value;
        document.querySelector('#telFixo').value;
        document.querySelector('#telCelular').value;
        document.querySelector('#email').value;
        document.querySelector('#confSenha').value;
        document.querySelector('#senha').value;

        window.location.href = "login.html" 
    }
    else {

        let info = document.querySelector("#info")
        info.innerHTML += `<h2>senha diferentes</h2>`
    }
}