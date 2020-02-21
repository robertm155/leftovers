
  u("#clearBtn").on("click", function() {
    clearResults()
    
  })
  
  function clearResults() {
    u(".searchResult").empty();
  }
  
  function mealDB() {
      clearResults()
    var ingredient = document.querySelector("#ingredientSearch").value;
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + ingredient;
  
    axios.get(queryURL)
    .then(function (response){
  
      for(i = 0; i< response.data.meals.length; i++){
        // r= response
        var rTitle = response.data.meals[i].strMeal;
        var rImage = response.data.meals[i].strMealThumb;
        var rInstructions = response.data.meals[i].strInstructions;
        var rVideo = response.data.meals[i].strYoutube;
  
        var outputDiv = u("<div>").addClass("row output");

        var space = u("<div>").addClass("col s0 xl1");
        outputDiv.append(space)
        var recipePreview = u("<img>").attr("src", rImage).addClass("col s12 m4 l3 xl3");
        outputDiv.append(recipePreview)
      
        var textDiv = u("<div>").addClass("col m4 l4 xl4 text");
        var recipeTitle = u("<h5>").text(rTitle);
        textDiv.append(recipeTitle)
      
        var insturctions = u("<p>").text(rInstructions)
        
        textDiv.append(insturctions)
        outputDiv.append(textDiv)
      
        var URLcut = rVideo.substring(32);
        var embedURL = "https://www.youtube.com/embed/" + URLcut;
        console.log(URLcut)
        var videoURL = u("<iframe>").attr("src", embedURL).addClass("col m2 xl2 video");
        outputDiv.append(videoURL)
      
        u(".searchResult").append(outputDiv);
      }
  
    })
  }
  
  function cocktailDB() {
    clearResults()
    var ingredient = document.querySelector("#ingredientSearch").value;
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ingredient;
  
    axios.get(queryURL)
    .then(function(response){
  
      for (j = 0; j < response.data.drinks.length; j++){
        var rTitle = response.data.drinks[j].strDrink;
        var rImage = response.data.drinks[j].strDrinkThumb;
        var rDescription = response.data.drinks[j].strInstructions;
  
        var outputDiv = u("<div>").addClass("row output");

        var space = u("<div>").addClass("col s0 m2");
        outputDiv.append(space)
        var recipePreview = u("<img>").attr("src", rImage).addClass("col s12 m2");
        outputDiv.append(recipePreview)

        var textDiv = u("<div>").addClass("col m4 text");
        var recipeTitle = u("<h5>").text(rTitle);
        textDiv.append(recipeTitle)

        var insturctions = u("<p>").text(rDescription)
        
        textDiv.append(insturctions)
        outputDiv.append(textDiv)

        u(".searchResult").append(outputDiv);
      }
    })
  
  }