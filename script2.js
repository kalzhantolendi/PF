function signup() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;

    if (name === "" || surname === "" || email === "") {
        alert("Please enter all details!");
        return;
    }
    

    fetch("https://script.google.com/macros/s/AKfycbwOwpLt_NIWqkySIwOZHn66e-EZiWmLcWO3MdkPvwWr_M8eeJDtJ7YOj3PC9jNxqP1Szg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, surname: surname, email: email })
    }).then(response => {
        alert("User data saved!");
    }).catch(error => console.error("Error:", error));
}
