function fetchRecipes() {
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    const ingredientInput = document.getElementById("ingredient");
    const ingredientText = encodeURIComponent(ingredientInput.value.trim()); // Get the ingredient text from the input field
    const recipeList = document.getElementById("recipe-list"); // Assuming your HTML structure matches the provided HTML

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
