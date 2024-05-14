function login() {
    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;
    if (login == null || senha == null) {
        // Se o email ou senha estiverem faltando, você pode tratar isso aqui
        return;
    }
    try {
        // Fazer uma solicitação HTTP para verificar as credenciais do usuário
        const response = fetch(`https://10.67.226.102/Usuario/unique/${email}/${senha}`, {
        });
        // if (!response.ok) {
        //     throw new Error('Erro ao verificar usuário');
        // }
        const usuario = response.json();
        console.log('Usuário encontrado:', usuario);
        window.location.href = "../html/index.html";
    } catch (error) {
        // Se ocorrer um erro, trate-o aqui
        console.error('Erro ao verificar usuário:', error.message);
        let info = document.querySelector(".info");
        info.innerHTML = `<h2>Usuário ou senha incorretos</h2>`;
    }
}
