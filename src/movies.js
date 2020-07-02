// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    let directors = movies.map(function(e) {
        return e.director;
    }) 
    return [...new Set(directors)];
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let dramaSpielberg = movies.filter(x => x.genre.includes("Drama") && x.director === "Steven Spielberg") 
   return dramaSpielberg.length;
}

howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    let avrg = movies.reduce(function(acc, currentValue) {
      return acc + currentValue.rate / movies.length
    }, 0)
    return Number(avrg.toFixed(2))
  }
  
  ratesAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaAverage = movies.filter(x => x.genre.includes("Drama"))
    let avrg = dramaAverage.reduce(function(acc, currentValue) {
      return acc + currentValue.rate / dramaAverage.length
    }, 0)
    return Number(avrg.toFixed(2))
  }
  
  dramaMoviesRate(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let order = movies.sort(function(a, b) {
      return a.year - b.year
    })
    return order.concat()
  }
  
  orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let titles = movies.map(function(e) {
        return e.title;
    }) 
    return [...new Set(titles)];
}

orderAlphabetically(movies).sort().slice(0, 20);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
