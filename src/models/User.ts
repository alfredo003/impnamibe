import { RowDataPacket } from "mysql2";

enum access{
    'admin',
    'user'
}

export interface IUser  extends RowDataPacket{
    id:number;
    name:String;
    username:String;
    password:String;
    email:String;
    access_level:access;
    status:String;
    school:number
}