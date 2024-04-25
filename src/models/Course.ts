import { RowDataPacket } from "mysql2"

export default interface ICourse extends RowDataPacket {
    id:number;
    name:String;
    description:String;
    tags:String;
    images:{};
    url:String;
    course_director:number;
    school:number
}