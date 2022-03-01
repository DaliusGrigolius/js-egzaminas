/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(num1, num2) {
	this.num1 = num1;
	this.num2 = num2;

	this.sum = (num1, num2) => {
		return num1 + num2;
	};
	this.subtraction = (num1, num2) => {
		return num1 - num2;
	};
	this.multiplication = (num1, num2) => {
		return num1 * num2;
	};
	this.division = (num1, num2) => {
		return num1 / num2;
	};
}

const numbers = new Calculator();

console.log(numbers.sum(2, 2));
console.log(numbers.subtraction(2, 2));
console.log(numbers.multiplication(2, 2));
console.log(numbers.division(2, 2));
