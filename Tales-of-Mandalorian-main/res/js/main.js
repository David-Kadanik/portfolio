var audio = document.getElementById('audio');
var playpausebtn = document.getElementById('playpausebtn');
var count = 0;

function playpause(){
    if(count == 0){
        count = 1;
        audio.play();
    }else{
        count = 0;
        audio.pause();
    }
}