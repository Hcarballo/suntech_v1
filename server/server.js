import express from "express";
import passport from "passport";
import cors from "cors";
import path from "path";
import routerApp from "./routes/index.js";
import authRoutes from "./routes/auth.js";
import { initializePassport } from "./config/passport.config.js";
import { objectConfig } from "./config/index.js";
import { fileURLToPath } from "url"; // necesario para ES Modules

const app = express();
const { port } = objectConfig;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware CORS primero
app.use(cors({
  origin: "*", // tu frontend
  credentials: true
}));

// Middlewares de parseo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Passport
initializePassport();
app.use(passport.initialize());

// Rutas de autenticación primero
app.use("/api/auth", authRoutes);

// Otras rutas de la app
app.use(routerApp);

// Archivos estáticos (build de React)
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Levantar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
