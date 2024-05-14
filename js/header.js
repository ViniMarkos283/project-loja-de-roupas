document.addEventListener("DOMContentLoaded", function () {
    var headerDiv = document.querySelector("div.header");

    if (headerDiv) {
        var headerHTML = `
        <header>
        <div class="head">
            <a href="./index.html"><img src="https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/loja-roupa.png?alt=media&token=d2209285-9154-4afa-9941-6c42fb986ef8" alt="voltar a pag principal" class="icon"></a>
            <input type="search" name="" id="" placeholder="Pesquisa">
            <a href="./carrinho.html"><img src="https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/shopcart.png?alt=media&token=ef2c82ff-16af-40d1-9bd3-bde31519cf84" alt="Carrinho" class="icon"></a>
            <a href="./novoAnuncio.html"><img src="https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/novaAdi%C3%A7%C3%A3o.png?alt=media&token=da78c531-4f66-4377-a89e-9f5dec0c21ba" alt="Novo produto" class="icon"></a>
            <a href="./login.html"><img src="https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/user.png?alt=media&token=5a60e182-dbbd-4900-9f13-a5aa75efc0e4" alt="login/cadastro" class="icon"></a>
            <button class="menu" onclick="openMenu()"><img src="https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/menu.png?alt=media&token=f0349738-6dc4-439a-9d8c-ede627f030d0" alt="" class="icon"></button>
        </div>
    </header>

    <div class="lateral ">
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
