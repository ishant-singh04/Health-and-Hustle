let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Simple validation for the example (you can add more validations later)
    if (name === "" || age === "" || email === "" || contact === "" || username === "" || password === "") {
        errorMessage.textContent = "All fields are required!";
    } else if (age < 18) {
        errorMessage.textContent = "You must be at least 18 years old to register.";
    } else {
        // For simplicity, let's log the entered data (In a real app, you would send this to a server)
        console.log("Registration successful!");
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Email: ${email}`);
        console.log(`Contact: ${contact}`);
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);

        errorMessage.textContent = "";
        alert("Registration successful!");

        // Redirect to a member area or another page
        window.location.href = "index.html"; // Replace with your desired page
    }




const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weight Lifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });