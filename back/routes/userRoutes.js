"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const MySQLAdapter_1 = require("../adapters/MySQLAdapter");
const router = express_1.default.Router();
const userModel = new UserModel_1.default(new MySQLAdapter_1.MySQLAdapter());
const userController = new UserController_1.default(userModel);
router.post('/users', (req, res) => userController.createUser(req, res));
router.get('/users/:id', (req, res) => userController.getUserById(req, res));
router.put('/users/:id', (req, res) => userController.updateUser(req, res));
router.delete('/users/:id', (req, res) => userController.deleteUser(req, res));
router.get('/users', (req, res) => userController.getAllUsers(req, res));
exports.default = router;
