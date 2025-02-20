import { Request, Response } from 'express';

class QCMModel {

    private databaseToolbox: DatabaseAdapter;

    constructor(adapterInstance: DatabaseAdapter){
        this.databaseToolbox = adapterInstance;
    }

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

export default QCMModel;