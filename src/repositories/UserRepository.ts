import { SelectQuery } from "../database/queryUtils";
import { IUser } from "../models/User";


class UserRepository 
{

    getAll(){
        return SelectQuery<IUser>('SELECT * FROM users;');
    }
    
    getOne(id:number){ 
        const queryString = 'SELECT * FROM users WHERE id = ?;';
        return SelectQuery<IUser>(queryString,[id]);
       
    }
}

export default new UserRepository;
    