// Get references to the input field, ingredient list, and recipe list
const ingredientInput = document.getElementById("ingredient");
const ingredientList = document.getElementById("ingredient-list");
const recipeList = document.getElementById("recipe-list");
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
function fetchRecipes() {
  const apiKey = "5ae04e38092e84803117d87ec2025d5e"; 
  const ingredientInput = document.getElementById("ingredient");
  const ingredientText = encodeURIComponent(ingredientInput.value.trim()); 
  const recipeList = document.getElementById("recipe-list"); 

  const apiUrl = `https://api.example.com/recipes?ingredients=${ingredientText}&apiKey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      recipeList.innerHTML = ""; // Clear previous recipe list
      data.recipes.forEach((recipe) => {
        const listItem = document.createElement("li");
        listItem.textContent = recipe.name;
        recipeList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
}

function fetchRecipes() {
  const apiKey = "5ae04e38092e84803117d87ec2025d5e"; 
  const ingredientInput = document.getElementById("ingredient");
  const ingredientText = encodeURIComponent(ingredientInput.value.trim()); 
  const recipeList = document.getElementById("recipe-list"); 

  const apiUrl = `https://api.example.com/recipes?ingredients=${ingredientText}&apiKey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      recipeList.innerHTML = ""; // Clear previous recipe list
      data.recipes.forEach((recipe) => {
        const listItem = document.createElement("li");
        listItem.textContent = recipe.name;
        recipeList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
}
