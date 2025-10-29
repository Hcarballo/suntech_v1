import { Router } from "express";
import usersRouter from "./api/users.router.js";
import productsRouter from "./api/products.router.js";
import clientsRouter from "./api/clients.router.js"

const router = Router();

router.use("/api/users", usersRouter);
router.use("/api/products", productsRouter);
router.use("/api/clients", clientsRouter);


router.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send('Error 500 en el server')
});

export default router;

