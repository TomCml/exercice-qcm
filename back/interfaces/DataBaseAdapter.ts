import { User } from "./UserInterface";

export default interface DatabaseAdapter{
    createUser(user: Omit<User, 'id'>): Promise<number>;
    getUserById(id: number): Promise<User | null>;
    updateUser(id: Number, user: Partial<User>): Promise<number>;
    deleteUser(id: Number): Promise<null>;
    getAllUsers(): Promise<User[]>;
}