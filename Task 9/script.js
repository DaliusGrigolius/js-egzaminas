/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
	constructor(title, director, budget) {
		this.title = title;
		this.director = director;
		this.budget = budget;

		this.wasExpensive = () =>
			console.log(`was expensive status:`, this.budget > 1e8);
	}
}

const movie = new Movie("Avatar", "James Cameron", 237e6);

movie.wasExpensive();
console.log(movie.title);
console.log(movie.director);
console.log(movie.budget);
