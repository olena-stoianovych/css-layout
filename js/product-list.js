(function() {

    let rate = 1;
    let products;

    async function loadProducts() {
        const response = await fetch('products.json');
        products = await response.json();
        renderProducts();
    }

    // function loadProducts() {
    //     fetch('products.json')
    //      .then( response => response.json() )
    //      .then( products => renderProducts(products) );
    // }

    // function loadProductsXHR() {
    //     const xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === 4 && xhr.status === 200 ) {
    //             const products = JSON.parse(xhr.responseText);
    //             renderProducts(products);
    //         }
    //     }
    //     xhr.open('get', 'products.json', true);
    //     xhr.send();
    // }

    function renderProducts() {
        const productsContainer = document.querySelector('.products__list');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
                <article class="product">
                    <img class="product__img" src="${product.imgUrl}" alt="${product.title}">
                    <h3 class="product__title">${product.title}</h3>
                    <p class="product__description">${product.description}</p>
                    <div class="product__buttons">
                        <button class="button button-card">Info</button>
                        <button class="button button-card">${(product.price * rate).toFixed(2)} - Buy</button>
                    </div>
                </article>`;
        }
    }

    document.querySelector('.convert').addEventListener('click', convertCurrency);

    async function convertCurrency() {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const currencies = await response.json();
        const convertTo = document.querySelector('.currency').value;
        rate = currencies.rates[convertTo];
        renderProducts();
    }

    loadProducts();
})();