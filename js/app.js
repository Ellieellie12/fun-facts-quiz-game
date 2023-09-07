import { funFactsFish } from "./fun-facts.js"
import { funFactsOceans } from "./fun-facts.js"
import { funFactsBirds } from "./fun-facts.js"

console.log(funFactsOceans)
/*-------------------------------- Constants --------------------------------*/
const categoryChoices = ['ocean', 'birds', 'fish']
const currentCategoryFacts = []
const currentCategoryIndex = 0
/*---------------------------- Variables (state) ----------------------------*/
let currentCategory, winner, score, randomIndex


/*------------------------ Cached Element References ------------------------*/
const oceanButton = document.getElementById('oceans')
// const birdsButton = document.getElementById('birds')
// const fishButton = document.getElementById('fish')
const messageResult = document.getElementById('messageEl')
const trueButton = document.getElementById('trueocean')
const falseButton = document.getElementById('falseocean')
const oceanImage = document.getElementById('oceansimg')
// const nextFactDiv = document.getElementById('factEl')
/*----------------------------- Event Listeners -----------------------------*/
// oceanButton.addEventListener('click', function (e) {
//    const funFact = prompt(funFactOceans)


oceanButton.addEventListener('click', createFunFactOcean)

// document.getElementById('birds').addEventListener('onClick',play)
// document.getElementById('fish').addEventListener('onClick',play)
document.getElementById('trueocean').addEventListener('click', nextQuestion)

oceanImage.addEventListener('click', function (evt) {

})
/*-------------------------------- Functions --------------------------------*/
function init() {
   winner = false
   score = 0
   nextQuestion()
   render()
}


function createFunFactOcean() {
   oceansimg.style.visibility = 'hidden'
   const fact = funFactsOceans[0]
   currentCategoryFacts.push(fact)
   messageResult.innerHTML = currentCategoryFacts[0].fact
   trueocean.style.display = 'block'
   falseocean.style.display = 'block'

}

// function trueButton (){

// }

// function nextQuestion() {
//    if(currentCategoryIndex >= funFactsOceans.length) {
//       nextFactDiv.innerHTML = 'No More Facts'
//    } else {
//       const newFact = funFactsOceans[currentCategoryIndex]
//       nextFactDiv.innerHTML = currentCategoryFacts.fact
//       currentCategoryIndex++
//    }
// }

// function nextQuestion() {
//    if(currentCategoryIndex < funFactsOceans.length) {
//       const currentFact = funFactsOceans[currentCategoryIndex]
//       messageResult.innerHTML = currentCategoryFacts.fact
//       funFactsOceans.length++
//    }
// }

// function nextQuestion(){
//    const nextFact = Math.floor(Math.random() * funFactsOceans.length)
//    currentCategory = funFactsOceans[nextFact]
// }



// let tempArray = []



function nextQuestion() {
   const random = randomFact()
   const oceanFact = funFactsOceans[random]
   messageResult.innerHTML = oceanFact.fact
   // if(currentCategoryFacts !== messageResult)
   // return 
   // messageResult.innerHTML = currentCategoryFacts.fact
   // for (let i = 0; i < funFactsOceans.length; i++) {
   //    randomIndex = randomFact()
   //    funFactsOceans.forEach((fact, index) => {
   //       if (fact[randomIndex] === funFactsOceans[index])
   //       funFactsOceans.pop()
   //          console.log(fact)
   //    })
   // }
}
// console.log(nextQuestion())
function randomFact() {
   return Math.floor(Math.random() * funFactsOceans.length)
   
}



// function nextQuestion(){
//    const trueButton = funFactsOceans[currentCategoryIndex]
//    messageResult.innerHTML = currentCategoryFacts.fact
//    currentCategoryIndex++
//    if (currentCategoryFacts >= funFactsOceans.length) {
//       currentCategoryIndex = 0

//    }
// }


// function nextQuestion() {
//    const answerTrue = funFactsOceans[0]
//    currentCategoryFacts.push(isOceans)
// }

function playerScore() {

   //if else statement
}

function randomFunFactOceans() {

}
//   funFactsOceans.forEach() {
//iterate through the array with forEach method?

// funFactsOceans.push(newFunFact)

// funFactsOceans.push(newFunFact)
//then display one fun fact

//i have to push my funfacts into my empty array of currentcategoryfacts

function currentCategoryFact() {


}

function render() {
}












