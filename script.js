var ingredient;

var ingredientList = [];


u("#searchButton").on("click", function (){
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
      //console.log(response.data.hits[i].recipe.label)

      var rLabel = response.data.hits[i].recipe.label;
      var rImage = response.data.hits[i].recipe.image;
      var rList = response.data.hits[i].recipe.ingredientLines;
      console.log(rList)
      
      var outputDiv = u(".searchResult").append("<div>");
      var recipeTitle = u("<h4>").text(rLabel);
      outputDiv.append(recipeTitle)

      var recipePreview = u("<img>").attr("src", rImage);
      recipePreview.attr("style", "width:150px;height:150px;")
      outputDiv.append(recipePreview)
      var ingredientTitle = u("<h4>Ingredient List</h4>");
      outputDiv.append(ingredientTitle);
      var ulIngredients = u("<ul>");
      //var sampleli = u("<li>ingredient 1</li>");
      //ulIngredients.append(sampleli);
      outputDiv.append(ulIngredients);

      for(j = 0; j < rList.length; j++) {
        var a = u("<li>");
        a.text(rList[j])
        ulIngredients.append(a)
        //outputDiv.append(ulIngredients)
      }
      
    }

  })

})


u("#clearBtn").on("click", function() {
  clearResults()
  
})

function clearResults() {
  u(".searchResult").empty();
}