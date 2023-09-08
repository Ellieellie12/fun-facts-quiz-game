import { funFactsFish } from "./fun-facts.js"
import { funFactsOceans } from "./fun-facts.js"
import { funFactsBirds } from "./fun-facts.js"


/*-------------------------------- Constants --------------------------------*/
const categoryChoices = ['ocean', 'birds', 'fish']
const currentCategoryFacts = []
// let currentCategoryIndex = 0
/*---------------------------- Variables (state) ----------------------------*/
let currentCategory, winner, randomIndex
let score = 0
let currentCategoryIndex = 0
/*------------------------ Cached Element References ------------------------*/
const scoreElement = document.getElementById('score')
const backgroundMusic = document.getElementById('gamemusic')

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
// const trueAndFalseSections = document.querySelector('.trueandfalseoceans')
// console.log(trueAndFalseSections)
//NEED TO MAKE TRUE AND FALSE BUTTONS FOR BIRDS AND FISH SO THAT I CAN KEEP TRACK OF THEIR SCORE
const oceanImage = document.getElementById('oceansimg')
const birdsImage = document.getElementById('birdsimg')
const fishImage = document.getElementById('fishimg')

// const nextFactDiv = document.getElementById('factEl')
/*----------------------------- Event Listeners -----------------------------*/
trueButton.addEventListener('click', () => {
   checkAnswerOcean(true)
})
falseButton.addEventListener('click', () => {
   checkAnswerOceanTwo(notTrue)
})

// trueButton.addEventListener('click', function() {
//    checkAnswerOcean(true)
//    score = score + 1
//    console.log(score)
// })

// falseButton.addEventListener('click', function() {
   
// })



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

// oceanImage.addEventListener('click', function (evt) { 
//   oceanSays.volume = 0.5
//   oceanSays.play()
// })
/*-------------------------------- Functions --------------------------------*/
function init() {
   // clearEverything()

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
   // createFunFactOcean()
   updateScore()
   render()
}

function playBackgroundMusic() {
backgroundMusic.play() 
}


// setTimeout(function() {
//    backgroundMusic.play
//    backgroundMusic.pause()
// }, 3000)





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
// messageResult.textContent = 'the'
function clearEverything() {
   score = 0
   messageResult.textContent = ''

}

// function checkOceans() {

// }



function checkAnswerOceanTwo(isFalse) {
   if (currentCategoryIndex < funFactsOceans.length) {
      const wrongAnswer = funFactsOceans[currentCategoryIndex].isOceans
      if (isFalse === wrongAnswer) {
        -- score
   }
   currentCategoryIndex--
   updateScore()

  }
}

function updateScore() {
   scoreElement.innerHTML = score
}

// function filterOutDuplicates(currentFact) {
//    return funFactsOceans.filter((fact) => fact.fact !== currentFact)
// }
// const duplicateElements = toF(funFactsOceans)



function playerScore() {

   //if else statement
}




function render() {
   // playBackgroundMusic()
   // createFunFactOcean()
   // nextQuestionOne()
}












//NOTES FOR TOMORROW ADD A TIMER, SCORE BOARD, AUDIO, ASK ABOUT THE MESSAGE ELEMENT FOR BIRD AND FISH 









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





