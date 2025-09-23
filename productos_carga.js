import mongoose from 'mongoose';
import { connectDB } from './server/config/index.js';
import ProductsDao from './server/daos/product.daos.js';
import { productModel } from './server/models/products.models.js';
import products from './productos_mongoose.js';

async function loadProductsOneByOne() {
    try {
       connectDB();
        console.log("Conectado a MongoDB Atlas");

        const dao = new ProductsDao();

        for (const product of products) {
            try {
                 console.log(`Cantidad de productos ${products.length}`)
                const inserted = await dao.addProducts(product);               
                console.log(`Producto insertado: ${inserted.codigo}`);
            } catch (err) {
                console.error(`Error insertando ${product.codigo}:`, err.message);
            }
        }

        console.log("Carga de productos finalizada");
    } catch (error) {
        console.error("Error de conexión:", error);
    } finally {
        await mongoose.connection.close();
        console.log("Conexión cerrada");
    }
}

loadProductsOneByOne();
