// MY ANSWER
function timeEachSecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(timeEachSecond, 1000);