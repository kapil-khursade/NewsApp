/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

// Saving the user data and attaching it to local database

let userSignUp=()=>{

    let userObj = {
        name: document.getElementById("name").value,
        image: document.getElementById("image").value,
        email: document.getElementById("email").value,
        country: document.getElementById("country").value,
        };
   localStorage.setItem("user", JSON.stringify(userObj));
}