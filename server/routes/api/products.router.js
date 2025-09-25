import { Router } from "express";
import ProductController from "../../controllers/products.controller.js";
import { authorizationJWT } from "../../utils/authorizationJWT.js";


const router = Router();

const{
    addProducts,
    getProducts,
    getProductsById,
    deleteProduct,
    updateProduct
} = new ProductController();


router.get('/', getProducts);
router.get('/:pid',authorizationJWT, getProductsById);
router.post('/', authorizationJWT, addProducts);
router.put('/:pid', authorizationJWT, updateProduct);
router.delete('/:pid', authorizationJWT, deleteProduct);

export default router;


