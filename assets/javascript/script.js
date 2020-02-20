u("#mode").on("click", function(){
    if(u("#mode").text() == "Dark Mode"){
        u("#mode").text("Light Mode");
        //document.querySelector("p").style.color="white";
        document.querySelector("body").style.background = "rgb(32, 32, 32)";
    }else{
        u("#mode").text("Dark Mode");
        document.querySelector("body").style.background = "white";
    }
    
})

u("#mealDB").on("click", function(){
    u("#searchButton").attr("onclick", "mealDB()")
    document.querySelector(".recipe-select").style.display="none";
    document.querySelector(".recipe-select-mobile").style.display="none";
    document.querySelector(".aOb").style.display="none";
    document.querySelector(".searchForm").style.display="block";
})

u("#coctailDB").on("click", function(){
    u("#searchButton").attr("onclick", "cocktailDB()")
    document.querySelector(".recipe-select").style.display="none";
    document.querySelector(".recipe-select-mobile").style.display="none";
    document.querySelector(".aOb").style.display="none";
    document.querySelector(".searchForm").style.display="block";
})