import pool from "../config/sql";
import { ResultSetHeader,RowDataPacket  } from 'mysql2';
import DatabaseAdapter from "../interfaces/DataBaseAdapter";
import User from "../interfaces/UserInterface";
import QCM from "../interfaces/QCMInterface";


export class MySQLAdapter implements DatabaseAdapter   {

    //User Methods

    async createUser(user: Omit<User, 'id'>): Promise<number> {

        const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
        const [result] = await pool.execute<ResultSetHeader>(query, [user.username, user.email, user.password])
        return result.insertId;
    };

    async getUserById(id: number): Promise<User | null> {

        const query = "SELECT * FROM users WHERE id = ?";
        const [rows] = await pool.execute<(User & RowDataPacket)[]>(query, [id]);
        return rows[0] ?? null; 
    };
      
    async updateUser(user: Partial<User>): Promise<number> {
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
        const [result] = await pool.execute<ResultSetHeader>(query, values);
        return result.affectedRows;
    }

    async deleteUser(id: number): Promise<number> {

        const query = "DELETE FROM users WHERE id = ?";
        const [result] = await pool.execute<(ResultSetHeader)>(query, [id]);
        return result.affectedRows
    };

    async getAllUsers(): Promise<User[]> {

        const query = "SELECT * FROM users"
        const [result] = await pool.execute<(RowDataPacket & User)[]>(query)
        return result;
    };

    //QCM Methods

    async createQCM(qcm: Omit<QCM, 'id'>): Promise<number> {
        const query = "INSERT INTO qcms (title, answer1, answer2, answer3, answer4, good_answer) VALUES (?, ?, ?, ?, ?, ?)"
        const [result] = await pool.execute<ResultSetHeader>(query, [qcm.title, qcm.answer1, qcm.answer2, qcm.answer3, qcm.answer4, qcm.good_answer])
        return result.insertId;
    };

    async getQCMById(id: number): Promise<QCM | null> {

        const query = "SELECT * FROM qcms WHERE id = ?";
        const [rows] = await pool.execute<(QCM & RowDataPacket)[]>(query, [id]);
        return rows[0] ?? null; 
    };

    async updateQCM(qcm: Partial<QCM>): Promise<number> {

        const query = "UPDATE qcms SET title= ?, answer1= ?, answer2= ?, answer3= ?, answer4= ?, good_answer= ? WHERE id = ?"
        const [result] = await pool.execute<ResultSetHeader>(query, [qcm.title, qcm.answer1, qcm.answer2, qcm.answer3, qcm.answer4, qcm.good_answer, qcm.id])
        return result.affectedRows;
    };

    async deleteQCM(id: number): Promise<number> {

        const query = "DELETE FROM qcms WHERE id = ?";
        const [result] = await pool.execute<(ResultSetHeader)>(query, [id]);
        return result.affectedRows
    };

    async getAllQCMs(): Promise<QCM[]> {

        const query = "SELECT * FROM qcms"
        const [result] = await pool.execute<(RowDataPacket & QCM)[]>(query)
        return result?? null;
    };


}