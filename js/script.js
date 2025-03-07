const recipes = [];

//Declared index of the recipe to be edited
var indexOfRecipeToBeEdited = -1
// Declared a flag to set the edit mode
var isEditMode = false

// Update a recipe when the "Add Recipe" button is clicked
// If the recipe is new, then add the recipe to the recipes array 
// Use addRecipes() function to add the new recipe
// Else edit the recipe in the recipes array
// Clear the form's input fields using the clearInputFields() function
// Finally, display the recipes using the displayRecipes() function

document.getElementById('add-recipe-btn').addEventListener('click', function () {
    // Code for task 1
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById("ingredients").value;
    const instructions = document.getElementById('instructions').value;
    console.log(title, ingredients, instructions)
    if (!isEditMode) {
        addRecipe({ title, ingredients, instructions });
    }
    else {
        editRecipeDetails({ title, ingredients, instructions})
        isEditMode = false
    }
    displayRecipes();
    clearInputFields();
});

function editRecipeDetails(recipe) {
    const {title, ingredients, instructions} = recipe
    recipes[indexOfRecipeToBeEdited].title = title;
    recipes[indexOfRecipeToBeEdited].ingredients = ingredients;
    recipes[indexOfRecipeToBeEdited].instructions = instructions;
}

// Clear the form's input fields
function clearInputFields() {
    // Code for task 2
    document.getElementById('title').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}

// Add the new recipe to the recipes array
function addRecipe(recipe) {
    // Code for task 3
    const { title, ingredients, instructions } = recipe;
    if (title && ingredients && instructions) {
        isEditMode = false
        recipes.push(recipe);
        // displayRecipes();
    }
}


// Display Recipes
function displayRecipes() {
    // Code for task 4
    const recipeList = document.getElementById('recipes');
    recipeList.innerHTML = '';

    for (index = 0; index < recipes.length; index++) {

        recipeList.innerHTML += `
        <ul>
        <h3 id = "tit"> ${recipes[index].title}</h3>
        <p> <b id="ing"> Ingredients: </b> ${recipes[index].ingredients}</p>
        <p> <b id="ins"> Instructions: </b> ${recipes[index].instructions}</p>
        <button id='editMode' onclick = 'editRecipe(${index})' > Edit </button> 
        <button onclick="deleteRecipe(${index})"> Delete </button>
        </ul>
        `
    }

}

// Edit the recipe object when the Edit button is clicked
function editRecipe(index) {
    // Code for task 5
    isEditMode = true
    document.getElementById('title').value = recipes[index].title;
    document.getElementById('ingredients').value = recipes[index].ingredients;
    document.getElementById('instructions').value = recipes[index].instructions;
    indexOfRecipeToBeEdited = index
    console.log(isEditMode);
}


// Delete the recipe object when the Delete button is clicked
function deleteRecipe(index) {
    if (index >= 0 && index < recipes.length) {
        recipes.splice(index, 1); // Remove 1 element at the specified index
        displayRecipes();
        console.log(recipes)
        clearInputFields();
        isEditMode = false;     
        
    }
}