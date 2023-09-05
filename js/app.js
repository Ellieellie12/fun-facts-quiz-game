import { funFactsFish } from "./fun-facts.js"
import { funFactsOceans } from "./fun-facts.js"
import { funFactsBirds } from "./fun-facts.js"

console.log(funFactsOceans)
/*-------------------------------- Constants --------------------------------*/
const categoryChoices = ['ocean', 'birds', 'fish']
const currentCategoryFacts = []
console.log(currentCategoryFacts)
/*---------------------------- Variables (state) ----------------------------*/
let currentCategory, winner, score


/*------------------------ Cached Element References ------------------------*/
const oceanButton = document.getElementById('oceans')
// const birdsButton = document.getElementById('birds')
// const fishButton = document.getElementById('fish')

/*----------------------------- Event Listeners -----------------------------*/
// oceanButton.addEventListener('click', function (e) {
//    const funFact = prompt(funFactOceans)

// })
// oceanButton.addEventListener('click', createFunFactOcean)

oceanButton.addEventListener('click', createFunFactOcean)

// oceanButton.addEventListener('click', createFunFactOcean)

// document.getElementById('birds').addEventListener('onClick',play)
// document.getElementById('fish').addEventListener('onClick',play)

/*-------------------------------- Functions --------------------------------*/
function init() {
   winner = false
   score = 0
   render()
}


function createFunFactOcean() {
   // oceansimg.style.visibility = 'hidden'
   //hide images once button is clicked 

      currentCategoryFacts.push(funFactsOceans)
  
}

// funFactsOceans.push(newFunFact)

// funFactsOceans.push(newFunFact)
//then display one fun fact

//i have to push my funfacts into my empty array of currentcategpor fcats
function currentCategoryFact() {


}
function render() {
}












