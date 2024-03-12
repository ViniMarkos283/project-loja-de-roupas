// list com os valores de cada produto, no começo pode ter pelo menos 12 itens, mas pode aumentar se necessário
// cada item possui nome, preço, descrição e tipo
// caso chamado, retornará a lista
function products() {
    const itens = [
        { name: '', size: '', desc: '', type: '', img: '' },
        { name: '', size: '', desc: '', type: '', img: '' },
        { name: '', size: '', desc: '', type: '', img: '' },

        { name: '', size: '', desc: '', type: '', img: '' },
        { name: '', size: '', desc: '', type: '', img: '' },
        { name: '', size: '', desc: '', type: '', img: '' },

        { name: '', size: '', desc: '', type: '', img: '' },
        { name: '', size: '', desc: '', type: '', img: '' },
        { name: '', size: '', desc: '', type: '', img: '' },
    ]

    return itens
}

// para invocar essa lista no html, a gente coloca ela pra carregar no body, e assim q chamada, ela pega a lista products
// e pega os inputs do html, e atribui o valor a cada um deles na sua respectiva ordem
// [precisa configurar, n funfa por enquanto]
function loadProducts(){
    const itens = products() // recebe a lista de outra função e a guarda na constante 'itens'

    image = document.querySelectorAll('')
    description = document.querySelectorAll('')
    size = document.querySelectorAll('')
    type = document.querySelectorAll('')

    for (let i = 0; i < itens.length; i++) {
        image[i].src = itens[i].img
        description[i].value = itens[i].desc
        size[i].value = itens[i].size
        type[i].value = itens[i].type
    }
}