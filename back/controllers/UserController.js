"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(userModel) {
        this.userModel = userModel;
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield this.userModel.createUser(req.body);
                res.status(201).json(newUser);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    ;
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userModel.getUserById(parseInt(req.params.id));
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).json({ error: 'User not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    ;
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params.id);
                const userData = req.body;
                const updatedUser = yield this.userModel.updateUser(Object.assign(Object.assign({}, userData), { id: userId }));
                if (updatedUser) {
                    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
                }
                else {
                    res.status(404).json({ error: 'User not found' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.userModel.deleteUser(parseInt(req.params.id));
                if (response) {
                    res.status(204).json({ message: 'User deleted successfully' });
                }
                else {
                    res.status(404).json({ error: 'User not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    ;
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [users] = yield this.userModel.getAllUsers();
                res.status(200).json({ users: users, message: 'Users retrieved successfully' });
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    ;
}
exports.default = UserController;
