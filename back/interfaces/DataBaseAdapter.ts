import User from "./UserInterface";
import QCM from "./QCMInterface";


export default interface DatabaseAdapter{
    createUser(User: Omit<User, 'id'>): Promise<number>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(user: Partial<User>): Promise<number>;
    deleteUser(id: number): Promise<number>;
    getAllUsers(): Promise<User[]>;

    createQCM(QCM: Omit<QCM, 'id'>): Promise<number>;
    getQCMById(id: number): Promise<QCM | null>;
    updateQCM(QCM: Partial<QCM>): Promise<number>;
    deleteQCM(id: number): Promise<number>;
    getAllQCMs(): Promise<QCM[]>

}