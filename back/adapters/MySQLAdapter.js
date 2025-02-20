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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLAdapter = void 0;
const sql_1 = __importDefault(require("../config/sql"));
class MySQLAdapter {
    //User Methods
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
            console.log('Trying to create user with data:', user); // Affiche les données envoyées
            try {
                yield sql_1.default.query('SELECT 1');
                console.log('Database connection OK');
            }
            catch (err) {
                console.error('Database connection failed:', err); // Problème avec le pool
            }
            try {
                const [result] = yield sql_1.default.execute(query, [user.username, user.email, user.password]);
                console.log('User created successfully with ID:', result.insertId); // Succès de la requête
                return result.insertId;
            }
            catch (error) {
                console.error('Database insertion error:', error); // Affiche l'erreur exacte
                throw error; // Permet de voir le détail dans les logs du serveur
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const query = "SELECT * FROM users WHERE id = ?";
            const [rows] = yield sql_1.default.execute(query, [id]);
            return (_a = rows[0]) !== null && _a !== void 0 ? _a : null;
        });
    }
    ;
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const updates = [];
            const values = [];
            if (user.username !== undefined) {
                updates.push('username = ?');
                values.push(user.username);
            }
            if (user.email !== undefined) {
                updates.push('email = ?');
                values.push(user.email);
            }
            if (user.password !== undefined) {
                updates.push('password = ?');
                values.push(user.password);
            }
            values.push(user.id);
            const query = `UPDATE users SET ${updates.join(', ')} WHERE id = ?`;
            const [result] = yield sql_1.default.execute(query, values);
            return result.affectedRows;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM users WHERE id = ?";
            const [result] = yield sql_1.default.execute(query, [id]);
            return result.affectedRows;
        });
    }
    ;
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM users";
            const [result] = yield sql_1.default.execute(query);
            return result;
        });
    }
    ;
    //QCM Methods
    createQCM(qcm) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO qcms (title, answer1, answer2, answer3, answer4, good_answer) VALUES (?, ?, ?, ?, ?, ?)";
            const [result] = yield sql_1.default.execute(query, [qcm.title, qcm.answer1, qcm.answer2, qcm.answer3, qcm.answer4, qcm.good_answer]);
            return result.insertId;
        });
    }
    ;
    getQCMById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const query = "SELECT * FROM qcms WHERE id = ?";
            const [rows] = yield sql_1.default.execute(query, [id]);
            return (_a = rows[0]) !== null && _a !== void 0 ? _a : null;
        });
    }
    ;
    updateQCM(qcm) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE qcms SET title= ?, answer1= ?, answer2= ?, answer3= ?, answer4= ?, good_answer= ? WHERE id = ?";
            const [result] = yield sql_1.default.execute(query, [qcm.title, qcm.answer1, qcm.answer2, qcm.answer3, qcm.answer4, qcm.good_answer, qcm.id]);
            return result.affectedRows;
        });
    }
    ;
    deleteQCM(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM qcms WHERE id = ?";
            const [result] = yield sql_1.default.execute(query, [id]);
            return result.affectedRows;
        });
    }
    ;
    getAllQCMs() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM qcms";
            const [result] = yield sql_1.default.execute(query);
            return result !== null && result !== void 0 ? result : null;
        });
    }
    ;
}
exports.MySQLAdapter = MySQLAdapter;
