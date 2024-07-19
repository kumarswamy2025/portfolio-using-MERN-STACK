import mongoose from "mongoose";


export async function dbConnection(){
  try{
      await  mongoose.connect(process.env.MONGO_URI);
      console.log('DB connection is established successfully....');


  }
  catch(error){
      console.log(`error at config=>connection.js=>${error}`);

  }
}



