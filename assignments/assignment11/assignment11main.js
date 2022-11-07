const movieButton = document.querySelector('.new-movie');
const end = 'https://ghibliapi.herokuapp.com/films';

movieButton.addEventListener('click', getFilm);
window.addEventListener('reload', getFilm);

async function getFilm() {
  try {
    console.log("getFilm works");
    let text = await fetch(end);
    let respond = await text.text();
    let json_response = JSON.parse(respond);

    const randomFilm =
      json_response[Math.floor(Math.random() * json_response.length)];

    console.log(randomFilm.title);

    displayFilm(randomFilm.title);
  } 
  catch (err) {
    console.log(err);
    alert(err);
  }
}

function displayFilm(film) {
    document.getElementById("js-movie-text").textContent = film;
}