const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");
//const currentTown = document.querySelector(".message");

const regNumbersEntered = [];

addRegNumberBtn.addEventListener("click", function () {

	if (regNumberEntered.value == "") {
		message.innerHTML = "Please enter a registration number";
		return;
	}

	const currentRegNumber = regNumberEntered.value.toUpperCase();

	if (currentRegNumber.startsWith("CY") ||
		currentRegNumber.startsWith("CA") ||
		currentRegNumber.startsWith("CJ")) {

		message.innerHTML = "";

		if (!regNumbersEntered.includes(currentRegNumber)) {

			const regNumberElem = document.createElement("div");
			regNumberElem.classList.add("regNumber");
			regNumberElem.innerHTML = currentRegNumber;
			regNumbers.appendChild(regNumberElem);


			//store the reg number to the list
			regNumbersEntered.push(currentRegNumber)

	}else {
		message.innerHTML = "This registarion number already exists.";
	}
}else {
		message.innerHTML = "Invalid registration number entered.";
	}
});
