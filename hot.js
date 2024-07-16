document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('hot-list');
    const getData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/coffee/hot');
        const data = await resp.json();
        displayDrinks(data);
        //output.textContent = JSON.stringify(data, null, 2);
      } catch (err) {
        output.textContent = err.message;
      }
    };
    
    const displayDrinks = (drinks) => {
        drinks.forEach(drink => {
          const drinkRow = document.createElement('div');
          drinkRow.className = 'drink-row col-md-12 d-flex';
    
          const drinkImage = document.createElement('img');
          drinkImage.src = drink.image;
          drinkImage.alt = drink.title;
          drinkImage.className = 'drink-image mr-1';
    
          const drinkDetails = document.createElement('div');
          drinkDetails.className = 'drink-details';
    
          const drinkTitle = document.createElement('h3');
          drinkTitle.textContent = drink.title;
    
          const drinkDescription = document.createElement('p');
          drinkDescription.textContent = drink.description;
    
          const drinkIngredients = document.createElement('p');
          drinkIngredients.textContent = `Ingredients: ${drink.ingredients.join(', ')}`;
    
          drinkDetails.appendChild(drinkTitle);
          drinkDetails.appendChild(drinkDescription);
          drinkDetails.appendChild(drinkIngredients);
    
          drinkRow.appendChild(drinkImage);
          drinkRow.appendChild(drinkDetails);
    
          output.appendChild(drinkRow);
        });
    };
    getData();
  });