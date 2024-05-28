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
        <div class="resultDiv row lines">
       <div class="col">  <img class="imgIcon" src="${item.img}" alt="${item.nome}"></div>
       <div class="col"> <p class="itens">${item.nome} - R$ ${item.preco.toFixed(2)} </p></div>
       <div class="col"> <button class="btnRemove" onclick="removerItem(${index})">Remover</button></div>
                    </div>
                `;
        carrinhoElement.appendChild(itemElement);


        totalAmount += item.preco;
    });


    totalAmountElement.textContent = totalAmount.toFixed(2);
}


adicionarItem("https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",'Produto A', 10.50);
adicionarItem("https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",'Produto B', 20.75);
adicionarItem("https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",'Produto C', 15.00);