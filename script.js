var ingredient;

var ingredientList = [];


u("#searchButton").on("click", function (){

  //declares ingredient as user input//
  var ingredient = document.querySelector("#ingredientSearch").value;

  var queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=d8c609a2&app_key=c21b71e7d78091b0a0e5c2efc3410557";
  console.log(ingredient)
  console.log(queryURL)


  //empty array//
  ingredientList = [];

  axios.get(queryURL)
  .then(function (response){
    console.log (response)

    //retrieve data from api//
    var rLabel = response.data.hits[0].recipe.label;
    var rImage = response.data.hits[0].recipe.image;
    var rList = response.data.hits[0].recipe.ingredientLines;

    //creating div to display api data//
    var outputDiv = u(".searchResult").append("<div>");

    var recipeTitle = u("<h4>").text(rLabel);
    outputDiv.append(recipeTitle)

    var recipePreview = u("<img>").attr("src", rImage);
    recipePreview.attr("style", "width:150px;height:150px;")
    outputDiv.append(recipePreview)



    //declaring array as ingredientLines//
    ingredientList =rList;
    console.log(ingredientList)

    // appending ingredient list to output div//
    outputDiv.append("<h4>Ingredient List</h3>")
    var ulIngredients = outputDiv.append("<ul>");

    //for loop to create li for each ingredient//
    for(i = 0; i < ingredientList.length; i++) {
      var a = u("<li>");
      a.text(ingredientList[i])
      console.log(ingredientList[i])
      ulIngredients.append(a)
    }
  })

})

u("#clearBtn").on("click", function() {
  clearResults()
  
})

function clearResults() {
  u(".searchResult").empty();
}
console.log(clearResults)
