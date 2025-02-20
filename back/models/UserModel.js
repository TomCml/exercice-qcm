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
class UserModel {
    constructor(adapterInstance) {
        this.databaseToolbox = adapterInstance;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.databaseToolbox.createUser(user);
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.databaseToolbox.getUserById(id);
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.databaseToolbox.updateUser(user);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.databaseToolbox.deleteUser(id);
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.databaseToolbox.getAllUsers();
        });
    }
}
exports.default = UserModel;
