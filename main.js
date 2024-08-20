let hr = document.querySelector('#hour');
let min = document.querySelector('#minute');
let sec = document.querySelector('#second');

function displayTime (){
    let date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = 60*hour + minutes/2;
    let minutesRotation = 6 * minutes;
    let secondsRotation = 6 * seconds;


    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minutesRotation}deg)`;
    sec.style.transform = `rotate(${secondsRotation}deg)`;

}

setInterval(displayTime, 1000);