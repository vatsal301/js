function click_kar(){
    let DOB = document.getElementById("dob").value;

    // console.log(DOB);
    let dt =new Date(DOB);
    console.log(dt);
    let GetYear = dt.getFullYear();
    console.log(GetYear);
    //ALT + SHIFT + DOWN ARROW
    
    // console.log(dt.getFullYear());
    let current_age = 2023 - GetYear;
    console.log(current_age);
}