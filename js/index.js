    function load(){
    const itens = products()
    image = document.querySelectorAll('.image')

    for (let i = 0; i < itens.length; i++){
        image[i].src = itens[i].img;
    }
}

