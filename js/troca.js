function setClothes(num){
    sessionStorage.setItem('item', num)
}

function loadOneProduct() {
    const itens = products()
    const n = sessionStorage.getItem('item')

    image = document.querySelector('#image')
    nm = document.querySelector('#name')
    description = document.querySelector('#desc')
    size = document.querySelector('#size')
    category = document.querySelector('#categ')

    console.log(image)
    console.log(nm)
    console.log(description)
    console.log(size)
    console.log(category)

    image.src = itens[n].img
    nm.value = itens[n].desc
    description.value = "Sobre o produto: \n" + itens[n].desc
    size.value = "Tamanho: " + itens[n].size
    category.value = "Categoria: " + itens[n].category
}