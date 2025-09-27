// routes/register.js
import { Router } from 'express';
import { usermodel } from '../models/user.models';

const router = Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

    if (!name || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const userExists = await usermodel.findOne({ email });
    if (userExists) return res.status(400).json({ error: 'El usuario ya existe' });

    const newUser = new usermodel({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (err) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

export default router;
