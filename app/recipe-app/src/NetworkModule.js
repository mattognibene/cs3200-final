const fetch = require('node-fetch');

const NetworkModule = {
    getRecipes: async(data={}) => {
        const response = await fetch("http://localhost:3001/recipe", {
            method: 'POST',
            body: JSON.stringify(data),
        });
        return response.json();
    },
}

export default NetworkModule