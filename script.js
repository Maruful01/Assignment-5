//search meals by first letter
document.getElementById ("search-btn").addEventListener ('click', function (){
    function foodCollection (){
        const inputValue = document.getElementById("input").value;

       fetch('https://www.themealdb.com/api/json/v1/1/search.php?f='+inputValue+'')
       .then(response => response.json())
       .catch(err => alert ("Please first search your mil"))
       .then(data => {   

       displayFood (data);
    })
    function displayFood (data){
        const meal = data.meals[0];
        console.log (data)
        console.log (meal.strMeal)
    
        const foods = document.getElementById ("foods-container");
        const foodDiv = document.createElement ("div");
        foodDiv.className = "foods";

        const foodInfo = `
        <section onclick = "foodDetails ()">
        <img  class= "thumb" src="${meal.strMealThumb}" alt="" srcset="">
        <h1 class "meal-name"> ${meal.strMeal} </h1>
        </section>
        `;
        foodDiv.innerHTML = (foodInfo);
        foods.appendChild (foodDiv);
}


}  
foodCollection ()

})
// display details----
function foodDetails () {
    const inputValue = document.getElementById("input").value;
    document.getElementById ("foods-container").style.display = "none";
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f='+inputValue+'')
    .then(response => response.json())
    .catch(err => alert ("Please first search your mil"))
    .then(data => {   

        const meal = data.meals[0];
        const detailsDiv = document.getElementById ("details-div");
        const infoDiv = document.createElement ("div");
        infoDiv.className = "foods1";
        const mealInfo = `
        <img  class= "thumb-2" src="${meal.strMealThumb}" alt="" srcset="">
        <h1 id = "meal-info"> ${meal.strMeal}  <h1>
        <h4> Ingredients </h4>
         <div class= "paragraph">
        <p> <i class="fas fa-check-square"></i> ${meal.strMeasure1} ${meal.strIngredient1}</p>
        <p><i class="fas fa-check-square"></i> ${meal.strMeasure2} ${meal.strIngredient2} </p>
        <p><i class="fas fa-check-square"></i> ${meal.strMeasure3} ${meal.strIngredient3} </p>
        <p><i class="fas fa-check-square"></i> ${meal.strMeasure4} ${meal.strIngredient4}</p>
        <p><i class="fas fa-check-square"></i> ${meal.strMeasure5} ${meal.strIngredient5} </p>
        <p><i class="fas fa-check-square"></i> ${meal.strMeasure6} ${meal.strIngredient6} </p>
        </div>
        `;
        infoDiv.innerHTML = (mealInfo);
        detailsDiv.appendChild (infoDiv);
        
 })

}