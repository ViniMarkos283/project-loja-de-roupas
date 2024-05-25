// carrinho.js

document.addEventListener('DOMContentLoaded', async () => {
    const userId = 1; // Substitua pelo ID do usuário atual, se necessário
    const carrinhoElement = document.getElementById('carrinho');
    const totalAmountElement = document.getElementById('totalAmount');

    try {
        const cartItems = await fetchCartItems(userId);
        let totalAmount = 0;

        cartItems.forEach(item => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            productElement.innerHTML = `
                <div class="product-name">${item.product_name}</div>
                <div class="product-quantity">Quantidade: ${item.quantity}</div>
            `;

            carrinhoElement.appendChild(productElement);

            totalAmount += item.quantity * item.price; // Supondo que o item tenha uma propriedade "price"
        });

        totalAmountElement.textContent = totalAmount.toFixed(2);
    } catch (error) {
        console.error('Erro ao renderizar itens do carrinho:', error);
        carrinhoElement.innerHTML = '<p>Erro ao carregar o carrinho de compras.</p>';
    }
});
