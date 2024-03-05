document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerContainer').innerHTML = data;
            window.scrollTo(0, 0);
        })
        .catch(error => {
            console.error('Erro ao carregar o cabeçalho:', error);
        });
});