
u("#searchButton").on("click", function (){
  clearResults()

  if (u("#thirst-filter").is(':checked')){
    cocktailDB()
  }else{
    mealDB()
  }

})


u("#clearBtn").on("click", function() {
  clearResults()
  
})

function clearResults() {
  u(".searchResult").empty();
}

function mealDB() {
  var ingredient = document.querySelector("#ingredientSearch").value;
  var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + ingredient;

  axios.get(queryURL)
  .then(function (response){

    for(i = 0; i< response.data.meals.length; i++){
      // r= response
      var rTitle = response.data.meals[i].strMeal;
      var rImage = response.data.meals[i].strMealThumb;
      var rDescription = response.data.meals[i].strInstructions;
      var rVideo = response.data.meals[i].strYoutube;

      var outputDiv = u(".searchResult").append("<div>");
      var recipeTitle = u("<h4>").text(rTitle).addClass("recipe-title");
      outputDiv.append(recipeTitle)

      var recipePreview = u("<img>").attr("src", rImage).addClass("img-thumbnail");
      recipePreview.attr("style", "width:150px;height:150px;")
      outputDiv.append(recipePreview)

      var instructionsTitle = u("<h5>Instructions</h5>").addClass("instructions-title");
      outputDiv.append(instructionsTitle);
      var instructions = u("<p>").text(rDescription).addClass("instructions");
      outputDiv.append(instructions)

      var URLcut = rVideo.substring(24);
      var embedURL = "https://www.youtube.com/embed/" + URLcut;
      var videourl = u("<iframe>").attr("src", embedURL).addClass("recipe-video");
      outputDiv.append(videourl) 
    }

  })
}

function cocktailDB() {
  var ingredient = document.querySelector("#ingredientSearch").value;
  queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ingredient;

  axios.get(queryURL)
  .then(function(response){

    for (j = 0; j < response.data.drinks.length; j++){
      var rTitle = response.data.drinks[j].strDrink;
      var rImage = response.data.drinks[j].strDrinkThumb;
      var rDescription = response.data.drinks[j].strInstructions;

      var outputDiv = u(".searchResult").append("<div>");
      var recipeTitle = u("<h4>").text(rTitle).addClass("recipe-title");
      outputDiv.append(recipeTitle)

      var recipePreview = u("<img>").attr("src", rImage);
      recipePreview.attr("style", "width:150px;height:150px;").addClass("img-thumbnail");
      outputDiv.append(recipePreview)

      var ingredientTitle = u("<h5>Instructions</h5>").addClass("instructions-title");
      outputDiv.append(ingredientTitle);
      var instructions = u("<p>").text(rDescription).addClass("instructions");
      outputDiv.append(instructions)
    }
  })

}