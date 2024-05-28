
function login() {
    var username = document.querySelector('#login').value;
    var senha = document.querySelector('#senha').value;
    var bd_username = sessionStorage.username
    var bd_senha = sessionStorage.senha
    if (login == null || senha == null) {

    }
    if (bd_username == username && bd_senha == senha) {
        sessionStorage.username = username
        window.location.href = "index.html"
    }
    else {
        console.log(username)
        console.log(senha)
        console.log(bd_username)
        console.log(bd_senha)
        let info = document.getElementById("info")
        info.innerHTML += `<h2>usuario ou senha incorretos</h2>                      
`
    }
}