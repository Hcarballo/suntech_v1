import { Router } from "express";
import { productmodel } from "../models/products.models";

const router = Router();

router.get('/', async (req, res) => {
    const products = await productmodel.find({});
    res.send(products);
})

router.post('/', (req, res) => {
    console.log(req.body);
    const { item, codigo, descripcion, foto, precio } = req.body;

    const newProduct = {
        item,
        codigo,
        descripcion,
        foto,
        precio
    }

    products.push(newProduct);
})
