class Product {
    constructor() {
      this.id = '';
      this.name = '';
      this.title = '';
      this.oldValue = null;
      this.currentValue = null;
      this.offer = false;
      this.description = '';
      this.img = {
                nameImg: '',
                srcImg: ''
            }
    }
}
const host = 'http://localhost:3000';

export const req = async () => {
    const API_URL = 'http://localhost:3000/products';
    const response = await fetch(API_URL);
    const results = await response.json();
    const allProducts = [];

    results.forEach(product => {
        const newProduct = new Product();
        newProduct.id = product._id;
        newProduct.name = product.name;
        newProduct.title = product.title;
        newProduct.oldValue = product.oldValue;
        newProduct.currentValue = product.currentValue;
        newProduct.offer = product.offer;
        newProduct.description = product.description;
        newProduct.img = {
            nameImg: product.img.nameImg,
            srcImg: host + product.img.srcImg
        }

        allProducts.push(newProduct)

    });

    console.log(allProducts)
    return allProducts;

}