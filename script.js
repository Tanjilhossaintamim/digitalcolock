const hour=document.querySelector('.h');
const minute=document.querySelector('.m');
const second=document.querySelector('.s');
function clock(){
    let date=new Date();
    
    hour.innerHTML=date.getHours();
    minute.innerHTML=date.getMinutes();
    second.innerHTML=date.getSeconds();
    
}
setInterval(clock,1000)