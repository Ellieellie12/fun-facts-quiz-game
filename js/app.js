import { funFactsFish } from "./fun-facts.js"
import { funFactsOceans } from "./fun-facts.js"
import { funFactsBirds } from "./fun-facts.js"
import * as buttonAudio from './audio.js'
/*-------------------------------- Constants --------------------------------*/
const minute = '00'

/*---------------------------- Variables (state) ----------------------------*/
let score = 0
let timeLeft = 40
let timer, funFact, trueAndFalse, trueOrFalse, currentCategory
let trueButton = document.createElement('button')
let falseButton = document.createElement('button')

/*------------------------ Cached Element References ------------------------*/
const oceanButton = document.querySelector('.oceansbutton')
const birdsButton = document.querySelector('.birdsbutton')
const fishButton = document.querySelector('.fishbutton')
const scoreElement = document.querySelector('.score')
const timerElement = document.querySelector('.timer')
const resetButton = document.querySelector('.resetbutton')
const categoryButtons = document.querySelector('#categorybuttons')
const oceanImage = document.querySelector('.oceansimg')
const birdsImage = document.querySelector('.birdsimg')
const fishImage = document.querySelector('.fishimg')
const funFactElement = document.querySelector('#categoryimages')

/*----------------------------- Event Listeners -----------------------------*/
categoryButtons.addEventListener('click', selectCategory)
resetButton.addEventListener('click', reset)
trueButton.addEventListener('click', checkForTrueAndFalse)
falseButton.addEventListener('click', checkForTrueAndFalse)

/*-------------------------------- Functions --------------------------------*/
function selectCategory(evt) {
  if(evt.target.id === 'oceanbtn') {
    currentCategory = [...funFactsOceans]
    buttonAudio.playOceanSound()
  }
  if(evt.target.id === 'birdbtn') {
    currentCategory = [...funFactsBirds]
    buttonAudio.playBirdsSound()
  }
  if(evt.target.id === 'fishbtn') {
    currentCategory = [...funFactsFish]
    buttonAudio.playFishSound()
  }
  render()
}

function render() {
  hideButtonsAndImages()
  printTimer()
  printScore()
  displayFunFact()
  createTrueAndFalseButtons()
}

function hideButtonsAndImages() {
  oceanImage.style.visibility ='hidden'
  birdsImage.style.visibility = 'hidden'
  fishImage.style.visibility = 'hidden'
  oceanButton.style.visibility = 'hidden'
  birdsButton.style.visibility = 'hidden'
  fishButton.style.visibility = 'hidden'
}

function displayFunFact() {
  funFact = currentCategory[Math.floor(Math.random() * currentCategory.length)]
  funFactElement.textContent = funFact.fact
}

function createTrueAndFalseButtons() {
  trueAndFalse = document.createElement('div')
  trueAndFalse.setAttribute('id', 'trueandfalse')
  trueButton.textContent = 'True'
  falseButton.textContent = 'False'
  trueButton.setAttribute('id', 'truebtn')
  falseButton.setAttribute('id', 'falsebtn')
  trueAndFalse.appendChild(trueButton)
  trueAndFalse.appendChild(falseButton)
  funFactElement.appendChild(trueAndFalse)
  funFactElement.style.flexDirection = 'column'
  funFactElement.style.justifyContent = 'center'
}

function checkForTrueAndFalse(evt) {
  if(evt.target.id === 'truebtn') {
    trueOrFalse = true
    falseButton.disabled = true
  }
  if(evt.target.id === 'falsebtn') {
    trueOrFalse = false
    trueButton.disabled = true
  }
  if(trueOrFalse === funFact.isCorrect) score++
    printScore()
    enableTrueAndFalse()
    displayFunFact()
    nextQuestion()
}
function enableTrueAndFalse() {
  trueButton.disabled = false
  falseButton.disabled = false
}

function nextQuestion() {
  displayFunFact()
  createTrueAndFalseButtons()
}

function printScore() {
  scoreElement.textContent = 'Score: ' + `${score}`
}

function printTimer() {
  timerElement.textContent = `${minute} : ${timeLeft}`
  timeLeft = 40
  timer = setInterval(function () {
    timerElement.textContent = timeLeft + ' seconds remaining '
    timeLeft -= 1
    timerElement.textContent = `${minute} : ${timeLeft}`
    checkForWinner()
    if (timeLeft < 1) {
      clearInterval(timer)
    }
  }, 1000)
}

function checkForWinner() {
  if(score >= 10) {
    clearInterval(timer)
    funFactElement.textContent = 'Winner!!!'
  } else if(timeLeft === 0) {
      funFactElement.textContent = 'You Lose! Try Again!'
  }
}

function showImages() {
  oceanImage.style.visibility = 'visible'
  birdsImage.style.visibility = 'visible'
  fishImage.style.visibility= 'visible'
}

function displayButtons() {
  oceanButton.style.visibility = 'visible'
  birdsButton.style.visibility = 'visible'
  fishButton.style.visibility = 'visible'
}

function createImages() {
  oceanImage.setAttribute('class','oceansimg')
  birdsImage.setAttribute('class','birdsimg')
  fishImage.setAttribute('class','fishimg')
  funFactElement.appendChild(oceanImage)
  funFactElement.appendChild(birdsImage)
  funFactElement.appendChild(fishImage)
  funFactElement.style.flexDirection = 'row'
  funFactElement.style.justifyContent = 'space-evenly'
}

function reset() {
  score = 0
  timeLeft = 40
  clearInterval(timer)
  timerElement.textContent = `${minute} : ${minute}`
  funFactElement.textContent = ''
  printScore()
  displayButtons()
  createImages()
  showImages()
}