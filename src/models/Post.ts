import { RowDataPacket } from "mysql2"

export default interface IPost extends RowDataPacket {
     id:number;
     title:String;
     content:String;
     images:{};
     category:String;
     url:String;
     author:number;
     
}