import { json } from "express";

const errorhandler=(err,req,res,next)=>
{
const errStatus= err.statusCode || 500;
const Errmessage= err.message || "Internal server error";
res.status(errStatus).json({
    success:false,
    status:errStatus,
    message:Errmessage,
    stack:process.env.NODE_ENV=="development" ? err.stack : {}
})
}
export default errorhandler;