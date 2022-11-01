const express=require("express");
 const dotenv = require("dotenv");
const employeeRouter=require("./router/employeeRouter");
const mongo=require("./connect");
dotenv.config();
mongo.connect();
const app =express();


app.use(express.json());
app.use("/",(req,res,next)=>{
    ///Authentication
    var auth={
        authorised:true,
        };
        if(auth.authorised){
        console.log("Authorised");
        next();
        }else{
        console.log("not Authorised");
        res.send({msg:"not authorised"})
        }
        
});
app.use("/employees", employeeRouter);

app.listen(process.env.PORT);




