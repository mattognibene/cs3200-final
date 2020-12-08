const fetch = require('node-fetch');

const NetworkModule = {
    getRecipesCanMake: async(data={}) => {
        const response = await fetch("http://localhost:3001/recipes/canmake", {
            method: 'POST',
            body: JSON.stringify(data),
        });
        return response.json();
    },

    getRecipesHaveIngredients: async(data={}) => {
        const response = await fetch("http://localhost:3001/recipes/haveingredients", {
            method: 'POST',
            body: JSON.stringify(data),
        });
        return response.json();
    },

    getRecipeIngredients: async(recipeId={}) => {
        const response = await fetch("http://localhost:3001/recipe/ingredients?recipeId=" + recipeId.toString(), {
            method: 'GET'
        });
        return response.json();
    },

    getRecipeTags: async(recipeId={}) => {
        const response = await fetch("http://localhost:3001/recipe/tags?recipeId=" + recipeId.toString(), {
            method: 'GET'
        });
        return response.json();
    },

    getRecipeSteps: async(recipeId={}) => {
        const response = await fetch("http://localhost:3001/recipe/steps?recipeId=" + recipeId.toString(), {
            method: 'GET'
        });
        return response.json();
    },

    getNutritionFacts: async(recipeId={}) => {
        const response = await fetch("http://localhost:3001/recipe/nutrition?recipeId=" + recipeId.toString(), {
            method: 'GET'
        });
        return response.json();
    },

}

export default NetworkModule