import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    const { firstName, lastName, email, avatar, password } = req.body;
    try {
      const newUser = await User.create({ firstName, lastName, email, avatar, password });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await User.find()
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }

  public async getOneUser(req: Request, res: Response): Promise<void> {
    try {
      const {id} = req.params;
      const user = await User.findById({_id: id});
      if (!user) {
        res.status(404).json({ error: 'Użytkownik nie znaleziony' });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'server error' });
    }
  }


  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const {id} = req.params;
      const user = await User.findByIdAndDelete({_id: id});
      if (!user) {
        res.status(404).json({ error: 'Użytkownik nie znaleziony' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Wystąpił błąd serwera' });
    }
  }
}

export default new UserController();
