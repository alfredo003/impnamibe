import { ResultSetHeader } from "mysql2";
import connection from "./data-source";

export async function SelectQuery<T>(queryString:string,params?:any[]):Promise<Partial<T[]>> {
    const [results] = await connection.execute(queryString,params);
    return results as T[];
}

export async function ModifyQuery(queryString:string,params?:any[]):Promise<ResultSetHeader> {
    const [results] = await connection.execute(queryString,params);
    return results as ResultSetHeader;
}