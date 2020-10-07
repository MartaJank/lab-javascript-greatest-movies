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
      if (currentValue.rate){
        return acc + currentValue.rate / movies.length
      } else {
        return acc;
      }
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
      if(a.year === b.year) {
        return a.title.localeCompare(b.title);
      } else {
        return a.year - b.year
      }
      
    })
    return order.concat()
  }
  
  orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let titles = movies.map(function(e) {
        return e.title;
    })
    if (movies.length > 20) {
      return [...new Set(titles)].sort().slice(0, 20);
    } else {
      return [...new Set(titles)].sort();
    }
}

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

  return movies.slice(0).map(function(movie) {
      let timeString = movie.duration
      let splitString = timeString.split(' ')
      let timeHours = 0;
      let timeMinutes = 0;

      if (splitString.length === 1) {
          if (splitString[0].includes('h')) {
              timeHours = splitString[0].replace('h', '') * 60
          } else if (splitString[0].includes('min')) {
              timeMinutes = splitString[0].replace('min', '') * 1
          }
      } else {
          timeHours = splitString[0].replace('h', '') * 60
          timeMinutes = splitString[1].replace('min', '') * 1
      }

      let totalTimeMinutes = timeHours + timeMinutes
      return { duration: totalTimeMinutes }
  })
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  if (movies.length === 0) {
      return null
  }

  let rating = 0;
  let yearRates = {}

  movies.forEach(movie => {
      yearRates[movie.year] ? yearRates[movie.year].push(movie.rate) : (yearRates[movie.year] = [], yearRates[movie.year].push(movie.rate))
  })

  Object.keys(yearRates).forEach(function(rate) {
      let total = 0;
      let count = 0;
      if (yearRates[rate].length > 0) {
          for (x = 0; x < yearRates[rate].length; x++){
              total += yearRates[rate][x]
              count++
          }
      }
      yearRates[rate] = Number(parseFloat(total / count).toFixed(2))
  })

  let highest = 0
  let year = 0;
  let avgRate = 0;

  Object.keys(yearRates).forEach(function(element) {
      if (yearRates[element] > highest) {
          highest = yearRates[element]
          year = element
          avgRate = yearRates[element]
      } else if (yearRates[element] == highest) {
          if (year > element) {
              year = element 
          }
      }
  })

  return `The best year was ${year} with an average rate of ${avgRate}`
}

bestYearAvg(movies)