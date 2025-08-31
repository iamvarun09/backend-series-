
//const asynchandler=()=>{}



export {asynchandler}


const asynchandler=(fn)=>async(req,res,next)=>{
    try{
           await fn(req,res,next)
    }
    catch(error){
        res.status(err.code||5000).json({
            sucess:false,
            message:err.message

        })
    }
}