import { Router } from "express";
import ClientsController from "../../controllers/client.controller.js";

const router = Router();

const {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
} = new ClientsController();


router.get("/", getClients);
router.get("/:id", getClientById);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;