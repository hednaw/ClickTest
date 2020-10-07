var time = 10;
var clicks = 0;

function StartTimer() {
  if (clicks == 1) {
    var everysec = setInterval(SubtractTime, 1000);
  } else {
    clearInterval(everysec);
  }
}

function endTime() {
  document.getElementById("Counter").innerHTML = "";
  document.getElementById("Clicker").remove();
}

function SubtractTime() {
  if (time != 0) {
    time = time - 1;
    document.getElementById("Timer").innerHTML = "Time: " + String(time);
  } else if (time == 0) {
    document.getElementById("Timer").innerHTML = clicks / 10 + " CPS";
    endTime();
  }
}

function Clicked() {
  clicks += 1;
  console.log(clicks);
  document.getElementById("Counter").innerHTML = clicks;
}

function Retry() {
  window.location.reload();
}
