import { Router } from 'express';
import CartController from '../../controllers/carts.controller';

const {
    getCart,
    createCart,
    getCartByID,
    addProductToCart,
    delProductToCart,
    deleteCart,
    enviarfactura,
} = new CartController();

const router = Router();

router.get('/', getCart);

router.get('/create', createCart);

router.get('/:cid', getCartByID);

router.post('/product', addProductToCart);

router.get('/cart/enviarfactura', enviarfactura);

router.delete('/product/:pid', delProductToCart);

router.delete('/:cid', deleteCart);

export default router;