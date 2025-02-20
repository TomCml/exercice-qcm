import User from "../interfaces/UserInterface";
import DatabaseAdapter from "../interfaces/DataBaseAdapter";

class UserModel {
    private databaseToolbox: DatabaseAdapter;

    constructor(adapterInstance: DatabaseAdapter) {
        this.databaseToolbox = adapterInstance;
    }

    
    async createUser(user: Omit<User, 'id'>): Promise<number> {
        return this.databaseToolbox.createUser(user);
    }

    async getUserById(id: number): Promise<User | null> {
        return this.databaseToolbox.getUserById(id);
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return this.databaseToolbox.getUserByEmail(email);
    }

    async updateUser(user: Partial<User>): Promise<number> {
        return this.databaseToolbox.updateUser(user)
    }
    async deleteUser(id: number): Promise<number>{
        return this.databaseToolbox.deleteUser(id)
    }

    async getAllUsers(): Promise<User[]>{
        return this.databaseToolbox.getAllUsers();
    }

}

export default UserModel;
