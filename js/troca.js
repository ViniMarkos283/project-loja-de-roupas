function setItem(num){
    const itens = Products()

}

function loadOneProduct() {
    sessionStorage.getItem('item');

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

    image.src = itens.img
    nm.value = itens.desc
    description.value = "Sobre o produto: \n" + itens.desc
    size.value = "Tamanho: " + itens.size
    category.value = "Categoria: " + itens.category
}