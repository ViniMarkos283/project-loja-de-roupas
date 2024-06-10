

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

document.getElementById("myForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const login = document.querySelector('.email').value;
    const senha = document.querySelector('#senha').value;

    try {
        const user = await fetchUser(login, senha);
        if (user && user.length > 0) {
            alert("Login bem-sucedido");
            sessionStorage.setItem("userPass" , JSON.stringify(user))
            document.location.replace("http://127.0.0.1:5500/html/index.html")
        } else {
            alert("Email ou senha incorretos");
        }
    } catch (error) {
        console.error("Ocorreu um erro ao buscar usuário: ", error);
    }
});
 

// // Função para renderizar os itens do carrinho na página
// document.getElementById("myForm").addEventListener("submit", function(event) {
//     const login = document.querySelector('.email').value;
//     const senha = document.querySelector('#senha').value;
//     console.log("paseiaqui");
   

//     try {
//          if(fetchUserEmail(email) == true && fetchUserPass(senha) == true){
//             alert("passou aqui")
//          }
//          else{
//             alert("deu aqui")
//          }

//     //     // // Renderiza os itens do carrinho na página
//     //     // cartItems.forEach(item => {
//     //     //     const productElement = document.createElement('div');
//     //     //     productElement.classList.add('product');

//     //     //     productElement.innerHTML = `
//     //     //     <div class="row">
//     //     //         <div class="col">
//     //     //             <img class='imgIcon' src='${item.product_photo}'>
//     //     //         </div>
//     //     //         <div class="col">
//     //     //                 <p class='productsItem fistProd'>${item.product_name}</p>
//     //     //                 <p class='productsItem'>Quantidade: ${item.quantity}</p>
//     //     //                 <p class='productsItem'>Preço: ${item.total_price}</p>
//     //     //         </div>
//     //     //         <div class="lines"></div>
//     //     //     </div>
           
                
                
//     //     //     `;

//     //     //     carrinhoElement.appendChild(productElement);

//     //     //     // Adiciona o preço do item ao totalAmount (supondo que o item tenha uma propriedade "price")
//     //     //     totalAmount += item.quantity * item.total_price;
//     //     // });

//     //     // // Atualiza o totalAmount na página
//     //     // totalAmountElement.textContent = totalAmount.toFixed(2);
//         } catch (error) {
//             console.error("Ocorreu um erro ao buscar usuario: ", error);
//         }
// });



