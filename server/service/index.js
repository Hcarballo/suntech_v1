import { ProductsDao, UsersDao } from "../daos/factory.js";
import ProductRepository from "../repositories/product.repository.js"
import UserRepository from "../repositories/user.repository.js";

export const productService = new ProductRepository(new ProductsDao());
export const userService = new UserRepository(new UsersDao());