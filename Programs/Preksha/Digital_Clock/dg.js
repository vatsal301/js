function get_time() {
  let dt = new Date();
  let timeId = document.getElementById("time");
  let dateId = document.getElementById("date");

  let hs = dt.getHours();
  let ms = dt.getMinutes();
  let ss = dt.getSeconds();

  let dates = dt.getDate();
  let months = dt.getMonth() + 1;
  let years = dt.getFullYear();

  //console.log(timeId);

  if (hs <= 9) {
    hs = "0" + hs;
    //console.log(typeof hs);
  }

  if (ms <= 9) {
    ms = "0" + ms;
  }

  if (ss <= 9) {
    ss = "0" + ss;
  }
  timeId.innerText = hs + ":" + ms + ":" + ss;
  dateId.innerText = dates + "-" + months + "-" + years;
}

setInterval(get_time, 1000);
