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

    async updateUser(id: number, user: Partial<User>): Promise<number> {
        return this.databaseToolbox.updateUser(id, user)
    }
    async deleteUser(id: number): Promise<number>{
        return this.databaseToolbox.deleteUser(id)
    }

    async getAllUsers(): Promise<User[]>{
        return this.databaseToolbox.getAllUsers();
    }

}

export default UserModel;
