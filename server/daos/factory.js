import { objectConfig, connectDB } from '../config/index.js';

export let ProductsDao;
export let ClientDao;
//export let CartsDao;
export let UsersDao;

switch (objectConfig.persistence) {
    case "MEMORY":

        break;
    case "FS":

        break;
    default:
        connectDB();
        const { default: ProductDaoMongo } = await import('./Mongo/productDao.js');
        const { default: ClientDaoMongo } = await import('./Mongo/clientDao.js');
        //const { default: CartDaoMongo } = await import('./MONGO/cartDao.js');
        const { default: UserDaoMongo } = await import('./Mongo/userDao.js')

        ProductsDao = ProductDaoMongo;
        ClientDao = ClientDaoMongo;
        //CartsDao = CartDaoMongo;
        UsersDao= UserDaoMongo;

        break;
}