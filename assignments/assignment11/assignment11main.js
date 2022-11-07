const movieButton = document.querySelector('.new-movie');
const end = 'https://ghibliapi.herokuapp.com/films/{id}';

movieButton.addEventListener('click', getFilm);
window.addEventListener('reload', getFilm);

async function getFilm() {
    try {
      console.log("getFilm works");
      let text = await fetch(end);
      let respond = await text.text();
      let json_response = JSON.parse(respond);
      console.log(json_response);
      console.log(json_response["message"]);
  
      displayFilm(json_response["message"]);
    } 
    catch (err) {
      console.log(err);
      alert(err);
    }
}

function displayFilm(film) {
    document.getElementById("js-movie-text").textContent = film;
}