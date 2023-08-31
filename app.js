/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict'

// Код возьмите из предыдущего домашнего задания

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '')

    while (
      personalMovieDB.count === '' ||
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count) ||
      +personalMovieDB.count < 0
    ) {
      alert('Введите числовое значение от ноля!')
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '')
    }
  },
  rememberUserFilms: function () {
    for (let i = 0; i < 2; i++) {
      console.log(i)
      let lastFilm = prompt(
        'Один из последних просмотренных фильмов?',
        'terminator'
      )
      let markLastFilm = prompt('На сколько оцените его?', 5.6)
      if (
        lastFilm !== null &&
        markLastFilm !== null &&
        lastFilm !== '' &&
        markLastFilm !== '' &&
        lastFilm.length < 50
      ) {
        personalMovieDB.movies[lastFilm] = +markLastFilm
      } else {
        console.log('error')
        i--
      }
    }
  },
  detectedNumberUserFilms: function () {
    if (
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count) ||
      personalMovieDB.count === ''
    ) {
      alert('Произошла ошибка')
    } else if (+personalMovieDB.count < 10) {
      alert(
        `Просмотрено довольно мало фильмов: ${+personalMovieDB.count} фильма просмотрено`
      )
    } else if (10 <= +personalMovieDB.count && +personalMovieDB.count <= 30) {
      alert(
        `Вы классический зритель: ${+personalMovieDB.count} фильма просмотрено`
      )
    } else if (personalMovieDB.count > 30) {
      alert(`Вы киноман: просмотрено ${+personalMovieDB.count} фильмов`)
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB)
    } else {
      console.log('Невозможно показать приватную базу данных')
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Какой ваш любимый жанр номер ${i}?`)
      if (genre !== null && genre !== '' && isNaN(genre)) {
        personalMovieDB.genres[i - 1] = genre
      } else {
        alert('Введите название жанра!')
        i--
      }
    }
    personalMovieDB.genres.forEach(function (item, i) {
      console.log(`Любимый жанр #${i + 1} - это ${item}`)
    })
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat === false) {
      personalMovieDB.privat = true
    } else if (personalMovieDB.privat === true) {
      personalMovieDB.privat = false
    }
  },
}

// personalMovieDB.start()
// console.log(personalMovieDB.count)
// console.log(typeof +personalMovieDB.count)
// personalMovieDB.detectedNumberUserFilms()
// personalMovieDB.rememberUserFilms()
// personalMovieDB.showMyDB()
// personalMovieDB.writeYourGenres()
// personalMovieDB.toggleVisibleMyDB()
