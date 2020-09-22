"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovie = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const film = prompt("Один из последних просмотренных фильмов?","");
const ocenka = prompt("Насколько оцените его,","");

personalMovie.movies[film] = ocenka;

console.log(personalMovie);