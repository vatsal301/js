// console.log("d.getDate(): ", d.getDate());
// console.log("d.getMonth(): ", d.getMonth() + 1);
// console.log("d.getDay(): ", d.getDay());
// console.log("d.getFullYear(): ", d.getFullYear());

// console.log("d.getHours(): ", d.getHours());
// console.log("d.getMinutes(): ", d.getMinutes());
// console.log("d.getSeconds(): ", d.getSeconds());

// console.log("timeID :", timeId);

// console.log("h m s", h, m, s);
// document.getElementById("time").innerText = "Enter the email";

// timeId.innerText = "tests";

function timeUpdate() {
  let d = new Date();
  //   console.log("d : ", d);
  let timeId = document.getElementById("time");
  console.log(timeId);
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
//   console.log("type of s is:", typeof s);
  if (s <= 9) {
    s = "0" + s; 
    // console.log("in if type of s is:", typeof s);
  }
  if (h <= 9) {
    h = "0" + h;
    // 0 + 1 = 1
  }
  if (m <= 9){
    m = "0" + m;
  }
  timeId.innerText = h + "-" + m + "-" + s;
}

setInterval(timeUpdate, 1000);
