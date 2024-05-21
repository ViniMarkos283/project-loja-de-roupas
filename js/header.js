document.addEventListener("DOMContentLoaded", function () {
    var headerDiv = document.querySelector("div.header");
    var footerDiv = document.querySelector("div.footer");

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

        if (footerDiv) {
            var footerHTML = `
            <footer>
        <div>
            <div>
                <ul>
                    <p>Populares</p>
                    <li><a href="index.html">Página inicial</a></li>
                    <li><a href="novoAnuncio.html">Criar anuncio</a></li>
                    <li><a href="login.html">Fazer o login</a></li>
                    <li><a href="cadastro.html">Cadastre-se</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <p>Sobre o Bazar</p>
                    <li><a href="#">Sobre o Bazar</a></li>
                    <li><a href="#">Perguntas Frequentes</a></li>
                    <li><a href="#">Entre em contato</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <p>Nossas redes Sociais</p>
                    <li><i class="bi bi-facebook"></i><a href="">Facebook</a></li>
                    <li><i class="bi bi-instagram"></i><a href="">Instagram</a></li>
                    <li><i class="bi bi-linkedin"></i><a href="">Linkedin</a></li>
                    <li><i class="bi bi-youtube"></i><a href="">Youtube</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <p>Integrantes</p>
                    <li>Luciana Guedes de Araújo</li>
                    <li>Marcos Vinicius de Oliveira</li>
                    <li>Pedro Henrique S. Bernardo</li>
                    <li>Renato Winícius de Lima Jacob</li>
                </ul>
            </div>
        </div>

        <p>&copy; 2024. Todos os direitos reservados.</p>

    </footer>
            `;
        }

        headerDiv.innerHTML = headerHTML;
        footerDiv.innerHTML = footerHTML;
    }
});

function openMenu() {
    lateral = document.querySelector(".lateral")

    if (lateral.classList.contains('open')) {
        lateral.classList.remove('open');
    } else {
        lateral.classList.add('open');
    }
}
