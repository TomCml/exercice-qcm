import { Request, Response,  } from 'express';
import UserModel from '../models/UserModel';

class UserController {
    private userModel: UserModel;

    constructor(userModel: UserModel) {
        this.userModel = userModel;
    }

    async createAccount(req: Request, res: Response) {
        try {
            const { email } = req.body;
            
            const existingUser = await this.userModel.getUserByEmail(email);
            console.log("utilisateur existant:", existingUser)
    
            if (existingUser) {
                return res.status(409).json({ message: 'User already registered' });
            }
    
            const newUserId = await this.userModel.createUser(req.body);
            res.status(201).json({ message: 'User created', userId: newUserId });
    
        } catch (error) {
            const err = error as Error;
            console.error('Controller error:', err.message); 
            res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
    }
    
    

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

    async getUserByEmail(req: Request, res: Response) {
        try {
            console.log("getuserbyemail marche")

            const user = await this.userModel.getUserByEmail(req.body.email);
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

    async loginUser(req: Request, res: Response){

        const response = await this.userModel.deleteUser(parseInt(req.params.id));


    }

    

}

export default UserController;
