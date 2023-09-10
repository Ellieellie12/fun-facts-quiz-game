import { funFactsFish } from "./fun-facts.js"
import { funFactsOceans } from "./fun-facts.js"
import { funFactsBirds } from "./fun-facts.js"
/*-------------------------------- Constants --------------------------------*/

// console.log(funFactsBirds)
// console.log(funFactsOceans)
// console.log(funFactsFish)
const minute = '00'



/*---------------------------- Variables (state) ----------------------------*/
let score = 0
let timeLeft = 0






/*------------------------ Cached Element References ------------------------*/
const oceanButton = document.querySelector('.oceansbutton')
// console.log(oceanButton)
const birdsButton = document.querySelector('.birdsbutton')
// console.log(birdsButton)
const fishButton = document.querySelector('.fishbutton')
// console.log(fishButton)
const scoreElement = document.querySelector('.score')
// console.log(score)
const timerElement = document.querySelector('.timer')
// console.log(timer)
const resetButton = document.querySelector('.resetbutton')
// console.log(resetButton)

const oceanImage = document.querySelector('.oceansimg')
console.log(oceanImage)
const birdsImage = document.querySelector('.birdsimg')
console.log(birdsImage)
const fishImage = document.querySelector('.fishimg')
console.log(fishImage)




/*----------------------------- Event Listeners -----------------------------*/
oceanButton.addEventListener('click', play)







/*-------------------------------- Functions --------------------------------*/

function play() {
  score = 0
  timeLeft = 40
// console.log(score)
// console.log(timeLeft)
}
play()

function printScore() {
  scoreElement.textContent = `${score}`
  

}
printScore()
// console.log(scoreElement)

function printTimer() {
  timerElement.textContent = `${minute} : ${timeLeft}` 
}

printTimer()

function deleteImages(){

}















































































// const categoryChoices = ['ocean', 'birds', 'fish']
// const currentCategoryFacts = []
// /*---------------------------- Variables (state) ----------------------------*/
// let currentCategory, winner, randomIndex
// let score = 0
// let currentCategoryIndex = 0
// // let timeLeft = 40
// /*------------------------ Cached Element References ------------------------*/
// const scoreElement = document.querySelector('score')
// const backgroundMusic = document.querySelector('gamemusic')

// const countDownEl = document.querySelector('countdown')

// const oceanButton = document.querySelector('oceans')
// const birdsButton = document.querySelector('birds')
// const fishButton = document.querySelector('fish')

// const resetButton = document.querySelector('resetbutton')

// const messageResult = document.querySelector('messageEl')

// const trueButton = document.querySelector('trueocean')
// const falseButton = document.querySelector('falseocean')

// const trueButtonBird = document.querySelector('truebird')
// const falseButtonBird = document.querySelector('falsebird')

// const trueButtonFish = document.querySelector('truefish')
// const falseButtonFish = document.querySelector('falsefish')

// const oceanImage = document.querySelector('oceansimg')
// const birdsImage = document.querySelector('birdsimg')
// const fishImage = document.querySelector('fishimg')
// /*----------------------------- Event Listeners -----------------------------*/

// trueButton.addEventListener('click', () => {
//    checkAnswerOcean(true)
// })

// oceanButton.addEventListener('click', createFunFactOcean)
// birdsButton.addEventListener('click', createFunFactBird)
// fishButton.addEventListener('click', createFunFactFish)
// resetButton.addEventListener('click', init)

// document.querySelector('trueocean').addEventListener('click', nextQuestionOne)
// document.querySelector('falseocean').addEventListener('click', nextQuestionOcean)

// document.querySelector('truebird').addEventListener('click', nextQuestionTwo)
// document.querySelector('falsebird').addEventListener('click', nextQuestionBirds)

// document.querySelector('truefish').addEventListener('click', nextQuestionThree)
// document.querySelector('falsefish').addEventListener('click', nextQuestionFish)

// /*-------------------------------- Functions --------------------------------*/

// function init() {
//    winner = false
//    score = 0
//    messageResult.innerHTML = ''
//    oceanImage.style.visibility = 'visible'
//    birdsImage.style.visibility = 'visible'
//    fishImage.style.visibility = 'visible'
//    trueButton.style.display = 'none'
//    falseButton.style.display = 'none'
//    trueButtonBird.style.display = 'none'
//    falseButtonBird.style.display = 'none'
//    trueButtonFish.style.display = 'none'
//    falseButtonFish.style.display = 'none'
//    playBackgroundMusic()
//    updateScore()
//    render()

// }

// function playBackgroundMusic() {
//    backgroundMusic.play()
// }

// // let timer = setInterval(function () {
// //    countDownEl.textContent = timeLeft + ' seconds remaining '
// //    timeLeft -= 1
// //    if (timeLeft < 0) {
// //       countDownEl.textContent = 'Game Over!!!'
// //       clearInterval(timer)
// //    }

// // }, 1000)


// function createFunFactOcean() {
//    oceanImage.style.visibility = 'hidden'
//    const fact = funFactsOceans[0]
//    currentCategoryFacts.push(fact)
//    messageResult.innerHTML = currentCategoryFacts[0].fact
//    trueButton.style.display = 'block'
//    falseButton.style.display = 'block'
// }

// function createFunFactBird() {
//    birdsImage.style.visibility = 'hidden'
//    const fact = funFactsBirds[0]
//    currentCategoryFacts.push(fact)
//    messageResult.innerHTML = currentCategoryFacts[0].fact
//    trueButtonBird.style.display = 'block'
//    falseButtonBird.style.display = 'block'
// }

// function createFunFactFish() {
//    fishImage.style.visibility = 'hidden'
//    const fact = funFactsFish[0]
//    currentCategoryFacts.push(fact)
//    messageResult.innerHTML = currentCategoryFacts[0].fact
//    trueButtonFish.style.display = 'block'
//    falseButtonFish.style.display = 'block'
// }

// function nextQuestionOne() {
//    const random = randomFact()
//    const oceanFact = funFactsOceans[random]
//    messageResult.innerHTML = oceanFact.fact
// }

// function nextQuestionOcean() {
//    const random = randomFact()
//    const oceanFact = funFactsOceans[random]
//    messageResult.innerHTML = oceanFact.fact
// }

// function nextQuestionTwo() {
//    const random = randomFact()
//    const birdFact = funFactsBirds[random]
//    messageResult.innerHTML = birdFact.fact
// }

// function nextQuestionBirds() {
//    const random = randomFact()
//    const birdFact = funFactsBirds[random]
//    messageResult.innerHTML = birdFact.fact
// }

// function nextQuestionThree() {
//    const random = randomFact()
//    const fishFact = funFactsFish[random]
//    messageResult.innerHTML = fishFact.fact
// }

// function nextQuestionFish() {
//    const random = randomFact()
//    const fishFact = funFactsFish[random]
//    messageResult.innerHTML = fishFact.fact
// }

// function randomFact() {
//    return Math.floor(Math.random() * funFactsOceans.length)
// }

// function checkAnswerOcean(isTrue) {
//    if (currentCategoryIndex < funFactsOceans.length) {
//       const correctAnswer = funFactsOceans[currentCategoryIndex].isOceans
//       if (isTrue === correctAnswer) {
//          score++
//       }
//       currentCategoryIndex++
//       updateScore()
//    }
// }

// function clearEverything() {
//    score = 0
//    messageResult.textContent = ''
// }


// function updateScore() {
//    scoreElement.innerHTML = score
// }


// function render() {
//    playBackgroundMusic()
//    randomFact()
//    checkAnswerOcean()
// }