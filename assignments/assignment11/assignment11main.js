const movieButton = document.querySelector('.new-movie');
const end = 'https://ghibliapi.herokuapp.com/films/{id}';

quoteButton.addEventListener('click', getMovie);
window.addEventListener('reload', getMovie);

async function getMovie() {
    try {
      console.log("getMovie works");
      let text = await fetch(end);
      let respond = await text.text();
      let json_response = JSON.parse(respond);
      console.log(json_response);
      console.log(json_response["message"]);
  
      displayMovie(json_response["message"]);
    } 
    catch (err) {
      console.log(err);
      alert(err);
    }
}

function displayMovie(movie) {
    document.getElementById("js-movie-text").textContent = movie;
}