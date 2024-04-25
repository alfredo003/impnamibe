import 'dotenv/config';
import mysql, { PoolOptions}  from 'mysql2/promise';


const access: PoolOptions ={
    host:process.env.HOST,
    user:process.env.USER,
    database:process.env.BD,
    password:process.env.PASS,
};

const connection = mysql.createPool(access);

export default connection;