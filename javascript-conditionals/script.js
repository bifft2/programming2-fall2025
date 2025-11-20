function agerator() {
	let age = document.getElementById("age").value;

	// if (age == 10) {
	// 	alert("You're the best age!!")
	// }
	// else { // we know we are not 10!
	// 	if(age > 10) {
	// 		alert("You were the best age " + (age-10) + " years ago.")
	// 	} else { // you must be less than 10
	// 		alert("You will be the best age in " + (10-age) + " years.")
	// 	}
	// }
	let message1 = document.getElementById("message");
	if (age == 10) {
		message1.innerText = "You are the best age!";
	} else if (age > 10) {
		message1.innerText = "You were the best age " + (age-10) + " years ago.";
	} else if (age < 0) {
		message1.innerText = "Boi, that's not possible!";
	} else {
		message1.innerText = "You will be the best age in " + (10-age) + " years.";
	}

}