const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const insertx = ["Ralphie", "Chip", "Benny the Bull"]
const inserty = ["Chicago", "Folsom Field", "the train car"]
const insertz = ["evaporated", "blew away", "turned into a rabbit and hopped away"]

storyText = "It was 100 fahrenheit outside, so" + xItem; "went for a swim down the creek. When they got to" + yItem;", they stared in horror for a few hours, then" + zItem;". Bob saw nothing, but was not surprised when they heard — " + xItem; " weighs 1000 pounds, and it was a hot day."

randomize.addEventListener('click', result);

function result() {
    newStory = storyText;
    xItem = randomValueFromArray(insertx);
    yItem = randomValueFromArray(inserty);
    zItem = randomValueFromArray(insertz);

  if(customName.value !== '') {
    const name = customName.value;
    replaceAll('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(1000/14);
    const temperature =  Math.round((100-32)*(5/9));
    replaceAll('300 pounds',weight) + " stone";
    replaceAll('94 fahrenheit',temperature) + " centigrade";
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
