/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const button = document.getElementById("btn__element");
const btnState = document.getElementById("btn__state");

let counter = 0;

button.addEventListener("click", () => {
	counter++;
	btnState.innerText = counter;
});
