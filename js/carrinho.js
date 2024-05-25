

// Função para renderizar os itens do carrinho na página
document.addEventListener('DOMContentLoaded', async () => {
    const userId = 1; // Substitua pelo ID do usuário atual, se necessário
    const carrinhoElement = document.getElementById('carrinho');
    const totalAmountElement = document.getElementById('totalAmount');

    try {
        // Obtém os itens do carrinho
        const cartItems = await fetchCartItems(userId);

        let totalAmount = 0;

        // Renderiza os itens do carrinho na página
        cartItems.forEach(item => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            productElement.innerHTML = `
            <div class="row">
                <div class="col">
                    <img class='imgIcon' src='${item.product_photo}'>
                </div>
                <div class="col">
                        <p class='productsItem fistProd'>${item.product_name}</p>
                        <p class='productsItem'>Quantidade: ${item.quantity}</p>
                        <p class='productsItem'>Preço: ${item.total_price}</p>
                </div>
                <div class="lines"></div>
            </div>
           
                
                
            `;

            carrinhoElement.appendChild(productElement);

            // Adiciona o preço do item ao totalAmount (supondo que o item tenha uma propriedade "price")
            totalAmount += item.quantity * item.total_price;
        });

        // Atualiza o totalAmount na página
        totalAmountElement.textContent = totalAmount.toFixed(2);
    } catch (error) {
        console.error('Erro ao renderizar itens do carrinho:', error);
        carrinhoElement.innerHTML = '<p>Erro ao carregar o carrinho de compras.</p>';
    }
});
