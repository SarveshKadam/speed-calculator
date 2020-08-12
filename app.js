var dist, time ;

document.querySelector('.btn').addEventListener('click',function(){
    dist = document.querySelector('.dist-input').value;
    time = document.querySelector('.time-input').value;
    var finalspeed;
    if(dist && time){
    if(time > 0){
        finalspeed = (dist/time).toFixed(2);
        
        document.querySelector('.speed-value').textContent = finalspeed;
    }else {
        alert('Please enter valid time greater than 0');
        document.querySelector('.time-input').value= "";
    }}else{
        alert('Please enter distance and time!');
        document.querySelector('.dist-input').value.toggle="";
        document.querySelector('.time-input').value.toggle ="";
    }
    
})