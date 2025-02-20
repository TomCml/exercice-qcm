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
class QCMModel {
    constructor(adapterInstance) {
        this.databaseToolbox = adapterInstance;
    }
    createQCM(qcm) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO qcms (title, answer1, answer2, answer3, answer4, good_answer) VALUES (?, ?, ?, ?, ?, ?)";
            const [result] = yield pool.execute(query, [qcm.title, qcm.answer1, qcm.answer2, qcm.answer3, qcm.answer4, qcm.good_answer]);
            return result.insertId;
        });
    }
    ;
    getQCMById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const query = "SELECT * FROM qcms WHERE id = ?";
            const [rows] = yield pool.execute(query, [id]);
            return (_a = rows[0]) !== null && _a !== void 0 ? _a : null;
        });
    }
    ;
    updateQCM(qcm) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE qcms SET title= ?, answer1= ?, answer2= ?, answer3= ?, answer4= ?, good_answer= ? WHERE id = ?";
            const [result] = yield pool.execute(query, [qcm.title, qcm.answer1, qcm.answer2, qcm.answer3, qcm.answer4, qcm.good_answer, qcm.id]);
            return result.affectedRows;
        });
    }
    ;
    deleteQCM(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM qcms WHERE id = ?";
            const [result] = yield pool.execute(query, [id]);
            return result.affectedRows;
        });
    }
    ;
    getAllQCMs() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM qcms";
            const [result] = yield pool.execute(query);
            return result !== null && result !== void 0 ? result : null;
        });
    }
    ;
}
exports.default = QCMModel;
