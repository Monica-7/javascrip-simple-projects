const Days=document.querySelector("#Days")
const hours=document.querySelector("#hours")
const Minutes=document.querySelector("#Minutes")
const Seconds=document.querySelector("#Seconds")
 
 function UpdateTime(){
    const currentyear=new Date().getFullYear();

    const newYear=new Date(`January 1 ${currentyear+1} 00:00:00`);
    //console.log(newYear);
    const currentDate= new Date();
    //console.log(currentDate);
    const diff=newYear-currentDate;
    const d=Math.floor(diff/1000/60/60/24)
    //console.log(d);
    const h=Math.floor((diff/1000/60/60)%24);
    //console.log(h);
    const m=Math.floor((diff/1000/60)%60);
    //console.log(m);
    const s=Math.floor((diff/1000)%60);
    //console.log(s);
    Days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    Minutes.innerHTML=m<10?"0"+m:m;
    Seconds.innerHTML=s<10?"0"+s:s;
    
}
setInterval(UpdateTime,1000)