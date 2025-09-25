import express from 'express';
import { usermodel } from '../models/user.models.js';
import { generateToken } from '../utils/jwt.js';

const router = express.Router();

// Registro
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
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

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await usermodel.findOne({ email });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const valid = await user.comparePassword(password);
    if (!valid) return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = generateToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ error: 'Error en el servidor' });
  }

});

export default router;
