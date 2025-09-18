import { ProductsDao } from "../daos/factory.js";
import ProductRepository from "../repositories/product.repository.js";

export const productService = new ProductRepository(new ProductsDao());