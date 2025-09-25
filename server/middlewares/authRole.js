// server/middlewares/authRole.js
export const authRole = (roles = []) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "No autenticado" });
      }

      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: "No tienes permisos" });
      }

      next();
    } catch (err) {
      res.status(500).json({ error: "Error en autorización" });
    }
  };
};
