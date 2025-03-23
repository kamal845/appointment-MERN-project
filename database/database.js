const mongoose=require('mongoose');
require('dotenv').config();
const connectionURL = process.env.mongodbURL;
const databaseConnect= async()=>{
    try {
       await mongoose.connect(connectionURL,{
            // useNewUrlParser:true,
            // useUnifiedTopology:true
            });
            console.log("database is connected");
    } catch (error) {
        console.log("error");
    }
    }
    module.exports=databaseConnect;