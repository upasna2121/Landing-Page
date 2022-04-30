
const time=document.getElementById('time'),
greeting=document.getElementById('greeting'),
name=document.getElementById('name'),
 focus=document.getElementById('focus');
 showAmPm=true;
function showTime(){
        let today=new Date(),
        hour=today.getHours(),
        min=today.getMinutes(),
        sec=today.getSeconds();


const amPm = hour >=12 ? 'PM':'AM';

hour = hour % 12 || 12;
time.innerHTML=`${hour}<span>:</span> ${ addZero(min)}<span>:</span> ${addZero(sec)} ${showAmPm ? amPm :''}`;

 setTimeout(showTime, 1000);
}
function addZero(n){
        return (parseInt(n,10)<10?'0':'')+n;
}
function setbgGreet(){
        let today=new Date(),
        hour=today.getHours();
        if(hour<12){
                //morning
                document.body.style.backgroundImage="url('https://media.istockphoto.com/photos/fairy-pools-glen-brittle-isle-of-skye-scotland-uk-picture-id1161350279?b=1&k=20&m=1161350279&s=170667a&w=0&h=e6Y_cIv1jNU31tbqLXc4q_A77epy1vUybyYjwdNQUb0=')";
                greeting.textContent='Good Morning';
        }else if(hour<18){
                //afternoon
                document.body.style.backgroundImage="url('https://images.pling.com/img/00/00/50/43/77/1269118/c8805860993b936a835677c25e7bbc70ea5b.jpg')"
                greeting.textContent='Good Afternoon';
                document.body.style.color='white';
                
        }else{
                //evening
                document.body.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJvBIilPFIlkEhPpi6--TiYR_5CteYxvV3gJwWrGztT8kj3x9BEqc5f-XnX3klAb2QkQ&usqp=CAU')"
                greeting.textContent='Good Evening';
                document.body.style.color='white';
        }
}

function getName(){
        if(localStorage.getItem('name')===null){
         name.textContent='[Enter Name]';
        }else{}
}
showTime();
setbgGreet();