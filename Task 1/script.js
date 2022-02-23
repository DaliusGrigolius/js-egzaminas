/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form");

const handleSubmit = (e) => {
	e.preventDefault();
	const input = document.getElementById("search");
	const outputDiv = document.getElementById("output");

	const lbResult = Number(input.value) * 2.2046;
	const gResult = Number(input.value) / 0.001;
	const ozResult = Number(input.value) * 35.274;

	outputDiv.innerHTML = `${input.value}kg converted to:</br><br> LBS(svarai) = ${lbResult};</br> GRAMS(gramai) = ${gResult};</br> OUNCES(uncijos) = ${ozResult}.`;
	outputDiv.style =
		"text-align: center; font-family: comic-sans; font-weight: bolder; background-color: #eee";
};

form.addEventListener("submit", handleSubmit);
