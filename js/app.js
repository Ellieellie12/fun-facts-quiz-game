import { funFactsFish } from "./fun-facts.js"
import { funFactsOceans } from "./fun-facts.js"
import { funFactsBirds } from "./fun-facts.js"


/*-------------------------------- Constants --------------------------------*/
const categoryChoices = ['ocean', 'birds', 'fish']
const currentCategoryFacts = []

/*---------------------------- Variables (state) ----------------------------*/
let currentCategory, winner, randomIndex
let score = 0
let currentCategoryIndex = 0
let timeLeft = 40
/*------------------------ Cached Element References ------------------------*/
const scoreElement = document.getElementById('score')
const backgroundMusic = document.getElementById('gamemusic')
const countDownEl =document.getElementById('countdown')
const oceanButton = document.getElementById('oceans')
const birdsButton = document.getElementById('birds')
const fishButton = document.getElementById('fish')
const resetButton = document.getElementById('resetbutton')
const messageResult = document.getElementById('messageEl')
const trueButton = document.getElementById('trueocean')
const falseButton = document.getElementById('falseocean')
const trueButtonBird = document.getElementById('truebird')
const falseButtonBird = document.getElementById('falsebird')

const trueButtonFish = document.getElementById('truefish')
const falseButtonFish = document.getElementById('falsefish')

const oceanImage = document.getElementById('oceansimg')
const birdsImage = document.getElementById('birdsimg')
const fishImage = document.getElementById('fishimg')

/*----------------------------- Event Listeners -----------------------------*/
trueButton.addEventListener('click', () => {
   checkAnswerOcean(true)
})
falseButton.addEventListener('click', () => {
   checkAnswerOceanTwo(notTrue)
})

oceanButton.addEventListener('click', createFunFactOcean)
birdsButton.addEventListener('click', createFunFactBird)
fishButton.addEventListener('click', createFunFactFish)
resetButton.addEventListener('click', init)
document.getElementById('trueocean').addEventListener('click', nextQuestionOne)
document.getElementById('falseocean').addEventListener('click', nextQuestionOcean)
document.getElementById('truebird').addEventListener('click', nextQuestionTwo)
document.getElementById('falsebird').addEventListener('click', nextQuestionBirds)
document.getElementById('truefish').addEventListener('click', nextQuestionThree)
document.getElementById('falsefish').addEventListener('click', nextQuestionFish)

/*-------------------------------- Functions --------------------------------*/
function init() {
   winner = false
   score = 0
   messageResult.innerHTML = ''
   oceanImage.style.visibility = 'visible'
   birdsImage.style.visibility = 'visible'
   fishImage.style.visibility = 'visible'
   trueButton.style.display = 'none'
   falseButton.style.display = 'none'
   trueButtonBird.style.display = 'none'
   falseButtonBird.style.display = 'none'
   trueButtonFish.style.display = 'none'
   falseButtonFish.style.display = 'none'
   playBackgroundMusic()
   updateScore()
   render()
}

function playBackgroundMusic() {
   backgroundMusic.play()
}

let timer = setInterval(function(){
   countDownEl.textContent = timeLeft + ' seconds remaining '
   timeLeft -= 1
   if(timeLeft < 0){
      countDownEl.textContent = 'Game Over!!!'
      clearInterval(timer)
      }

   },1000)

function createFunFactOcean() {
   oceanImage.style.visibility = 'hidden'
   const fact = funFactsOceans[0]
   currentCategoryFacts.push(fact)
   messageResult.innerHTML = currentCategoryFacts[0].fact
   trueButton.style.display = 'block'
   falseButton.style.display = 'block'

}

function createFunFactBird() {
   birdsImage.style.visibility = 'hidden'
   const fact = funFactsBirds[0]
   currentCategoryFacts.push(fact)
   messageResult.innerHTML = currentCategoryFacts[0].fact
   trueButtonBird.style.display = 'block'
   falseButtonBird.style.display = 'block'

}

function createFunFactFish() {
   fishImage.style.visibility = 'hidden'
   const fact = funFactsFish[0]
   currentCategoryFacts.push(fact)
   messageResult.innerHTML = currentCategoryFacts[0].fact
   trueButtonFish.style.display = 'block'
   falseButtonFish.style.display = 'block'

}

function nextQuestionOne() {
   const random = randomFact()
   const oceanFact = funFactsOceans[random]
   messageResult.innerHTML = oceanFact.fact

}

function nextQuestionOcean() {
   const random = randomFact()
   const oceanFact = funFactsOceans[random]
   messageResult.innerHTML = oceanFact.fact

}

function nextQuestionTwo() {
   const random = randomFact()
   const birdFact = funFactsBirds[random]
   messageResult.innerHTML = birdFact.fact

}

function nextQuestionBirds() {
   const random = randomFact()
   const birdFact = funFactsBirds[random]
   messageResult.innerHTML = birdFact.fact

}

function nextQuestionThree() {
   const random = randomFact()
   const fishFact = funFactsFish[random]
   messageResult.innerHTML = fishFact.fact

}

function nextQuestionFish() {
   const random = randomFact()
   const fishFact = funFactsFish[random]
   messageResult.innerHTML = fishFact.fact

}

function randomFact() {
   return Math.floor(Math.random() * funFactsOceans.length)

}

function checkAnswerOcean(isTrue) {
   if (currentCategoryIndex < funFactsOceans.length) {
      const correctAnswer = funFactsOceans[currentCategoryIndex].isOceans
      if (isTrue === correctAnswer) {
         score++
      }
      currentCategoryIndex++
      updateScore()
   }
}

function clearEverything() {
   score = 0
   messageResult.textContent = ''

}

function updateScore() {
   scoreElement.innerHTML = score
}

function render() {
   playBackgroundMusic()
   randomFact()
   checkAnswerOcean()
}