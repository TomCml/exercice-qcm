import pool from "../config/sql";
import { ResultSetHeader,RowDataPacket  } from 'mysql2';
import DatabaseAdapter from "../interfaces/DataBaseAdapter";
import User from "../interfaces/UserInterface";


export class MySQLAdapter implements DatabaseAdapter   {


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
      
    async updateUser(id: number, user: Partial<User>): Promise<number> {
        const query =  "UPDATE users SET username = ? email = ?, password = ? WHERE id = ?"
        const [result] = await pool.execute<ResultSetHeader>(query, [user.username, user.email, user.password])
        return result.affectedRows;
    };

    async deleteUser(id: number): Promise<number> {
        const query = "DELETE FROM users WHERE id = ?";
        const [result] = await pool.execute<(ResultSetHeader)>(query, [id]);
        return result.affectedRows
    };

    async getAllUsers(): Promise<User[]> {
        const query = "SELECT * FROM users"
        const [result] = await pool.execute<(RowDataPacket & User)[]>(query)
        return result?? null;
    };
}