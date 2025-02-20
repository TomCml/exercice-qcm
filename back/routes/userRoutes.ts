import express from 'express';
import UserController from '../controllers/UserController';
import UserModel from '../models/UserModel';
import { MySQLAdapter } from '../adapters/MySQLAdapter';

const router = express.Router();

const userModel = new UserModel(new MySQLAdapter());
const userController = new UserController(userModel);

router.post('/users', (req, res) => userController.createUser(req, res));
router.get('/users/:id', (req, res) => userController.getUserById(req, res));
router.put('/users/:id', (req, res) => userController.updateUser(req, res));
router.delete('/users/:id', (req, res) => userController.deleteUser(req, res));
router.get('/users', (req, res) => userController.getAllUsers(req, res));

export default router;
