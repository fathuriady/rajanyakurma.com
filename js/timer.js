window.onload = function() {
  var min = 45;
  var sec = 60;
  setInterval(function() {
    document.getElementById("timer").innerHTML = min + " menit " + " : " + sec + " detik ";
    sec--;
    if (sec == 00) {
      min--;
      sec = 60;
      if (min == 0) {
        min = 2;
      }
    }
  }, 1000);
}