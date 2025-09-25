// server/controllers/users.controller.js
import { usermodel } from "../models/user.models.js";

// Obtener todos los usuarios (solo admin)
export const getUsers = async (req, res) => {
  try {
    const users = await usermodel.find().select("-password"); // ocultamos password
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

// Obtener un usuario por ID
export const getUserById = async (req, res) => {
  try {
    const user = await usermodel.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

// Crear usuario (solo admin)
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const exists = await usermodel.findOne({ email });
    if (exists) return res.status(400).json({ error: "El usuario ya existe" });

    const newUser = new usermodel({ name, email, password, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

// Actualizar usuario
export const updateUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const updatedUser = await usermodel.findByIdAndUpdate(
      req.params.id,
      { name, email, role },
      { new: true }
    ).select("-password");

    if (!updatedUser) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await usermodel.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};
