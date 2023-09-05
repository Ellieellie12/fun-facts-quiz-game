import { getRandomFunFactOcean } from "./fun-facts.js"

/*-------------------------------- Constants --------------------------------*/


const categoryChoices = ['ocean', 'birds', 'fish']






/*---------------------------- Variables (state) ----------------------------*/
let playerOne, playerTwo, turn, winner, tie
let score = 0






/*------------------------ Cached Element References ------------------------*/
const oceanButton = document.getElementById('oceans')




/*----------------------------- Event Listeners -----------------------------*/
// oceanButton.addEventListener('click', function (e) {
//    const funFact = prompt(funFactOceans)

// })
oceanButton.addEventListener('click', createFunFactOcean)

// oceanButton.addEventListener('click', createFunFactOcean)
console.log('the button is clicked')
// document.getElementById('birds').addEventListener('onClick',play)
// document.getElementById('fish').addEventListener('onClick',play)


/*-------------------------------- Functions --------------------------------*/


function init() {
   playerOne()
   playerTwo()
   turn = 1
   winner = false
   tie = false

}










function createFunFactOcean() {

   const newFunFact = getRandomFunFactOcean()
   funFactOceans.push(newFunFact)
   render()
}

function render() {
   createFunFactOcean()
}












