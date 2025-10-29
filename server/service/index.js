import { ProductsDao, UsersDao, ClientDao } from "../daos/factory.js";
import ProductRepository from "../repositories/product.repository.js"
import UserRepository from "../repositories/user.repository.js";
import ClientRepository from "../repositories/client.repository.js";

export const productService = new ProductRepository(new ProductsDao());
export const userService = new UserRepository(new UsersDao());
export const ClientService = new ClientRepository(new ClientDao());