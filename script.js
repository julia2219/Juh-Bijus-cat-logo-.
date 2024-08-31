// script.js
a
// Função para pesquisar produtos
function searchProducts() {
    const query = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const title = product.querySelector('h2').textContent.toLowerCase();
        const description = product.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Função para filtrar produtos por categoria
function filterCategory(category) {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Função para abrir o modal
function openModal(product) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');

    modalImage.src = product.querySelector('img').src;
    modalTitle.textContent = product.querySelector('h2').textContent;
    modalDescription.textContent = product.querySelector('p').textContent;
    modalPrice.textContent = product.querySelector('span').textContent;

    modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Fechar o modal quando clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === document.getElementById('productModal')) {
        closeModal();
    }
};