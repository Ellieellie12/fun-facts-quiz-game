const funFactsOceans = [
  { isOceans: true, fact: 'The largest ocean in the world is the Pacific Ocean.' },
  { isOceans: true, fact: 'Most wildlife lives in the ocean.' },
  { isOceans: true, fact: 'The planets longest mountain range is underwater.' },
  { isOceans: true, fact: 'Fear of the ocean is called Thalassophobia.' },
  { isOceans: true, fact: 'The furthest part of the ocean is called Point Nemo.' },
  { isOceans: true, fact: 'About 70 percent of the oxygen we breathe	is produced by the oceans.' },
  { isOceans: true, fact: 'The smallest ocean is the Arctic Ocean.' },
  { isOceans: true, fact: 'Explorers of the sea and its mysteries are sometimes called oceanauts.' },
  { isOceans: true, fact: 'While the words ocean and sea are used interchangeably, a sea is technically a smaller body of salt water that is part of a larger ocean.' },
  { isOceans: true, fact: 'The coldest ocean is the Arctic Ocean.' },
  { isOceans: false, fact: 'The ocean covers 60 percent of the Earths surface.' },
  { isOceans: false, fact: 'The deepest part of the ocean is called The Ultimate Deep.' },
  { isOceans: false, fact: 'Less than 10 percent of the has been explored.' },
  { isOceans: false, fact: 'The ocean is blue because water absorbs colors in the blue part of the light spectrum.' },
  { isOceans: false, fact: 'The ocean floor does not move.' },
  { isOceans: false, fact: 'The ocean is thousands of years old.' },
  { isOceans: false, fact: 'Alligators live in the ocean and prey on fish.' },
  { isOceans: false, fact: 'The Bermuda Triangle is located in a section of the South Atlantic Ocean.' }

]

// function getRandomFunFactOcean() {
//   return funFactOceans[Math.floor(Math.random() * getRandomFunFactOcean.length)]
// }




const funFactsBirds = [
  { isBirds: true, fact: 'There are more than 18,000 bird species in the world.' },
  { isBirds: true, fact: 'Birds are the only animal with feathers.' },
  { isBirds: true, fact: 'You can find flamingos in Florida.' },
  { isBirds: true, fact: 'The California condor is the largest flying bird in North America.' },
  { isBirds: true, fact: 'Parrots can live over 100 years.' },
  { isBirds: true, fact: 'The largest bird egg belongs to the Ostrich.' },
  { isBirds: true, fact: 'Penguins can not fly but they can swim.' },
  { isBirds: true, fact: 'The national bird of India is a Peacock.' },
  { isBirds: true, fact: 'The Elephant and Dodo bird are extinct birds.' },
  { isBirds: false, fact: 'Ostriches can fly.' },
  { isBirds: false, fact: 'Owls can turn their necks up to 100 degrees.' },
  { isBirds: false, fact: 'The smallest bird in the world is the pale-billed flowerpecker.' },
  { isBirds: false, fact: 'Humans have better eyesight than eagles.' },
  { isBirds: false, fact: 'All birds can fly.' },
  { isBirds: false, fact: 'Chickens are not birds.' },
  { isBirds: false, fact: 'There are four living species of swans.' },
  { isBirds: false, fact: 'Bats are birds.' },
  { isBirds: false, fact: 'You can find red cardinals all over Europe.' },
  { isBirds: false, fact: 'Birds are mammals.' }
]

// function getRandomFunFactBird() {
//   return funFactBirds[Math.floor(Math.random() * getRandomFunFactBird.length)]
// }




const funFactsFish = [
  { isFish: true, fact: '14 percent of protein consumption comes from fish.' },
  { isFish: true, fact: 'Fish do not sleep the same way land mammals do, they rest.' },
  { isFish: true, fact: 'Fish are cold blooded.' },
  { isFish: true, fact: 'Tuna fish offers a lot of Vitamin D.' },
  { isFish: true, fact: ' The bass and sunfish are native to North America.' },
  { isFish: true, fact: 'Fish breathe through their gills.' },
  { isFish: true, fact: 'The Angler fish is one of the scariest fish in the world.' },
  { isFish: true, fact: 'Betta fish are known to fight each other.' },
  { isFish: true, fact: 'Jellyfish are not fish.' },
  { isFish: true, fact: 'Fish are excellent at communicating.' },
  { isFish: false, fact: 'Goldfish can taste their food.' },
  { isFish: false, fact: 'Salmon have a horrible sense of smell.' },
  { isFish: false, fact: 'There are 100 species of fish swimming in North Americas fresh waters.' },
  { isFish: false, fact: 'Seahorses are not fish.' },
  { isFish: false, fact: 'Eels are not fish although they look similar to fish.' },
  { isFish: false, fact: 'All fish have bones.' },
  { isFish: false, fact: 'All fish have eyelids and external ears.' },
  { isFish: false, fact: 'Clownfish eggs can only hatch at a specific time of year.' },
  { isFish: false, fact: 'Fish can not change color.' },
  { isFish: false, fact: 'Fish come in one size and color.' }
]

// function getRandomFunFactFish() {
//   return funFactFish[Math.floor(Math.random() * getRandomFunFactFish.length)]
// }

export {
  funFactsFish,
  funFactsOceans,
  funFactsBirds
}
