// Get references to the input field, ingredient list, and recipe list
const ingredientInput = document.getElementById("ingredient");
const ingredientList = document.getElementById("ingredient-list");
const recipeList = document.getElementById("recipe-list");

// Function to fetch recipes from the API based on ingredients
function fetchRecipes(ingredients) {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const baseUrl = 'https://api.example.com/recipes'; // Replace with the API endpoint

    // Build the API URL with the ingredients
    const apiUrl = `${baseUrl}?ingredients=${ingredients.join(',')}&apiKey=${apiKey}`;

    // Make a GET request to the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the data and display recipes
            displayRecipes(data.recipes);
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
        });
}

// Function to display recipes on the web page
function displayRecipes(recipes) {
    // Clear the previous recipes
    recipeList.innerHTML = '';

    // Loop through the recipes and create list items to display them
    recipes.forEach(recipe => {
        const listItem = document.createElement("li");
        listItem.textContent = recipe.name; // Replace with the appropriate property from your API data
        recipeList.appendChild(listItem);
    });
}

// Add an event listener to the "Add Ingredient" button
document.getElementById("add-ingredient").addEventListener("click", function () {
    const ingredientValue = ingredientInput.value.trim();

    if (ingredientValue !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = ingredientValue;
        ingredientList.appendChild(listItem);
        ingredientInput.value = "";

        // Get the list of all ingredients
        const ingredientsList = Array.from(document.querySelectorAll("#ingredient-list li"));
        const ingredientsArray = ingredientsList.map(item => item.textContent);

        // Call the fetchRecipes function with the ingredients list
        fetchRecipes(ingredientsArray);
    }
});