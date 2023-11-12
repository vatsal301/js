function validate() {
    let FirstName = document.getElementById('fname').value;
    let LastName = document.getElementById('lname').value;
    let Email = document.getElementById('email').value;
    let City = document.getElementById('city').value;
    let Password = document.getElementById('pwd').value;
    let selectClass = document.getElementById("selectV").value;
    console.log("selectClass", selectClass);

    //FIRSTNAME s
    if (FirstName == null || FirstName == '') {
        document.getElementById("fname_msg").innerText = "Enter the first name";
        setTimeout(() => {
            document.getElementById("fname_msg").innerText = "";

        }, 4000);
        // console.log("your FirstName - input is: ", FirstName); // in console
    }
    // console.log("your FirstName - input is: ", FirstName); // out console

    //LASTNAME 
    if (LastName == null || LastName == '') {
        document.getElementById("lname_msg").innerText = "Enter the last name";
        setTimeout(() => {
            document.getElementById("lname_msg").innerText = "";
        }, 4000);

        // console.log("your LastName - input is: ", LastName); // in console
    }
    // console.log("your LastName - input is: ", LastName); // out console

    //EMAIL
    if (Email == null || Email == '') {
        document.getElementById("email_msg").innerText = "Enter the email";
        setTimeout(() => {
            document.getElementById("email_msg").innerText = "";
        }, 4000);

        // console.log("your Email - input is: ", Email); // in console
    }
    // console.log("your Email - input is: ", Email); // out console

    //CITY
    if (City == null || City == '') {
        document.getElementById("city_msg").innerText = "Enter the city";
        setTimeout(() => {
            document.getElementById("city_msg").innerText = "";
        }, 4000);

        // console.log("your City - input is: ", City); // in console
    }
    // console.log("your City - input is: ", City); // out console

    //PASSWORD
    if (Password == null || Password == '') {
        document.getElementById("pswd_msg").innerText = "Enter the password";
        setTimeout(() => {
            document.getElementById("pswd_msg").innerText = "";
        }, 4000);

        // console.log("your Password - input is: ", Password); // in console
    } else {
        if (Password.length < 8) {
            // console.log("2 if is check");
            document.getElementById("pswd_msg").innerText = "Length must be > 8";
        }
    }

    //       0 < 8
    // console.log("your Password - input is: ", Password); // out console

    //SELECT
    if (selectClass == "notuse") {
        // document.getElementById("selectMsg").innerText = "<h1> Select Other Class </h1>";
        document.getElementById("selectMsg").innerHTML = "<h1> Select Other Class </h1> <p> hello p tag </p>"
        // setTimeout(() => {
        //     document.getElementById("selectMsg").innerText = "";
        // }, 4000);
    }


}

// sdkfjslkdfjacsfdakjsf

/*
    if -> true
    if -> true 
*/