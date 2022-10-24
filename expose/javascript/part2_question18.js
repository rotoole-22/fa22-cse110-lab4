let interval = setInterval(currentTime, 1000);

function currentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}