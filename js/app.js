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
const birdsButton = document.getElementById('birds')
// const fishButton = document.getElementById('fish')

const messageResult = document.getElementById('messageEl')
const trueButton = document.getElementById('trueocean')
const falseButton = document.getElementById('falseocean')
const oceanImage = document.getElementById('oceansimg')
// const nextFactDiv = document.getElementById('factEl')
/*----------------------------- Event Listeners -----------------------------*/


oceanButton.addEventListener('click', createFunFactOcean)
birdsButton.addEventListener('click', createFunFactBird)
// document.getElementById('birds').addEventListener('click', createFunFactBird)
// document.getElementById('fish').addEventListener('click',play)
document.getElementById('trueocean').addEventListener('click', nextQuestion)
document.getElementById('falseocean').addEventListener('click', nextQuestionOcean)
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

function createFunFactBird(){
   birdsimg.style.visibility = 'hidden'
   const fact = funFactsBirds[0]
   currentCategoryFacts.push(fact)
   messageResult.innerHTML = currentCategoryFacts[0].fact
   truebird.style.display = 'block'
   falsebird.style.display = 'block'
   //add the true and false display as well as buttons for this function
}


function nextQuestion() {
   const random = randomFact()
   const oceanFact = funFactsOceans[random]
   messageResult.innerHTML = oceanFact.fact
  
}

function nextQuestionOcean() {
   const random = randomFact()
   const oceanFact = funFactsOceans[random]
   messageResult.innerHTML = oceanFact.fact

}

function randomFact() {
   return Math.floor(Math.random() * funFactsOceans.length)

}

// function filterOutDuplicates(currentFact) {
//    return funFactsOceans.filter((fact) => fact.fact !== currentFact)
// }
// const duplicateElements = toF(funFactsOceans)



function playerScore() {

   //if else statement
}

function randomFunFactOceans() {

}


function currentCategoryFact() {

}


function render() {

}





















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

//   funFactsOceans.forEach() {
//iterate through the array with forEach method?

// funFactsOceans.push(newFunFact)

// funFactsOceans.push(newFunFact)
//then display one fun fact

//i have to push my funfacts into my empty array of currentcategoryfacts
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

// function nextQuestion() {
//    const random = randomFact()
//    const oceanFact = funFactsOceans[random]
//    messageResult.innerHTML = oceanFact.fact
//    //working code above just in case
//    // if(currentCategoryFacts !== messageResult)
//    // return 
//    // messageResult.innerHTML = currentCategoryFacts.fact
//    // for (let i = 0; i < funFactsOceans.length; i++) {
//    //    randomIndex = randomFact()
//    //    funFactsOceans.forEach((fact, index) => {
//    //       if (fact[randomIndex] === funFactsOceans[index])
//    //       funFactsOceans.pop()
//    //          console.log(fact)
//    //    })
//    // }
// }





