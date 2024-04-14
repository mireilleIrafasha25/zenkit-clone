
export const durationCalculator=(startDate,endDate)=>{
const duration=
{
    durationType:"",
    durationPeriod:0
}
var startDateasNumber= new Date(startDate).getTime();
var endDateasNumber= new Date(endDate).getTime();
var difference=startDateasNumber-endDateasNumber;
var onehour= 1000*60*60;
var numberOfHours=difference/onehour;
if (numberOfHours <1)
{
    let numberofMinutes=difference/1000*60;
    duration.durationType="Minutes";
    duration.durationPeriod=numberofMinutes;
}
else if (numberOfHours >=1 && numberOfHours <24)
{
duration.durationType="Hours";
duration.durationPeriod=numberOfHours
}
else if (numberOfHours>=24 && numberOfHours<168)
{
    duration.durationType="Days";
    duration.durationPeriod=numberOfHours/24;
}
return duration;
}