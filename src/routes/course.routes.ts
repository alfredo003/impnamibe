import { Router,Request,Response } from "express"; 
import { BadRequestError } from '../helpers/api-erros'; 

const courseRouter = Router();


courseRouter.get('/', (req:Request,res:Response)=>{ 
 
});



export default courseRouter;