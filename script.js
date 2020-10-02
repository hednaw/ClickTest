var time = 10;
var clicks = 0;
var started = false;

function endTime() {
  document.getElementById("Timer").innerHTML = clicks / 10 + " CPS";
  document.getElementById("Counter").innerHTML = "";
  document.getElementById("Clicker").disabled = true;
}

function Clicked() {
  clicks += 1;
  console.log(clicks);
  document.getElementById("Counter").innerHTML = clicks;
  setInterval(endTime, 10000);
}

function Retry() {
  window.location.reload();
}
