// routes/register.js
import { Router } from 'express';
import {user} from '../models/user.models.js'

const router = Router();


router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  // Validación básica
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const userExists = await user.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const newUser = new user({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

export default router;
