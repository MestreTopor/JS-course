"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovie = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

// let i = 0;
// while (i <= 1) {
//   let film = prompt("Один из последних просмотренных фильмов?","");
//   let ocenka = prompt("Насколько оцените его,","");

//   if (film == null || film.length > 50 || film.length <= 0) {
//     continue;
//   } else {
//     personalMovie.movies[film] = ocenka;
//     i++;
//   }
// }

for (let i = 0; i <= 1; i++) {
  let film = prompt("Один из последних просмотренных фильмов?","");
  let ocenka = prompt("Насколько оцените его,","");

  if (film == null || film.length > 50 || film.length <= 0) {
    i--;
  } else {
    personalMovie.movies[film] = ocenka;
  }
}

if (personalMovie.count < 10) {

  alert("You watched not a lot movies");

} else if (personalMovie.count <= 10 && personalMovie.count >= 30) {

  alert("You are the classic viewer");

} else if (personalMovie.count > 30) {

  alert("You are movie-man!");

} else {
  alert("Failed!");
}

console.log(personalMovie);

console.log(personalMovie.count);