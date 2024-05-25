// apiRest.js

// Função para obter os itens do carrinho
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
  

// async function fetchCartItems(userId) {
//     try {
//         const response = await fetch(`https://localhost/cart/${userId}`);
//         if (!response.ok) {
//             throw new Error('Erro ao obter itens do carrinho');
//         }
//         return await response.json();
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }

