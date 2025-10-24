import dotenv from "dotenv";
dotenv.config(); // 👈 PRIMERO SIEMPRE

import express from "express";
import passport from "passport";
import cors from "cors";
import path from "path";
import routerApp from "./routes/index.js";
import { initializePassport } from "./config/passport.config.js";
import { objectConfig } from "./config/index.js";
import { fileURLToPath } from "url";
import sessionsRouter from "./routes/session.router.js";
import cookieParser from "cookie-parser";

const app = express();
const { port } = objectConfig;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS: incluye tu frontend local y la URL de Render
app.use(cors({
  origin: [
    "http://localhost:5174", 
    "https://suntech-v1.onrender.com"
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Passport
initializePassport();
app.use(passport.initialize());

// Rutas de sesión y app
app.use("/api/sessions", sessionsRouter);
app.use(routerApp);

// Archivos estáticos de React
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Levantar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
