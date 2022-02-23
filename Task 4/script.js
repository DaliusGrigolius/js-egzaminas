/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = "cars.json";

window.onload = () => {
	fetch(ENDPOINT)
		.then((response) => response.json())
		.then((cars) => {
			console.log(cars);
			renderCards(cars);
		})
		.catch((error) => console.error(error));

	const renderCards = (cars) => {
		const outputDiv = document.getElementById("output");

		cars.forEach((car) => {
			const carCard = createCarCard(car);
			outputDiv.append(carCard);
		});
	};

	const createCarCard = (car) => {
		const carCard = document.createElement("div");
		const brand = document.createElement("h2");
		const ul = document.createElement("ul");

		brand.innerText = car.brand;
		car.models.forEach((model) => {
			const li = document.createElement("li");
			li.innerText = model;
			ul.append(li);
		});

		carCard.setAttribute("class", "card");
		carCard.append(brand, ul);

		return carCard;
	};
};
