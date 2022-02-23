/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const button = document.getElementById("btn");
const divOutput = document.getElementById("output");
const outputParagraph = document.getElementById("message");

const renderData = () => {
	fetch(ENDPOINT)
		.then((response) => response.json())
		.then((arr) => {
			console.log(arr);
			createCards(arr);
		});
};

const createCards = (arr) => {
	outputParagraph.remove();

	arr.forEach((user) => {
		const cardContainer = document.createElement("div");
		cardContainer.className = "card-container";

		const userLoginName = document.createElement("h3");
		userLoginName.innerText = user.login;

		const userAvatar = document.createElement("img");
		userAvatar.src = user.avatar_url;
		userAvatar.style = "border-radius: 50%; height: 100px";

		cardContainer.append(userLoginName, userAvatar);
		divOutput.append(cardContainer);
	});
};

button.addEventListener("click", renderData);
