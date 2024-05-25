// apiRest.js

async function fetchCartItems(userId) {
    try {
        const response = await fetch(`http://localhost:8080/cart/${userId}`);
        if (!response.ok) {
            throw new Error('Erro ao obter itens do carrinho');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}
