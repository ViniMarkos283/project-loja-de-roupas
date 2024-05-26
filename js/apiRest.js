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

async function fetchDeleteItem( cartId,idProd) {
    try {
        const response = await fetch(`https://localhost/cart/${cartId}/${idProd}`);
        if (!response.ok) {
            throw new Error('Erro ao deletar item do carrinho');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return []; // Retorna um array vazio em caso de erro
    }
}

async function fetchUser(email, pass) {
    try {
        const response = await fetch(`https://localhost/user/${encodeURIComponent(email)}/${encodeURIComponent(pass)}`);
        if (!response.ok) {
            throw new Error('Senha ou email incorretos');
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar usuário: ", error);
        return [];
    }
}
