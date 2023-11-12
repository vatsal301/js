
function check() {
    let input = document.getElementById('inputCity').value;
    if (input == null || input == '') {
        // alert("Enter City");
        document.getElementById("message").innerText = "Enter the name of city";
        // setTimeout(() => { console.log("hello") }, 5000);
        

        setTimeout(() => {
            document.getElementById("message").innerText = "";
        }, 5000);

        // setTimeout(update, 5000);
    }
    console.log("your input is: ", input);
}

function update() {
    // alert("update fun is run");
    // console.log(" fun run");
    document.getElementById("message").innerText = "";
}