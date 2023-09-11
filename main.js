const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


var now = new Date();
var milliseconds = now.getTime()
const day = weekday[now.getDay()]
document.getElementById("time").innerHTML = milliseconds
document.getElementById("day").innerHTML = day


let clock = document.getElementById("clock");

setInterval(() => {
  let d = new Date();
  clock.innerHTML = d.toLocaleTimeString();
}, 1000)