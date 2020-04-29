var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function hexClock(){
    var time = new Date();
    var hours = (time.getHours() % 12).toString();  
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (hours.length < 2){
        hours = '0' + hours;
    }

    if (minutes.length < 2){
        minutes = '0' + hours;
    }

    if (seconds.length < 2){
        seconds = '0' + hours;
    }


    var clockstr = hours + ':' + minutes + '.' + seconds;
    var HexStr = '#' + hours + minutes + seconds;

    clock.textContent = clockstr;
    hexColor.textContent = HexStr;

    document.body.style.backgroundColor = HexStr
}
hexClock();
setInterval(hexClock, 1000);
