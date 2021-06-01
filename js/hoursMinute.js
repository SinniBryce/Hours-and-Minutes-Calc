var hr1 = document.getElementById('hrOne');
var hr2 = document.getElementById('hrTwo');
var hr3 = document.getElementById('hrThree');
var hr4 = document.getElementById('hrFour');

var min1 = document.getElementById('minOne');
var min2 = document.getElementById('minTwo');
var min3 = document.getElementById('minThree');
var min4 = document.getElementById('minFour');

var addsum = document.getElementById('addSum');

hr1.addEventListener('input', divide);
hr2.addEventListener('input', divide);
hr3.addEventListener('input', divide);
hr4.addEventListener('input', divide); 

min1.addEventListener('input', divide);
min2.addEventListener('input', divide);
min3.addEventListener('input', divide);
min4.addEventListener('input', divide);




function add() { /*get hours and multiply by 60*/
    var one = parseFloat(hr1.value) || 0;
    var two = parseFloat(hr2.value) || 0;
    var three = parseFloat(hr3.value) || 0;
    var four = parseFloat(hr4.value) || 0;
    var five = parseFloat(hr5.value) || 0;
    var six = parseFloat(hr6.value) || 0;
    

    var multiplyhr = (one+two+three+four+five+six)*60;
    return multiplyhr;
    /*addsum.innerText = multiplyhr;*/
}

function divide() { /*retrieves minutes, then converts to 00:00*/
    var uno = parseFloat(min1.value) || 0;
    var dos = parseFloat(min2.value) || 0;
    var tres = parseFloat(min3.value) || 0;
    var cuatro = parseFloat(min4.value) || 0;
    var cinco = parseFloat(min5.value) || 0;
    var seis = parseFloat(min6.value) || 0;

    var divided = (uno+dos+tres+cuatro+cinco+seis) + add(); 

    var hours = (divided/60);
    var roundhours = Math.floor(hours);
    var minutes = (hours - roundhours) * 60;
    var roundminutes = Math.round(minutes);



    addsum.innerText = roundhours + " hour(s) and " + roundminutes + " minute(s).";

}



