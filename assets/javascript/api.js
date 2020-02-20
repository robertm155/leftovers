
u("#clearBtn").on("click", function() {
  clearResults()
  
})

function clearResults() {
  u(".searchResult").empty();
}

function MealDB_Test(){
  var rLabel = document.querySelector("#ingredientSearch").value;
  var rImage = "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
  var rList;
  
  var outputDiv = u("<div>").addClass("row output");

  var space = u("<div>").addClass("col s0 xl1");
  outputDiv.append(space)
  var recipePreview = u("<img>").attr("src", rImage).addClass("col s12 m4 l3 xl3");
  outputDiv.append(recipePreview)

  var textDiv = u("<div>").addClass("col m4 l4 xl4 text");
  var recipeTitle = u("<h5>").text(rLabel);
  textDiv.append(recipeTitle)

  var instructions = u("<p>").text("Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.")
  
  textDiv.append(instructions)
  outputDiv.append(textDiv)

  var videourl = u("<iframe>").attr("src", "https://www.youtube.com/embed/1IszT_guI08").addClass("col m2 xl2 video");
  outputDiv.append(videourl)

  u(".searchResult").append(outputDiv);
}

function cocktailDB_test(){
  var rLabel = document.querySelector("#ingredientSearch").value;
  var rImage = "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg"
  
  var outputDiv = u("<div>").addClass("row output");

  var space = u("<div>").addClass("col s0 m2");
  outputDiv.append(space)
  var recipePreview = u("<img>").attr("src", rImage).addClass("col s12 m2");
  outputDiv.append(recipePreview)

  var textDiv = u("<div>").addClass("col m4 text");
  var recipeTitle = u("<h5>").text(rLabel);
  textDiv.append(recipeTitle)

  var instructions = u("<p>").text("Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.")
  
  textDiv.append(instructions)
  outputDiv.append(textDiv)

  u(".searchResult").append(outputDiv);
  
}

function mealDB(){
  [1,2,3].forEach(function(i) {
    MealDB_Test();
    });
}

function cocktailDB(){
  [1,2,3].forEach(function(i) {
    cocktailDB_test();
    });
}
