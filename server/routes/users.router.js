import { Router } from "express";
import UserController from "../controllers/users.controller.js";

const router = Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = new UserController();


router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
