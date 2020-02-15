
u("#null").on("click", function (){
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

function MealDB_Test(){
  var rLabel = document.querySelector("#ingredientSearch").value;
  var rImage = "https://images.media-allrecipes.com/userphotos/6858360.jpg"
  var rList;
  
  var outputDiv = u(".searchResult").append("<div>");
  var recipeTitle = u("<h4>").text(rLabel).addClass("recipe-title");
  outputDiv.append(recipeTitle)

  var recipePreview = u("<img>").attr("src", rImage).addClass("img-thumbnail");
  recipePreview.attr("style", "width:150px;height:150px;")
  outputDiv.append(recipePreview)

  var insturctionsTitle = u("<h5>Ingredient List</h5>").addClass("instructions-title");

  outputDiv.append(insturctionsTitle);
  var insturctions = u("<p>").addClass("instructions").text("Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.")
  outputDiv.append(insturctions)

  var videourl = u("<iframe>").attr("src", "https://www.youtube.com/embed/watch?v=ukUAtDJ-JVY").addClass("recipe-video");
  outputDiv.append(videourl)
}


u("#searchButton").on("click", function(){
  clearResults()

  if (u("#thirst-filter").is(':checked')){
    [1,2,3].forEach(function(i) {
      cocktailDB_test();
      });
  }else{
    [1,2,3].forEach(function(i) {
      MealDB_Test();
      });
  }

})

function cocktailDB_test(){
  var rLabel = document.querySelector("#ingredientSearch").value;
  var rImage = "https://mixthatdrink.com/wp-content/uploads/2009/02/margarita-3-735x735.jpg"
  var rList;
  
  var outputDiv = u(".searchResult").append("<div>");
  var recipeTitle = u("<h4>").text(rLabel).addClass("c-recipe-title");
  outputDiv.append(recipeTitle)

  var recipePreview = u("<img>").attr("src", rImage).addClass("c-img-thumbnail");
  recipePreview.attr("style", "width:150px;height:150px;")
  outputDiv.append(recipePreview)

  var insturctionsTitle = u("<h5>Ingredient List</h5>").addClass("c-instructions-title");

  outputDiv.append(insturctionsTitle);
  var instructions1 = u("<p>");
  instructions1.addClass("c-instructions").text("Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.");
  outputDiv.append(instructions1);
  
}