document.addEventListener('DOMContentLoaded', () => {
    const recipeContainer = document.getElementById('recipe-container');

    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            const recipes = data.recipes; 

            recipes.forEach(recipe => {
                const card = document.createElement('div');
                card.className = 'card';

                const image = document.createElement('img');
                image.src = recipe.image;
                image.alt = recipe.name;

                const title = document.createElement('h3');
                title.textContent = recipe.name;

                const cuisine = document.createElement('p');
                cuisine.textContent = `Cuisine: ${recipe.cuisine}`;

                const difficulty = document.createElement('p');
                difficulty.textContent = `Difficulty: ${recipe.difficulty}`;

                const servings = document.createElement('p');
                servings.textContent = `Servings: ${recipe.servings}`;

                const rating = document.createElement('p');
                rating.textContent = `Rating: ${recipe.rating} (${recipe.reviewCount} reviews)`;

                const calories = document.createElement('p');
                calories.textContent = `Calories: ${recipe.caloriesPerServing} per serving`;

                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(cuisine);
                card.appendChild(difficulty);
                card.appendChild(servings);
                card.appendChild(rating);
                card.appendChild(calories);

                recipeContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
