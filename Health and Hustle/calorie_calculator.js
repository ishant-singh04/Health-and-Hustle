document.getElementById("calorieForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const activityLevel = parseFloat(document.getElementById("activityLevel").value);
    const goal = document.getElementById("goal").value;

    const resultElement = document.getElementById("result");
    const tdeeElement = document.getElementById("tdee");
    const messageElement = document.getElementById("message");

    // Validate inputs
    if (isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
        messageElement.textContent = "Please fill out all fields correctly.";
        resultElement.style.display = "none";
        return;
    }

    // Calculate BMR using the Mifflin-St Jeor equation
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activityLevel;

    // Adjust calories based on goal
    let goalCalories;
    if (goal === "maintain") {
        goalCalories = tdee;
    } else if (goal === "lose") {
        goalCalories = tdee - 500;  // Subtract 500 for weight loss (approx 1 lb per week)
        messageElement.textContent = "To lose weight, you need a calorie deficit of 500 calories/day.";
    } else if (goal === "gain") {
        goalCalories = tdee + 500;  // Add 500 for weight gain (approx 1 lb per week)
        messageElement.textContent = "To gain weight, aim for a calorie surplus of 500 calories/day.";
    }

    // Display result
    resultElement.style.display = "block";
    tdeeElement.textContent = `Your estimated daily calories: ${Math.round(goalCalories)} calories.`;
});
