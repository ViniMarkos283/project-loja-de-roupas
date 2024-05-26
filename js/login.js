 

// Função para renderizar os itens do carrinho na página
document.getElementById("myForm").addEventListener("submit", function(event) {
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    console.log("paseiaqui");
   

    try {
         if(fetchUserEmail(email,senha) == true){
            alert("passou aqui")
         }
         else{
            alert("deu aqui")
         }

        // // Renderiza os itens do carrinho na página
        // cartItems.forEach(item => {
        //     const productElement = document.createElement('div');
        //     productElement.classList.add('product');

        //     productElement.innerHTML = `
        //     <div class="row">
        //         <div class="col">
        //             <img class='imgIcon' src='${item.product_photo}'>
        //         </div>
        //         <div class="col">
        //                 <p class='productsItem fistProd'>${item.product_name}</p>
        //                 <p class='productsItem'>Quantidade: ${item.quantity}</p>
        //                 <p class='productsItem'>Preço: ${item.total_price}</p>
        //         </div>
        //         <div class="lines"></div>
        //     </div>
           
                
                
        //     `;

        //     carrinhoElement.appendChild(productElement);

        //     // Adiciona o preço do item ao totalAmount (supondo que o item tenha uma propriedade "price")
        //     totalAmount += item.quantity * item.total_price;
        // });

        // // Atualiza o totalAmount na página
        // totalAmountElement.textContent = totalAmount.toFixed(2);
    } catch (error) {
        console.error("Ocorreu um erro ao buscar usuario: ", error);
    }
});



