import { Router } from "express";
import productRouter from './api/products.router.js'



const router = Router();

router.use('/api/products', productRouter);

router.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send('Error 500 en el server')
});

export default router;

