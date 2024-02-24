let time= document.querySelector(".time-body");
let stopbtn= document.querySelector(".btn1");
let startbtn= document.querySelector(".btn2");
let resetbtn= document.querySelector(".btn3");


let msec= 0;
let sec= 0;
let min=0;
let timerId= null;

startbtn.addEventListener('click', function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
          timerId=setInterval(startTimer,10);
});
stopbtn.addEventListener('click', function(){
   
     clearInterval(timerId);
        timerId=null;
 
});
resetbtn.addEventListener('click', function(){
    
    clearInterval(timerId);
    time.innerHTML="00 : 00 : 00";
    msec =sec=min=0;

});
function startTimer(){
    msec++;
    if(msec==100){
        msec=0;
        sec++;
    }
    if(sec==60){
        sec=0;
        min++;
    }

    let msecstring= msec<10 ? `0${msec}`: msec;
    let secstring= sec<10 ? `0${sec}`: sec;
    let minstring= min<10 ? `0${min}`: min;

    time.innerHTML=`${minstring} : ${secstring} : ${msecstring}`;
}