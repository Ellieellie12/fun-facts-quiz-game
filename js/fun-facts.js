const funFactOceans = [
  { isOceans: true, fact: 'The largest ocean in the world is the Pacific Ocean.' },
  { isOceans: true, fact: 'Most wildlife lives in the ocean.' },
  { isOceans: true, fact: 'The planets longest mountain range is underwater.' },
  { isOceans: true, fact: 'Fear of the ocean is called Thalassophobia.' },
  { isOceans: true, fact: 'The furthest part of the ocean is called Point Nemo.' },
  { isOceans: true, fact: 'About 70 percent of the oxygen we breathe	is produced by the oceans.' },
  { isOceans: true, fact: 'The smallest ocean is the Arctic Ocean.' },
  { isOceans: true, fact: 'Explorers of the sea and its mysteries are sometimes called oceanauts.' },
  { isOceans: true, fact: 'While the words ocean and sea are used interchangeably, a sea is technically a smaller body of salt water that is part of a larger ocean.' },
  {isOceans: true, fact: 'The coldest ocean is the Arctic Ocean.'},
  { isOceans: false, fact: 'The ocean covers 60 percent of the Earths surface.' },
  { isOceans: false, fact: 'The deepest part of the ocean is called The Ultimate Deep.' },
  { isOceans: false, fact: 'Less than 10 percent of the has been explored.' },
  { isOceans: false, fact: 'The ocean is blue because water absorbs colors in the blue part of the light spectrum.' },
  { isOceans: false, fact: 'The ocean floor does not move.' },
  { isOceans: false, fact: 'The ocean is thousands of years old.' },
  { isOceans: false, fact: 'Alligators live in the ocean and prey on fish.' },
  { isOceans: false, fact: 'The Bermuda Triangle is located in a section of the South Atlantic Ocean.' }

]

function getRandomFunFactOcean() {
  return funFactOceans[Math.floor(Math.random() * getRandomFunFactOcean.length)]
}

export {
  getRandomFunFactOcean,
}

const funFactsBirds = [
{isBirds:true, fact:'There are more than 18,000 bird species in the world.'},
{isBirds:true, fact: 'Birds are the only animal with feathers.'},
{isBirds:true, fact:'You can find flamingos in Florida.'},
{isBirds:true,fact: 'The California condor is the largest flying bird in North America.'},
{isBirds:true ,fact: 'Parrots can live over 100 years.'},
{isBirds: true ,fact: 'The largest bird egg belongs to the Ostrich.'},
{isBirds: true ,fact: 'Penguins can not fly but they can swim.'},
{isBirds: true ,fact: 'The national bird of India is a Peacock.'},
{isBirds: true, fact: 'The Elephant and Dodo bird are extinct birds.'},
{isBirds: false, fact: 'Ostriches can fly.'},
{isBirds: false, fact: 'Owls can turn their necks up to 100 degrees.'},
{isBirds: false, fact: 'The smallest bird in the world is the pale-billed flowerpecker.'},
{isBirds:false, fact: 'Humans have better eyesight than eagles.'},
{isBirds:false, fact: 'All birds can fly.'},
{isBirds:false, fact:'Chickens are not birds.'},
{isBirds:false, fact: 'There are four living species of swans.'},
{isBirds: false ,fact: 'Bats are birds.'},
{isBirds: false, fact:'You can find red cardinals all over Europe.'},
{isBirds: false, fact:'Birds are mammals.'}

]

function getRandomFunFactBird() {
  return funFactBirds[Math.floor(Math.random() * getRandomFunFactBird.length)]
}


const fish = [

  
]