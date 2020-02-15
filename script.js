var ingredient;

var ingredientList = [];


u("#null").on("click", function (){
  clearResults()

  //declares ingredient as user input//
  var ingredient = document.querySelector("#ingredientSearch").value;

  var queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=00be0051&app_key=e1c84d55d257f3237966c18638b794e2";
  console.log(ingredient)
  console.log(queryURL)


  //empty array//
  ingredientList = [];

  axios.get(queryURL)
  .then(function (response){
    console.log (response)

    for(i = 0; i< response.data.hits.length; i++){
      console.log(response.data.hits[i].recipe.label)

      var rLabel = response.data.hits[i].recipe.label;
      var rImage = response.data.hits[i].recipe.image;
      //var rList = response.data.hits[i].recipe.ingredientLines;
      
      var outputDiv = u(".searchResult").append("<div>");
      var recipeTitle = u("<h4>").text(rLabel);
      outputDiv.append(recipeTitle)

      var recipePreview = u("<img>").attr("src", rImage);
      recipePreview.attr("style", "width:150px;height:150px;")
      outputDiv.append(recipePreview)
    }


    //declaring array as ingredientLines//
    //ingredientList =rList;
    //console.log(ingredientList)

    // appending ingredient list to output div//
    //outputDiv.append("<h4>Ingredient List</h3>")
    //var ulIngredients = outputDiv.append("<ul>");

    //for loop to create li for each ingredient//
    //for(i = 0; i < ingredientList.length; i++) {
      //var a = u("<li>");
      //a.text(ingredientList[i])
      //console.log(ingredientList[i])
      //ulIngredients.append(a)
    //}
  })

})

u("#clearBtn").on("click", function() {
  clearResults()
  
})

function clearResults() {
  u(".searchResult").empty();
}

function something(){
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
var videourl = u("<iframe>").attr("src", "https://www.youtube.com/embed/-rdt5XNvPkc").addClass("recipe-video");
outputDiv.append(videourl)
}


u("#searchButton").on("click", function(){
[1,2,3].forEach(function(i) {
something();
//https://www.foodnetwork.com/recipes/giada-de-laurentiis/chicken-vesuvio-recipe-1916045
});
})