import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"; // 👈 importante que termine en .js si usás ES modules
import { productmodel } from "./models/products.models.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB conectado"))
  .catch((err) => console.error("❌ Error conectando MongoDB:", err));

// Rutas
app.use("/api/auth", authRoutes);

// Ruta test
app.get("/api", (req, res) => {
  res.json({ mensaje: "API funcionando correctamente" });
});

// Ruta GET /api/products
app.get("/api/products", async (req, res) => {
  try {
    const products = await productmodel.find(); // trae todos los productos
    res.json(products);
  } catch (err) {
    console.error("Error real:", err); 
    res.status(500).json({ message: "Error al obtener productos" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
