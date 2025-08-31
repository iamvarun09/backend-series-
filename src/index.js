



import connectDB from "./db/index.js"
import dotenv from "dotenv";

dotenv.config(
{

  path:"./env"
}


);

( async()=>{
  try{
    await connectDB();
  }
  catch(error){
    console.log("error while connecting to db",error)
    throw error
  }
}

)();

connectDB().then(
  app.listen(
    process.env.PORT||8000,()=>{
      console.log(`process isnrunning on ${process.env.PORT||8000}`)
    }
  )
).catch((error)=>{
console.log(error)
})

/*
import express from "express"

const app=express()


(
   async ()=>{
      try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("app not able to talk",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is running on server ${process.env.PORT}`)
        })
      }
      
      catch(error){
        console.log(error)
        throw error
      }
       

   }

)()


*/
