"use strict";

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
//   }
// }

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
  },
  rememberMyFilm: () => {
    for (let i = 0; i <= 1; i++) {
      let film = prompt("Один из последних просмотренных фильмов?","");
      let ocenka = prompt("Насколько оцените его,","");
  
      if (film == null || film.length > 50 || film.length <= 0) {
        i--;
      } else {
        personalMovieDB.movies[film] = ocenka;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
  
      alert("You watched not a lot movies");
    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    
      alert("You are the classic viewer");
    
    } else if (personalMovieDB.count > 30) {
    
      alert("You are movie-man!");
    
    } else {
    
      alert("Failed!");
        
    }
  },
  showMyDB: () => {
    if (!personalMovieDB.private) {
      console.log(personalMovieDB);   
    }
  },
  writeYourGenres: () => {
    for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${(i + 1)}?`);
  
      if (personalMovieDB.genres[i] == "" || personalMovieDB.genres[i] == null) {
        i--;
      }
    }

    personalMovieDB.genres.forEach((item, key) => {
      console.log(`Любимый жанр ${key + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: () => {
    personalMovieDB.private = personalMovieDB.private ? false : true; 
  }
};

// console.log(personalMovieDB.private);
// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB.private);
// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB.private);

personalMovieDB.start();

// let i = 0;
// while (i <= 1) {
//   let film = prompt("Один из последних просмотренных фильмов?","");
//   let ocenka = prompt("Насколько оцените его,","");

//   if (film == null || film.length > 50 || film.length <= 0) {
//     continue;
//   } else {
//     personalMovieDB.movies[film] = ocenka;
//     i++;
//   }
// }

personalMovieDB.rememberMyFilm();

personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();

console.log(personalMovieDB);