/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
	make: "audi",
	model: "A6",
	year: 2005,
	color: "white",
};

function showObjectKeys(audi) {
	const objKeys = Object.keys(audi);
	return objKeys;
}
console.log(showObjectKeys(audi));
