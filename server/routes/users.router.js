// routes/register.js
import { Router } from 'express';
import { usermodel } from '../models/user.models';

const router = Router();

router.get('/', async (req, res) => {
    const users = await usermodel.find();
    console.log("ESTUVE ACA")
    res.send(users);
})