// Put your code here yo!

baseUrl = "http://localhost:3000/"

recipesUrl = baseUrl + "recipes/"
const containerDiv = document.getElementById("container")

// Messing around with CSS: Struggling to get my webpage to change color As everything was built in JS basically..
// document.getElementById("containerDiv").style.background = "dark green" this stops all details from showing; function green(){document.body.style.background = "dark green";} Still trying to change my Webpage color nothing seems to change.
document.getElementById("review-box").style.border ='thin solid black';
document.getElementById("review-box").style.borderRadius = '5px';

function getFetch(){ //I forgot to declare the "function" keyword so it didn't work. But now it still doesn't. Because I forgot to CALL my fetch, AND a forward slash after my baseUrl.
    fetch(recipesUrl)
    .then((response) => response.json())
    .then((recipeData) => renderRecipes(recipeData))
}

getFetch()

//grab the json data and iterate each element/object for individual information.
function renderRecipes(recipeData){
recipeData.forEach((recipe) => renderRecipeDetails(recipe))
}

//Grab details that way we can create tags for our lists and render them on HTML. Had to reference another CC to see what exactly I should do next (literally only 1 second glance tho)
 //I guess I'll grab the details and create tags, then append value inside our tags?

function renderRecipeDetails(recipe){
    const ul = document.createElement("ul")
    const ol = document.createElement("ol")
    
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    //How did you get your images to work? I had to create an image tag, then I had to use that HTMLname.src to create a pathway to the image value (recipeImage).src =. Then access the image value by selecting our iterated data then bracket or dot notation to access the key "image" like so: recipe['image']. Then you need to append that HTML element with the image value to our div container.

    const recipeImage = document.createElement("img")


    //We created a h2 tag for our recipe name then, created a method to display the value and appended the h2 tag to our container div (master div) 
    h2.textContent = recipe["recipe-name"]
    containerDiv.appendChild(h2)

    h2.onmouseover = () => {
        h2.style.color = "red"
    }

    h2.onmouseout = () => {
        h2.style.color = "black"
    }
    
    containerDiv.appendChild(div)

      recipeImage.src = recipe["image"]
      div.appendChild(recipeImage)

//What are we doing here? Creating another div to append to our "master div", then we're creating li tags for our lists, so we're not seeing a line of string but actual bullets/steps. Once we create our li tags, we need to place a value inside our li, specifically each recipe should go with their own details. We can do this by iterating again. Then setting the li to textContent to display the value as text, then give the value of the iteration (i.e. steps to step, recipes to recipe, li.textContent = ingredient) then we need to append this li to our list so it will show up on our list!
    

    ul.textContent = "Ingredients:"
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li")
        li.textContent = ingredient
        ul.appendChild(li)
    })
    div.appendChild(ul)
    
    //repeat as above for ol
    ol.textContent = "Steps:"
    recipe["steps-to-make-recipe"].forEach(step =>{
        const liSteps = document.createElement("li")
        liSteps.textContent = step
        ol.appendChild(liSteps)
    })
    div.appendChild(ol)

    
    h2.onclick = function () {
        if (div.style.display !== "none") {
          div.style.display = "none";
        } else {
          div.style.display = "block";
        }
      }

}


// Submit form time!
const submitReview = document.getElementById("recipe-review")

submitReview.addEventListener("submit", (event) => {
    event.preventDefault()
    const recommendedName = document.getElementById("recipe-review-name")
    const recipeThoughts = document.getElementById("thoughts-on-recipe")
    const fullReview = document.createElement("div")
    fullReview.textContent = `"${recommendedName.value}"` + " " + recipeThoughts.value
    const reviewBox = document.getElementById("review-box")
    reviewBox.appendChild(fullReview)

})