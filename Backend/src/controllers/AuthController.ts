import { Request, Response } from 'express';
import { User } from '../models/user';

export const storeUser = async (req: Request, res: Response) => {
  try {
    
    const { email } = req.body;
    return email;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ success: false, message: 'This email already registered with another account', payload: null });
    } else {
      // Continue with user registration logic
      res.json({ success: true, message: 'User registered successfully', payload: null });
    }
  } catch (error) {
    res.json({ success: false, message: 'Error occurred while storing the user', payload: null });
  }
};
