import { Router } from "express";
import usersRouter from "./users.router.js";
import productsRouter from "./api/products.router.js";
import authRoutes from "./auth.js";

const router = Router();

router.use("/api/auth", authRoutes);
router.use("/api/users", usersRouter);
router.use("/api/products", productsRouter);


router.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send('Error 500 en el server')
});

export default router;

