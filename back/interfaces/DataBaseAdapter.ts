import User from "./UserInterface";


export default interface DatabaseAdapter{
    createUser(User: Omit<User, 'id'>): Promise<number>;
    getUserById(id: number): Promise<User | null>;
    updateUser(id: number, user: Partial<User>): Promise<number>;
    deleteUser(id: number): Promise<number>;
    getAllUsers(): Promise<User[]>;
}