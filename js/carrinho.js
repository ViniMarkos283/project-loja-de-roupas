let carrinho = [];


function adicionarItem(img, nome, preco) {
    carrinho.push({img, nome, preco });
    atualizarCarrinho();
}


function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}


function atualizarCarrinho() {
    const carrinhoElement = document.getElementById('carrinho');
    const totalAmountElement = document.getElementById('totalAmount');
    let totalAmount = 0;


    carrinhoElement.innerHTML = '';


    carrinho.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = 
        `
        <img src="${item.img}" alt="${item.nome}">
                    <p class="lines">${item.nome} - R$ ${item.preco.toFixed(2)} <button class="btnRemove" onclick="removerItem(${index})">Remover</button></p>
                `;
        carrinhoElement.appendChild(itemElement);


        totalAmount += item.preco;
    });


    totalAmountElement.textContent = totalAmount.toFixed(2);
}


adicionarItem("..\img\banner\dress005.jpg",'Produto A', 10.50);
adicionarItem("..\img\banner\dress005.jpg",'Produto B', 20.75);
adicionarItem("..\img\banner\dress005.jpg",'Produto C', 15.00);