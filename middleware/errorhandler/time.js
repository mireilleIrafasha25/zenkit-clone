import { durationCalculator } from "../../utils/helperFunction.js";

export const setTime=async(req,res,next)=>{
    
    var startDate=new Date(req.body.startDate).toLocaleDateString();
    var endDate=new Date(req.body.endDate).toLocaleDateString();
      var startTime=new Date(req.body.startDate.slice(0,-1)).toLocaleTimeString();
      var endTime=new Date(req.body.endDate.slice(0,-1)).toLocaleTimeString();
     
      if(req.body.startDate){
          req.body.startTime=startTime;
          req.body.startDate=startDate; 
      }
      if(req.body.endDate){
          req.body.endTime=endTime;
          req.body.endDate=endDate;
      }
      const duration=durationCalculator(req.body.startDate,req.body.endDate)
      req.body.durationType=duration.durationType;
     req.body.duration=duration.durationPeriod;
     next();
    }
      
  