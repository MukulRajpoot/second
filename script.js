let enddate = document.querySelector(".enddate");
let input = document.querySelectorAll(".inputbox");
let newdate = document.querySelector("h2");
enddate.innerText = "26 June 2024 5:00 PM"

let fun = () => {
    let date = new Date();
    let actdate = date.toLocaleDateString();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();
    newdate.innerText = `Date-${actdate}`
    input[0].value = hours;
    input[1].value = minute;
    input[2].value = sec;
    let dif = (new Date(enddate.innerText) - date) / 1000;
    let days = Math.floor(dif / 86400);
    let hour = Math.floor((dif % 86400) / 3600)
    let mins = (((dif % 86400) % 3600) / 60);
    let min = Math.floor(mins);
    let second = Math.floor((((dif % 86400) % 3600) % 60));
    console.log(second);
    input[3].value = days;
    input[4].value = hour;
    input[5].value = min;
    input[6].value = second;
}
setInterval(fun, 1000);
