import { req } from "./controller.js";

const card = (product, elementHtml) => {
    const divCard =`
            <div class="card-product">
                <div class="div-img">
                    <img src="${product.img.srcImg}" alt="${product.img.nameImg}" class="product">
                </div>

                <div class="info-product">
                    <span class="product-title">
                        ${product.title}
                    </span>

                    <div class="container-value">
                        <span class="old-value">
                            de ${product.oldValue}
                        </span>
                        <span class="new-value">
                            por ${product.currentValue}
                        </span>
                        <span class="payment-form">
                            À vista no PIX
                        </span>
                    </div>
                </div>
            </div>
    `;
    elementHtml.insertAdjacentHTML('beforeend', divCard)
};

const main = async () => {
    menu();

    const containerCards = document.querySelector('.container-products');
    const products = await req();
    for (let i = 0; i < products.length; i++) {
        card(products[i], containerCards)
    }

    searchInput();

};

const searchInput = () => {
    const inputSearch = document.querySelector('.input-search');
    const cardsProducts = document.querySelectorAll('.card-product');
    inputSearch.addEventListener('input', filterCards);

    function filterCards(){
        if (inputSearch.value != '')
            cardsProducts.forEach(card => {
                let title = card.querySelector('.product-title');
                title = title.textContent.toLowerCase();

                let filterText = inputSearch.value.toLowerCase();

                if (!title.includes(filterText)) {
                    card.style.display = 'none';
                } else {
                    card.style.display = 'block';
                }
            });

        else
            for (const card of cardsProducts) {
                card.style.display = 'block';
            }
    }
}

const menu = () => {
    const barsMenu = document.querySelector('.bars');
    const sideBar = document.querySelector('.side-bar');

    barsMenu.addEventListener('click', () => {
        sideBar.classList.toggle('side-in');
        barsMenu.classList.toggle('active');
    })
}

main();