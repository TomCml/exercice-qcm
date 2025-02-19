import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

// Définir les routes
router.post("/users", userController.createUser);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/users", userController.getAllUsers);

export default router;
