import mongoose from "mongoose";

export const connectDb = async () =>{
  try{
    let dbstring = "";
    if(process.env.NODE_ENV === "development"){
      dbstring =process.env.MONGODB_LOCAL_URI!
    }
    
       if(process.env.NODE_ENV === "production"){
      dbstring =process.env.MONGODB_URI!
    }
    
    const dbResponse = await mongoose.connect(dbstring);
    console.log("database connect is sucess",dbResponse.connection.host);
  }catch(err){
    console.log("database connect fail",err)
    process.exit(1);
  }
}