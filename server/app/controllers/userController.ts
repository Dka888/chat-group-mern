import { Request, Response } from 'express';
import User from '../models/User';


class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    const { firstName, lastName, email, avatar, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(400).json({ message: 'User already exists' });
      } else {
        const user = new User({ firstName, lastName, email, avatar, password});
        await user.save();
        res.status(201).json(user);
      }
    } catch (error) {
      res.status(500).json(error);
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

  public async loginUser(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body
    try {
      const user = await User.findOne({email, password});
      if(!user) {
        res.status(404);
      } else {
          res.status(200).json(user);
          console.log(user)
      }
    }catch(e){
      res.status(500).json(e);
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
