import { Router } from "express";
import userRouter from "./user.routes";
import postRouter from "./post.routes";
import courseRouter from "./course.routes";

const routes = Router();

 
routes.use('/users',userRouter);
routes.use('/posts',postRouter);
routes.use('/courses',courseRouter);

export default routes;