import express from "express";
import cors from "cors";
import path from "path";
import routerApp from "./routes/index.js";
import authRoutes from "./routes/auth.js";
import { objectConfig } from "./config/index.js";
import { fileURLToPath } from "url"; // necesario para ES Modules

const app = express();
const { port } = objectConfig;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerApp);
app.use("/api/auth", authRoutes);

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // tu frontend
  credentials: true,
}));

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});