function validate(){
    let FirstName = document.getElementById('fname').value;
    let LastName = document.getElementById('lname').value;
    let Email = document.getElementById('email').value;
    let City = document.getElementById('city').value;
    let Password = document.getElementById('pwd').value;
    let State = document.getElementById('state').value;

    //FIRSTNAME
    if (FirstName == null || FirstName == '') {
        document.getElementById("fname_msg").innerText = "Enter the first name";
        setTimeout(() => {
            document.getElementById("fname_msg").innerText = "";

        }, 4000);
    }
    console.log("your input is: ", FirstName);

    //LASTNAME 
    if(LastName == null || LastName == ''){
        document.getElementById("lname_msg").innerText = "Enter the last name";
        setTimeout(() => {
            document.getElementById("lname_msg").innerText = "";
        },4000);

    }
    console.log("your input is: ", LastName);

    //EMAIL
    if(Email == null || Email == ''){
        document.getElementById("email_msg").innerText = "Enter the email";
        setTimeout(() => {
            document.getElementById("email_msg").innerText = "";
        },4000);

    }
    console.log("your input is: ", Email);

    //CITY
    if(City == null || City == ''){
        document.getElementById("city_msg").innerText = "Enter the city";
        setTimeout(() => {
            document.getElementById("city_msg").innerText = "";
        },4000);

    }
    console.log("your input is: ", City);

    //PASSWORD
    if(Password == null || Password == ''){
        document.getElementById("pswd_msg").innerText = "Enter the password";
        setTimeout(() => {
            document.getElementById("pswd_msg").innerText = "";
        },4000);

        console.log("your input is: ", Password);
    }
    else{
        if(Password.length < 8){
            document.getElementById("pswd_msg").innerText="Length must be greater then 8";
            setTimeout(() => {
                document.getElementById("pswd_msg").innerText = "";
            },4000);
        }
        console.log(Password); 
    }

    //State
    if(State=="notuse"){
        document.getElementById("state_msg").innerText ="Select State";
        setTimeout(()=>{
           document.getElementById("state_msg").innerText=""; 
        },4000);
    }
    console.log(State);

}

function clear(){
    document.getElementById("fname_msg").value = "";
    document.getElementById("lname_msg").value = "";
    document.getElementById("email_msg").value = "";
    document.getElementById("city_msg").value = "";
    document.getElementById("pswd_msg").value = "";

}