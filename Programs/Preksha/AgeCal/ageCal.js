function click_kar(){
    let DOB = document.getElementById("dob").value;

    console.log(DOB); // 23-10-2002
    let dt = new Date(DOB); 
    console.log(dt); // dt.getFUllYear(); -- 2002
    let userBYear = dt.getFullYear();
    console.log(userBYear);
    //ALT + SHIFT + DOWN ARROW
    
    // console.log(dt.getFullYear());
    let current_age = 2023 - userBYear;
    console.log(current_age);
}