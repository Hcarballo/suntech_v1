// routes/register.js
import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from "../../controllers/users.controller.js";

import { authorizationJWT } from "../../utils/authorizationJWT.js";
import { authRole } from "../../middlewares/authRole.js";

const router = express.Router();

// ✅ Solo admin puede acceder a estos endpoints
router.get("/", authorizationJWT, authRole(["admin"]), getUsers);
router.get("/:id", authorizationJWT, authRole(["admin"]), getUserById);
router.post("/", authorizationJWT, authRole(["admin"]), createUser);
router.put("/:id", authorizationJWT, authRole(["admin"]), updateUser);
router.delete("/:id", authorizationJWT, authRole(["admin"]), deleteUser);

export default router;
