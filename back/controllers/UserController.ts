import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

class UserController {
    private userModel: UserModel;

    constructor(userModel: UserModel) {
        this.userModel = userModel;
    }

    async createUser(req: Request, res: Response) {
        try {
            const newUser = await this.userModel.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    async getUserById(req: Request, res: Response) {
        try {
            const user = await this.userModel.getUserById(parseInt(req.params.id));
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    async updateUser(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            const userData = req.body;
            const updatedUser = await this.userModel.updateUser({ ...userData, id: userId });

            if (updatedUser) {
                res.status(200).json({ message: 'User updated successfully', user: updatedUser });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
    }

    async deleteUser(req: Request, res: Response){
        try {
            const response = await this.userModel.deleteUser(parseInt(req.params.id));
            if (response) {
                res.status(204).json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    async getAllUsers(req: Request, res: Response) {
        try {
            const [users] = await this.userModel.getAllUsers();     
            res.status(200).json({ users: users, message: 'Users retrieved successfully' });

            
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    

}

export default UserController;
