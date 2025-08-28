import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.js";
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

// Rutas API
app.use("/api/auth", authRoutes);

app.get("/api", (req, res) => {
  res.json({ mensaje: "API funcionando correctamente" });
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await productmodel.find();
    res.json(products);
  } catch (err) {
    console.error("Error real:", err);
    res.status(500).json({ message: "Error al obtener productos" });
  }
});

// Servir React build
const __dirname = path.resolve(); // necesario con ES Modules
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
