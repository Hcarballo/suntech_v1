export default class ProductRepository {
    constructor(productDao) {
        this.productDao = productDao;
    }

    getProducts = async () => {
        const products = await this.productDao.getProducts();
        console.log("Estoy en el repository");
        return products; // 🔹 IMPORTANTE
    }

    getProductsById = async filter => await this.productDao.getProductsById(filter);
    createProduct = async (newProd) => await this.productDao.addProducts(newProd);
    updateProduct = async (pid, prodToUpdate) => await this.productDao.updateProduct(pid, prodToUpdate);
    deleteProduct = async pid => await this.productDao.deleteProduct(pid);
}
