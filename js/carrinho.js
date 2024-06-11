async function fetchCartItems( userId) {
    try {
        const response = await fetch(`https://localhost/cart/${userId}`);
        if (!response.ok) {
            throw new Error('Erro ao obter itens do carrinho');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return []; // Retorna um array vazio em caso de erro
    }
}

async function fetchDeleteItem(cartId, idProd) {
    try {
        const response = await fetch(`https://localhost/cart/${encodeURIComponent(cartId)}/${encodeURIComponent(idProd)}`, {
            method: 'delete'
        });
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || 'Erro ao deletar item do carrinho');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao deletar item do carrinho:', error);
        throw error;
    }
}


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
            console.log(item.quantity);
            console.log(item);

            productElement.innerHTML = `
            <div class="row">
                <div class="col">
                    <img class='imgIcon' src='${item.product_photo}'>
                </div>
                <div class="col">
                        <p class='productsItem fistProd'>${item.product_name}</p>
                        <p class='productsItem'>Quantidade: ${item.quantity}</p>
                        <p class='productsItem'>valor simbolico: ${item.total_price}</p>
                        <button class="btn btn-outline-danger" onclick="removeItem(${item.order_id},${item.product_id})">Remover Item</button>
                        
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


async function removeItem(cartId, idProd) {
    try {
        await fetchDeleteItem(cartId, idProd);
        // document.location.reload();
    } catch (error) {
        console.error('Erro ao deletar item do carrinho:', error);
        const carrinhoElement = document.getElementById('carrinho');
        if (carrinhoElement) {
            carrinhoElement.innerHTML = `<p>Erro ao deletar item do carrinho de compras: ${error.message}</p>`;
        }
    }
}
document.getElementById('finalizar-compra').addEventListener('click', function() {
    // Simulação do processo de finalização de compra
    finalizarCompra();
});

function finalizarCompra() {
    // Aqui você pode adicionar a lógica para processar a compra
    // Por exemplo, enviar dados para o servidor via AJAX, etc.
    // Para este exemplo, vamos apenas exibir uma mensagem de sucesso.

    // Simula um atraso para o processamento da compra
    setTimeout(function() {
        alert('Compra finalizada com sucesso!');
        // Redirecionar para uma página de confirmação ou resetar o carrinho
        window.location.href = 'index.html'; // Opcional
    }, 1000);
}