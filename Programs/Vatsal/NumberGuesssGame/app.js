const btn = document.getElementById("button");

// onclick="fun()"
btn.addEventListener("click", fun);

function fun() {
  let user1 = document.getElementById("user1").value;
  let user2 = document.getElementById("user2").value;
  let user1Choice;
  console.log("user 1 :", user1);
  console.log("user 2 :", user2);
  let genNumber = Math.floor(Math.random() * 100);
  console.log("genNumber is: ", genNumber);

  alert(user1 + " your game is started");
  do {
    user1Choice = prompt("Gusse the number");
    if (user1Choice > genNumber) {
      alert("Enter Lowernumber pls");
    } else if (user1Choice < genNumber) {
      alert("Enter Higer Number pls");
    } else {
      alert("YOU can fined");
    }
    console.log("user1Choice", user1Choice);
  } while (!(user1Choice == genNumber));
}
// !(82 == 82) true // false
// !(81 == 82) false // true

// (82 != 82) true // false
// (81 != 82) false // true

// (undefined != 4) true
// (undefined == 4) false
