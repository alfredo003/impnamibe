import connection from "./database/data-source";
import app from "./app";


connection.getConnection().then((result)=>{
   app.listen(3000,()=>console.log("Server running!"));
}).catch((error)=>{
    console.log(error);
})

