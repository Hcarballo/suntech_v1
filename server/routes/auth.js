import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.models.js'; // 👈 Asegurate de incluir `.js` en rutas locales si usás ES Modules

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Registro
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ error: 'El usuario ya existe' });

    const newUser = new User({ name, email, password });
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
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const valid = await user.comparePassword(password);
    if (!valid) return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });

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
