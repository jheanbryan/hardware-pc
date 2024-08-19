import { req } from "../index.js";

const card = (product, elementHtml) => {
    const divCard =`
            <div class="card-product">
                <div class="div-img">
                    <img src="${product.img.srcImg}" alt="${product.img.nameImg}" class="product">
                </div>

                <div class="info-product">
                    <span class="product-title">
                        ${product.name}
                    </span>

                    <div class="container-value">
                        <span class="old-value">
                            de ${product.value + 199}
                        </span>
                        <span class="new-value">
                            por ${product.value}
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

const writeProductsInHtml = async () => {
    const containerCards = document.querySelector('.container-products');
    const products = await req();
    for (let i = 0; i < products.length; i++) {
        card(products[i], containerCards)
    }

};

writeProductsInHtml();