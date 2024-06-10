document.addEventListener('DOMContentLoaded', async () => {

    const session = sessionStorage.getItem("userPass");
    console.log("Session:", session);

    const users = JSON.parse(session); // Alteração: agora é um array de usuários
    console.log("Users:", users);

    const profileElement = document.querySelector(".infos");

    if (users && users.length > 0) { // Verifica se há usuários no array
        const user = users[0]; // Obtém o primeiro usuário do array
        profileElement.innerHTML = `
        <div class="col-md-6">
        <p><strong>Nome:</strong> ${user.full_name}</p>
        <p><strong>Data de nascimento:</strong> ${user.birth_date}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    </div>
    <div class="col-md-6">
        <p><strong>Estado:</strong> ${user.state}</p>
        <p><strong>Telefone fixo:</strong> ${user.phone_home}</p>
        <p><strong>Telefone celular:</strong> ${user.phone_mobile}</p>
    </div>
    <div class="col-md-6">
    <p><strong>Endereço:</strong> ${user.address}</p>
        <p><strong>Cidade:</strong> ${user.city}</p>
        </div>

        `;
    } else {
        profileElement.innerHTML = `<p>Nenhum usuário encontrado.</p>`;
    }
});



// async function removeItem(cartId, idProd) {
// console.log(profileElement);
// console.log(user.city);
// console.log(user.full_name);
// console.log(user);
// console.log(session.full_name);
// console.log(session);
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
