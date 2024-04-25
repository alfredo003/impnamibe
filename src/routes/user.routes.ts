import { Router,Request,Response } from "express"; 
import { BadRequestError } from '../helpers/api-erros'; 
import UserRepository from "../repositories/UserRepository";

const userRouter = Router();


userRouter.get('/', async(req:Request,res:Response)=>{ 
   try {
      const users = await UserRepository.getAll();
      res.status(200).json(users);
   } catch (error) {
    throw new BadRequestError("Internal server error"); 
   }
});

userRouter.get('/:id', async(req:Request,res:Response)=>{ 
   
   try {
      const userId = parseInt(req.params.id,10); 
      const [user] = await UserRepository.getOne(userId);
      res.status(200).json(user);
   } catch (error) {
      console.log(error);
    throw new BadRequestError("Internal server error"); 
   }
});


export default userRouter;