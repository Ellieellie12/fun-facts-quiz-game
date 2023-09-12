let oceanSound = new Audio('../audio/oceans.wav')
let birdsSound = new Audio('../audio/birds.wav')
let fishSound = new Audio('../audio/fish.wav')


function playOceanSound() {
  oceanSound.volume = 0.25
  oceanSound.play()
  } 

function playBirdsSound() {
  birdsSound.volume = 0.25
  birdsSound.play()
}

function playFishSound() {
  fishSound.volume = 0.25
  fishSound.play()
  } 

export{
  playOceanSound,
  playBirdsSound,
  playFishSound
}