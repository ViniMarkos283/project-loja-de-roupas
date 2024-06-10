document.addEventListener("DOMContentLoaded", function () {
    var headerDiv = document.querySelector("div.header");
    var footerDiv = document.querySelector("div.footer");
    const users = sessionStorage.getItem("users")
    var headerHTML = ""

    if (headerDiv) {
        if (users) {
             headerHTML = `
            <header>
            <div class="head">
                <a href="./index.html"><img
                        src="https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/loja-roupa.png?alt=media&token=d2209285-9154-4afa-9941-6c42fb986ef8"
                        alt="voltar a pag principal" class="icon"></a>
                <input type="search" name="" id="" placeholder="Pesquisa">
                <a href="./carrinho.html"><i class="bi bi-basket2-fill"></i></a>
                <a href="./novoAnuncio.html"><i class="bi bi-plus-square-fill"></i></a>
                <a href="./login.html"><i class="bi bi-person-circle"></i></a>
                <button class="menu" onclick="openMenu()"><i class="bi bi-list"></i></button>
            </div>
        </header>
        
        <div class="lateral ">
            <a href="./carrinho.html"><i class="bi bi-basket2-fill"></i>Carrinho</a>
            <a href="./novoAnuncio.html"><i class="bi bi-plus-square-fill"></i>
                Criar anuncio</a>
            <a href="./login.html"><i class="bi bi-person-circle"></i>Fazer login</a>
        </div>
            `;
        }
        else{
             headerHTML = `
            <header>
            <div class="head">
                <a href="./index.html"><img
                        src="https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/loja-roupa.png?alt=media&token=d2209285-9154-4afa-9941-6c42fb986ef8"
                        alt="voltar a pag principal" class="icon"></a>
                <input type="search" name="" id="" placeholder="Pesquisa">
                <a href="./carrinho.html"><i class="bi bi-basket2-fill"></i></a>
                <a href="./novoAnuncio.html"><i class="bi bi-plus-square-fill"></i></a>
                <a href="./perfil.html"><i class="bi bi-person-circle"></i></a>
                <button class="menu" onclick="openMenu()"><i class="bi bi-list"></i></button>
            </div>
        </header>
        
        <div class="lateral ">
            <a href="./carrinho.html"><i class="bi bi-basket2-fill"></i>Carrinho</a>
            <a href="./novoAnuncio.html"><i class="bi bi-plus-square-fill"></i>
                Criar anuncio</a>
            <a href="./login.html"><i class="bi bi-person-circle"></i>Fazer login</a>
        </div>
            `;
        }

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
                        <p>Nossas redes</p>
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
                        <li>Renato W. de Lima Jacob</li>
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
