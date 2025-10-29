import { productService } from "../service/index.js";
import { userService } from "../service/index.js";

class ProductController {
    constructor() {
        this.service = productService;
    };

    addProducts = async (req, res) => {
        const {
            codigo,
            descripcion,
            categoria,
            datoAdicional,
            precioVentaPublicoSinIVA,
            precioDistribuidorSinIVA,
            iva,
            precioPublico,
            porcentajeGanancia,
            imagen,
            dataSheet,
            stock,
            status,
            timestamps
        } = req.body;

        if (!codigo || !descripcion) {
            res.send();
        }
        try {
            const newProduct = {
                codigo: codigo,
                descripcion: descripcion,
                categoria: categoria,
                datoAdicional: datoAdicional,
                precioVentaPublicoSinIVA: precioVentaPublicoSinIVA,
                precioDistribuidorSinIVA: precioDistribuidorSinIVA,
                iva: iva,
                precioPublico: precioPublico,
                porcentajeGanancia: porcentajeGanancia,
                imagen: imagen,
                dataSheet: dataSheet,
                stock: stock,
                status: status,
                timestamps: timestamps
            }
            const result = await this.service.createProduct(newProduct);
            res.status(200).send({ status: 'success', payload: result });
        } catch (error) {
            console.log(error);
        }
    };

    getProducts = async (req, res) => {
        try {
            const productsDB = await this.service.getProducts();

            // Siempre responder con JSON (aunque sea un array vacío)
            res.json(productsDB);
        } catch (error) {
            console.error("Error en getProducts:", error);
            res.status(500).json({ error: "Error al obtener productos" });
        }
    };

    getProductsById = async (req, res) => {
        const { pid } = req.params;
        try {
            const productDB = await this.service.getProductsById(pid);
            if (!productDB) {
                res.send(`El Producto con el código ${pid} no existe`)
            } else {
                res.send(productDB);
            }
        } catch (error) {
            console.log(error);
        }
    };

    updateProduct = async (req, res) => {
        const id = req.params.pid;
        const {
            codigo,
            descripcion,
            categoria,
            datoAdicional,
            precioVentaPublicoSinIVA,
            precioDistribuidorSinIVA,
            iva,
            precioPublico,
            porcentajeGanancia,
            imagen,
            dataSheet,
            stock,
            status,
            timestamps

        } = req.body;

        if (!codigo || !descripcion) {
            res.send();
        }
        try {
            const product = {
                codigo,
                descripcion,
                categoria,
                datoAdicional,
                precioVentaPublicoSinIVA,
                precioDistribuidorSinIVA,
                iva,
                precioPublico,
                porcentajeGanancia,
                imagen,
                dataSheet,
                stock,
                status: true,
                timestamps
            };
            await this.service.updateProduct({ _id: id }, product);
            res.status(200).send({ status: 'success' });
        } catch (error) {
            console.log(error);
        }
    };

    deleteProduct = async (req, res) => {
        const product = req.params.pid;

        try {
            const prodSelect = await this.service.getProductsById(product);
            const html = `<h4>El producto ${prodSelect} ha sido eliminado</h4>`;
            const owner = await userService.getUser(prodSelect.ownerId);
            const result = await this.service.deleteProduct(product);
            res.status(200).send({ status: 'success', payload: result });
        } catch (error) {
            console.log(error);
        }
    };
}

export default ProductController;