// server/utils/authorizationJWT.js
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./jwt.js";

export const authorizationJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Token requerido" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token inválido" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Guardamos info del usuario en req
    next();
  } catch (err) {
    return res.status(403).json({ error: "Token no válido o expirado" });
  }
};
