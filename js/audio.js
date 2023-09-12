let oceanSound = new Audio('../audio/ocean.wav')



function playOceanSound() {
  oceanSound.volume = 0.25
  oceanSound.play()
}



export{
  playOceanSound
}