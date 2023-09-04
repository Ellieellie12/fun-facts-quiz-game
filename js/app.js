/*-------------------------------- Constants --------------------------------*/
const categoryChoices = ['ocean', 'birds', 'fish']






/*---------------------------- Variables (state) ----------------------------*/
let playerOne, playerTwo, turn, winner, tie
let score = 0






/*------------------------ Cached Element References ------------------------*/
const oceanButton = document.getElementById('oceans')




/*----------------------------- Event Listeners -----------------------------*/
oceanButton.addEventListener('click', function(e) {
  console.log('The button was clicked')
})
// document.getElementById('birds').addEventListener('onClick',play)
// document.getElementById('fish').addEventListener('onClick',play)


/*-------------------------------- Functions --------------------------------*/

// function play(event){
//   console.log('The button was clicked')
// }






// function play(event) {
// getPlayerOne(event)
// }


// function getPlayerOne(event) {
//   playerOne = event.target.id
// }

// console.log(getPlayerOne)