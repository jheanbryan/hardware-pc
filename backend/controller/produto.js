const Products = require('../model/schema.js')

function returnErrorMessage(res, messageError, error= '') {
    if(error == '')
        res.send({message: `[ERRO]: ${messageError}`});
    else
        res.send({message: `[ERRO]: ${messageError}`, error: error});
};

function returnMessage(res, message) {
    res.send({message: `[SUCESSO]: ${message}`});
};

exports.listProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.send(products);

    } catch (error) {
        console.log(error);
        returnErrorMessage(res, 'Erro ao listar produtos!', error);
    }
};

exports.addProducts = async (req, res) => {
    const newProduct = req.query;

    if (!newProduct.name) {
        return returnErrorMessage(res, 'Informe o nome do produto!');

    } 
    try {
        await Products.create(newProduct);
        returnMessage(res, 'Produto adicionado!');

    } catch (error) {
        console.log(error);
        returnErrorMessage(res, 'Problemas ao cadastrar!', error);
    }
};

exports.editProducts = async (req, res) => {
    const product = req.query;
    if (!product.name) {
        return returnErrorMessage(res, 'Informe o nome do produto a ser editado!');
    }
    try {
        const editedProduct = await Products.findOneAndUpdate({ name: product.name }, product);

        if (editedProduct == null)
            return returnErrorMessage(res, 'Esse produto nao existe no Banco!');
        returnMessage(res, 'Produto editado!');
        
    } catch (error) {
        console.log(error);
        returnErrorMessage(res, 'Erro ao editar!', error);
    }
};

exports.deleteProducts = async (req, res) => {
    const product = req.query;

    if (!product) {
        return returnErrorMessage(res, 'Informe o nome do produto a ser deletado!');
    }
    try {
        const deletedProduct = await Products.findOneAndDelete({ name: product.name });
        if(deletedProduct == null)
            return returnErrorMessage(res, 'Produto nao encontrado no Banco!');
        returnMessage(res, 'Produto deletado!');

    } catch (error) {
        console.log(error);
        returnErrorMessage(res, 'Errro ao deletar produto!', error);
    };
};