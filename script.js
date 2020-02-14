var ingredient;

var ingredientList = [];


u("#searchButton").on("click", function (){
  clearResults()

  //declares ingredient as user input//
  var ingredient = document.querySelector("#ingredientSearch").value;
  
  var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + ingredient;
  console.log(ingredient)
  console.log(queryURL)


  //empty array//
  ingredientList = [];

  axios.get(queryURL)
  .then(function (response){
    console.log (response)

    for(i = 0; i< response.data.meals.length; i++){
      //mealDB api JSON reference
      var rLabel = response.data.meals[i].strMeal;
      var rImage = response.data.meals[i].strMealThumb;
      var rList = response.data.meals[i].strInstructions;
      var rVideo = response.data.meals[i].strYoutube;

      var outputDiv = u(".searchResult").append("<div>");
      var recipeTitle = u("<h4>").text(rLabel);
      outputDiv.append(recipeTitle)

      var recipePreview = u("<img>").attr("src", rImage);
      recipePreview.attr("style", "width:150px;height:150px;")
      outputDiv.append(recipePreview)

      var ingredientTitle = u("<h4>Instructions</h4>");
      outputDiv.append(ingredientTitle);
      //var ulIngredients = u("<ul>");
      var instructions = u("<p>").text(rList);
      outputDiv.append(instructions)

      //outputDiv.append(ulIngredients);

      var URLcut = rVideo.substring(24);
      var embedURL = "https://www.youtube.com/embed/" + URLcut;

      var videourl = u("<iframe>").attr("src", embedURL);
      outputDiv.append(videourl)
      
    }

  })

})


u("#clearBtn").on("click", function() {
  clearResults()
  
})

function clearResults() {
  u(".searchResult").empty();
}