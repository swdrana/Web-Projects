import { useEffect, useState } from "react";

function CountdownTimer(){


   const [expiryTime, setExpiryTime] = useState("20 sep 2023 00:30:25");
   const [countdownTime, setCountdownTime]= useState(
       {
           countdownDays:'',
           countdownHours:'',
           countdownlMinutes:'',
           countdownSeconds:''
       }
   );

    const countdownTimer=()=>{
    
        const timeInterval= setInterval(() => {

          const countdownDateTime = new Date(expiryTime).getTime(); 
          const currentTime = new Date().getTime();
          const remainingDayTime = countdownDateTime - currentTime;
          const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
          const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
          const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
     
          const runningCountdownTime={
             countdownDays: totalDays,
             countdownHours: totalHours,
             countdownMinutes: totalMinutes,
             countdownSeconds: totalSeconds
          }
       
          setCountdownTime(runningCountdownTime);
     
          if (remainingDayTime < 0) {
             clearInterval(timeInterval);
             setExpiryTime(false);
            }
     
         }, 1000);
    }
     
    useEffect(() => {
        // countdownTimer();
    });
   
    return(
        <div className="">
            <div className="flex my-3">
            {expiryTime!==false?
                <div className=" flex justify-center gap-4">
                  
                  <div className="flex flex-col border border-dotted border-secondary rounded-md h-12 w-12 justify-center items-center">
                    <p className="text-[20px] -mb-2 font-bold">{countdownTime.countdownDays}</p>
                    <p className="text-[12px]">Days</p>
                  </div>

                  <div className="flex flex-col border border-dotted border-secondary rounded-md h-12 w-12 justify-center items-center">
                    <p className="text-[20px] -mb-2 font-bold">{countdownTime.countdownHours}</p>
                    <p className="text-[12px]">Hours</p>
                  </div>

                  <div className="flex flex-col border border-dotted border-secondary rounded-md h-12 w-12 justify-center items-center">
                    <p className="text-[20px] -mb-2 font-bold">{countdownTime.countdownMinutes}</p>
                    <p className="text-[12px]">Min</p>
                  </div>

                  <div className="flex flex-col border border-dotted border-secondary rounded-md h-12 w-12 justify-center items-center">
                    <p className="text-[20px] -mb-2 font-bold">{countdownTime.countdownSeconds}</p>
                    <p className="text-[12px]">Sec</p>
                  </div>
                </div>
                :<p>Deal has been Expired</p>}
         </div>
            </div>
    )

}
export default CountdownTimer;