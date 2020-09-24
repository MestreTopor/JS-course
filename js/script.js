"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
  }
}

start();

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

function rememberMyFilm () {
  for (let i = 0; i <= 1; i++) {
    let film = prompt("Один из последних просмотренных фильмов?","");
    let ocenka = prompt("Насколько оцените его,","");

    if (film == null || film.length > 50 || film.length <= 0) {
      i--;
    } else {
      personalMovie.movies[film] = ocenka;
    }
  }
}

rememberMyFilm();

function detectPersonalLevel() {
  if (personalMovie.count < 10) {

    alert("You watched not a lot movies");
  
  } else if (personalMovie.count <= 10 && personalMovie.count >= 30) {
  
    alert("You are the classic viewer");
  
  } else if (personalMovie.count > 30) {
  
    alert("You are movie-man!");
  
  } else {
  
    alert("Failed!");
  
  }
}

detectPersonalLevel();

function showMyDB() {
  if (!personalMovie.private) {
    console.log(personalMovie);   
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovie.genres[i] = prompt(`Ваш любимый жанр под номером ${(i + 1)}?`);

    if (personalMovie.genres[i] == "" || personalMovie.genres[i] == null) {
      i--;
    }
  }
}

writeYourGenres();