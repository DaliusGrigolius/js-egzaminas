/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
	this.a = a;
	this.b = b;

	this.sum = (a, b) => {
		return this.a + this.b;
	};
	this.subtraction = (a, b) => {
		return this.a - this.b;
	};
	this.multiplication = (a, b) => {
		return this.a * this.b;
	};
	this.division = (a, b) => {
		return this.a / this.b;
	};
}

const numbers = new Calculator(5, 5);

console.log(numbers.sum());
console.log(numbers.subtraction());
console.log(numbers.multiplication());
console.log(numbers.division());
