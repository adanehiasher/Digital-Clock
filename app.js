let hrs = document.getElementById("hrs");
let min = document.getElementById("mins");
let sec = document.getElementById("sec");



function getTime(){
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}

setInterval(getTime,1000)