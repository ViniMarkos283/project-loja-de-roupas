document.addEventListener("DOMContentLoaded", function () {
    var headerDiv = document.querySelector("div.header");

    if (headerDiv) {
        var headerHTML = `
        <header>
        <div class="head">
            <a href="./index.html"><img src="../img/icons/loja-roupa.png" alt="voltar a pag principal" class="icon"></a>
            <input type="search" name="" id="" placeholder="Pesquisa">
            <a href="./carrinho.html"><img src="../img/icons/shopcart.png" alt="Carrinho" class="icon"></a>
            <a href="./novoAnuncio.html"><img src="../img/icons/novaAdição.png" alt="Novo produto" class="icon"></a>
            <a href="./login.html"><img src="../img/icons/user.png" alt="login/cadastro" class="icon"></a>
            <button class="menu" onclick="openMenu()"><img src="../img/icons/menu.png" alt="" class="icon"></button>
        </div>
    </header>

    <div class="lateral">
        <a href="./carrinho.html"><img src="../img/icons/shopcart.png" alt="Carrinho" class="icon">Carrinho</a>
            <a href="./novoAnuncio.html"><img src="../img/icons/novaAdição.png" alt="Novo Produto" class="icon">Criar anuncio</a>
            <a href="./login.html"><img src="../img/icons/user.png" alt="login/cadastro" class="icon">Fazer login</a>
    </div>
        `;
        headerDiv.innerHTML = headerHTML;
    }
});

    function openMenu(){
        lateral = document.querySelector(".lateral")

        if (lateral.classList.contains('open')) {
            lateral.classList.remove('open');
        } else {
            lateral.classList.add('open');
        }
    }
