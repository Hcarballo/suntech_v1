import { objectConfig, connectDB } from '../config/index.js';

export let ProductsDao;
//export let CartsDao;
//export let UsersDao;

switch (objectConfig.persistence) {
    case "MEMORY":

        break;
    case "FS":

        break;
    default:
        console.log("Entre al switch")
        connectDB();
        const { default: ProductDaoMongo } = await import('./Mongo/productDao.js');
        //const { default: CartDaoMongo } = await import('./MONGO/cartDao.js');
        //const { default: UserDaoMongo } = await import('./MONGO/userDao.js')

        ProductsDao = ProductDaoMongo;
        //CartsDao = CartDaoMongo;
        //UsersDao= UserDaoMongo;

        break;
}