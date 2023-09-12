import { funFactsFish } from "./fun-facts.js"
import { funFactsOceans } from "./fun-facts.js"
import { funFactsBirds } from "./fun-facts.js"
/*-------------------------------- Constants --------------------------------*/
const minute = '00'



/*---------------------------- Variables (state) ----------------------------*/
let score = 0
let timer
let timeLeft = 0
let funFact
let trueButton = document.createElement('button')
let falseButton = document.createElement('button')
let trueAndFalse
let trueOrFalse

// let winner
// let timeLeft
// let timerInterval
// let score
// let currentCategory
// let currentQuestion





/*------------------------ Cached Element References ------------------------*/
const oceanButton = document.querySelector('.oceansbutton')
const birdsButton = document.querySelector('.birdsbutton')
const fishButton = document.querySelector('.fishbutton')
const scoreElement = document.querySelector('.score')
const timerElement = document.querySelector('.timer')
const resetButton = document.querySelector('.resetbutton')
const oceanImage = document.querySelector('.oceansimg')
const birdsImage = document.querySelector('.birdsimg')
const fishImage = document.querySelector('.fishimg')
const funFactElement = document.querySelector('#categoryimages')


/*----------------------------- Event Listeners -----------------------------*/
oceanButton.addEventListener('click', playOcean)
birdsButton.addEventListener('click', playBird)
// fishButton.addEventListener('click', playFish)





trueButton.addEventListener('click', checkForTrueClick)
falseButton.addEventListener('click', checkForFalseClick)
resetButton.addEventListener('click', reset)




/*-------------------------------- Functions --------------------------------*/
function playOcean() {
  // initializes score and them time left when the game begins 
  score = 0
  timeLeft = 20
  // printTimer()
  // deleteImages()
  // deleteButtons()
  // displayOceanFunFact()
  // createTrueAndFalseButtons()
  renderOcean()
}

function playBird() {
  score = 0
  timeLeft = 20
  renderBird()

}



// function playFish() {
//   score = 0
//   timeLeft = 20
// }



function renderOcean() {
  printTimer()
  hideImages()
  deleteButtons()
  displayOceanFunFact()
  createTrueAndFalseButtons()
  checkForWinner()
}

function renderBird() {
  printTimer()
  hideImages()
  deleteButtons()
}

function printScore() {
  // prints score only when user initializes the game 
  scoreElement.textContent = `${score}`

}

function printTimer() {
  timerElement.textContent = `${minute} : ${timeLeft}`
  timeLeft = 20
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

function hideImages() {
  // when category button is clicked all image
  oceanImage.style.visibility ='hidden'
  birdsImage.style.visibility = 'hidden'
  fishImage.style.visibility = 'hidden'

}

function deleteButtons() {
  oceanButton.style.visibility = 'hidden'
  birdsButton.style.visibility = 'hidden'
  fishButton.style.visibility = 'hidden'
}

function displayButtons() {
  oceanButton.style.visibility = 'visible'
  birdsButton.style.visibility = 'visible'
  fishButton.style.visibility = 'visible'
}

function displayOceanFunFact() {
  // selecting random fun fact from funFactOceans array
  funFact = funFactsOceans[Math.floor(Math.random() * funFactsOceans.length)]
  // (oceanButton.click()){
  // display only one funFact text 
  // messageResult.style.visibility = 'visible'
  funFactElement.textContent = funFact.fact
}

function changeFunFactElement() {
  funFactElement.style.justifyContent = 'column'
}


function createTrueAndFalseButtons() {
  // create true and false buttons for user to access
  trueAndFalse = document.createElement('div')
  trueAndFalse.setAttribute('id', 'trueandfalse')


  // give buttons a value text appears on the button
  trueButton.textContent = 'true'
  falseButton.textContent = 'false'
  // giving each button an id
  trueButton.setAttribute('id', 'truebtn')
  falseButton.setAttribute('id', 'falsebtn')
  // display the buttons to the user in the images section
  trueAndFalse.appendChild(trueButton)
  trueAndFalse.appendChild(falseButton)
  funFactElement.appendChild(trueAndFalse)
  funFactElement.style.flexDirection = 'column'
  funFactElement.style.justifyContent = 'center'
  funFactElement.style.alignItems = 'center'

}

function checkForFalseClick() {
  // if(trueButton) {
  //   trueOrFalse = 'true' 
  //   falseButton.disabled = true
  //   // console.log(trueOrFalse)
  // }
  trueOrFalse = false
  trueButton.disabled = true
  //  console.log(trueOrFalse)
  if (trueOrFalse == funFact.isCorrect) score++

  // if(trueOrFalse == funFact.isCorrect)
  // score++
  // console.log(trueOrFalse)
  // console.log(score)
  // if(trueOrFalse)
  printScore()
  displayOceanFunFact()
  createTrueAndFalseButtons()
  enableTrueAndFalse()
}

function checkForTrueClick() {
  trueOrFalse = true
  falseButton.disabled = true
  if (trueOrFalse == funFact.isCorrect) score++
  printScore()
  displayOceanFunFact()
  createTrueAndFalseButtons()

  enableTrueAndFalse()
}

function enableTrueAndFalse() {
  trueButton.disabled = false
  falseButton.disabled = false
}

function reset() {
  clearInterval(timer)
  scoreElement.textContent = 0
 funFactElement.textContent = ''
 showImages()
 displayButtons()

}


























//  funFactElement.textContent = ''
//  oceanImage.setAttribute('class','oceansimg')
//  birdsImage.setAttribute('class','birdsimg')
//  fishImage.setAttribute('class','fishimg')
//   funFactElement.appendChild(oceanImage)
//   funFactElement.appendChild(birdsImage)
//   funFactElement.appendChild(fishImage)
//   funFactElement.style.flexDirection = 'column'
//   funFactElement.style.justifyContent = 'center'
//   funFactElement.style.alignItems = 'center'
//   console.log(funFactElement)
// }


// function checkForWinner(){
  
//   if(score >= 10) {
//     timerElement.textContent = 'Winner!!!'
//   } else if(score <= 9) {
//     timerElement.textContent = 'You Lose! Try Again'
//   } else if(timeLeft = 0) {
//     timerElement.textContent = 'You Lose! Try Again'

//   }
// }
  // (checkForWinner)





// function checkForClick() {
//   if(trueButton) {
//     trueOrFalse == funFact.isCorrect
//     score++
//   } else if(falseButton){
//     trueOrFalse == funFact.isCorrect
//     score++
//   } else {
//      score = score
//      printScore()
//   }
// }

// checkForClick()

// checkForClick()
// function checkForClick() {
//   if(trueButton = 'true' || fals {
//     trueOrFalse == funFact.isCorrect
//     score++
//   } else 
//      score = score
//      printScore()
//   }
// }

// function checkForClick() {
//   if(trueButton || falseButton) {
//     trueOrFalse == funFact.isCorrect
//     score++
//   } else {
//      score = score
//      printScore()
//   }
// }


// checkForClick()

// function checkForClick() {
//   if(trueButton) {
//     trueOrFalse == funFact.isCorrect
//     score++
//   } else if(falseButton){
//     trueOrFalse == funFact.isCorrect
//     score++
//   } else {
//      score = score
//      printScore()
//   }
// }



// function checkForClick() {
//   if(trueButton || falseButton) {
//     trueOrFalse == funFact.isCorrect
//     score++
//   } else {
//      score = score
//      printScore()
//   }
// }










// createTrueAndFalseButtons()
// console.log(trueAndFalse)
// createTrueAndFalseButtons()
// console.log(trueButton)
// console.log(falseButton)

// function checkForTrueAndFalse() {
//   if(trueButton.click()) {
//     buttonClicked = 'true'
//   }
//   if(trueButton.click()) {
//     buttonClicked = 'false'

//   }
//   console.log(buttonClicked)
// }
// deleteImages()
// deleteButtons()
// displayOceanFunFact()
// createTrueAndFalseButtons()

// function checkForTrue() {
//   buttonClicked = 'true'
//   if (buttonClicked == funFact.isCorrect) {
//     score++
//     // console.log(buttonClicked) 
//   }
// }
// if(trueButton.clicked()){

// }


// function checkForFalse() {
//   buttonClicked = 'false'
//   if (buttonClicked != funFact.isCorrect)
//     score = score
//   console.log(funFact.isCorrect)
  // console.log(buttonClicked)
// }

// displayOceanFunFact()

// function checkForScore() {
  // score = 0
  // if (buttonClicked == funFact.isCorrect) {
  //   score++
  // } else if (buttonClicked != funFact.isCorrect)
  //   score = score

// }

// checkForTrue()
//   checkForFalse()
//   checkForScore() 

// displayOceanFunFact()
// createTrueAndFalseButtons()
// checkForFalse()
// checkForTrue()
// checkForScore()
// // console.log(buttonClicked)







// checkForTrueAndFalse()
//     if (buttonClicked === funFact.isCorrect) {
//       return true

//     }
// }
// (oceanButton.click()){
// console.log(trueButton)
// console.log(falseButton)

// checkForTrueAndFalse()











































































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