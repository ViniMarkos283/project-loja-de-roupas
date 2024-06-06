// Função para renderizar os itens do carrinho na página
document.addEventListener('DOMContentLoaded', async () => {

    const user = localStorage.getItem("userPass")

        // cartItems.forEach(item => {
             const profileElement = document.createElement('div');
        //     // productElement.classList.add('product');

        profileElement.innerHTML = `
            <div class="row">
                <div class="col">
                        <p>nome: ${user.nome}</p>
                        <p>data de nascimento: ${user.dtNasc}</p>
                        <p>Email: ${user.Email}</p>v
                        <p>Endereço: ${user.Endereco}</p>
                        <p>cidade: ${user.cidade}</p>
                        <p>estado: ${user.estado}</p>
                        <p>telefone fixo: ${user.telFixo}</p>
                        <p>telefone celular: ${user.telCelular}</p>                     
                </div>
            </div>              
            `;
        // });
});


// async function removeItem(cartId, idProd) {
//     try {
//         await fetchDeleteItem(cartId, idProd);
//         // document.location.reload();
//     } catch (error) {
//         console.error('Erro ao deletar item do carrinho:', error);
//         const carrinhoElement = document.getElementById('carrinho');
//         if (carrinhoElement) {
//             carrinhoElement.innerHTML = `<p>Erro ao deletar item do carrinho de compras: ${error.message}</p>`;
//         }
//     }
// }
