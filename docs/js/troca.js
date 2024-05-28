document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('input[type="button"][value="Trocar"]');
    botoes.forEach((botao, index) => {
        botao.addEventListener('click', function () {
            const indiceBotao = index + 0;
            sessionStorage.setItem('indiceBotao', indiceBotao);
            window.location.href = 'troca.html';
        });
    });
});


function loadOneProduct() {
    const itens = products()
    const n = sessionStorage.getItem('indiceBotao')

    image = document.querySelector('#image')
    nm = document.querySelector('#name')
    description = document.querySelector('#desc')
    category = document.querySelector('#categ')

    image.src = itens[n].img
    nm.textContent = itens[n].name
    document.title = itens[n].name
    description.textContent = itens[n].desc
    category.textContent = "Categoria: " + itens[n].type
}