function namegen() {
	// get the values the user entered
	let month = document.getElementById("month").value;
	let age = document.getElementById("age").value;
	let color = document.getElementById("color").value;

	let nameFirst = "";
	let nameSecond = "";
	let nameThird = "";


	// generate first part of name
	if (month == "january") {
		nameFirst = "Do";
		document.getElementById("result").style.color = "lightblue";
	} else if (month == "february") {
		nameFirst = "Re";
		document.getElementById("result").style.color = "lightblue";
	} else if (month == "march") {
		nameFirst = "Mi";
		document.getElementById("result").style.color = "lightgreen";
	} else if (month == "april") {
		nameFirst = "Fa";
		document.getElementById("result").style.color = "lightgreen";
	} else if (month == "may") {
		nameFirst = "So";
		document.getElementById("result").style.color = "lightgreen";
	} else if (month == "june") {
		nameFirst = "La";
		document.getElementById("result").style.color = "lightpink";
	} else if (month == "july") {
		nameFirst = "Ti";
		document.getElementById("result").style.color = "lightpink";
	} else if (month == "august") {
		nameFirst = "Do";
		document.getElementById("result").style.color = "lightpink";
	} else if (month == "september") {
		nameFirst = "Re";
		document.getElementById("result").style.color = "lightsalmon";
	} else if (month == "october") {
		nameFirst = "Mi";
		document.getElementById("result").style.color = "lightsalmon";
	}else if (month == "november") {
		nameFirst = "Fa";
		document.getElementById("result").style.color = "lightsalmon";
	}else if (month == "december") {
		nameFirst = "So";
		document.getElementById("result").style.color = "lightblue";
	} 


	// generate second part of name
	if (age < 15) {
		nameSecond = "Bubba";
	} else if (age < 40) {
		nameSecond = "Bip";
	} else {
		nameSecond = "Bap";
	}
	document.getElementById("result").style.fontSize = (age * 2) + "px";

	// generate third part of name
	if (color == "pink" || color == "purple" || color == "blue" || color == "green") {
		nameThird = "of Paris";
		document.getElementById("result").style.backgroundColor = "DarkSalmon";
	}
	if (color =="yellow" || color == "orange" || color == "red") {
		nameThird = "of Denmark";
		document.getElementById("result").style.backgroundColor = "brown";
	}

	// display name
	const result = nameFirst + " " + nameSecond + " " + nameThird;
	document.getElementById("result").innerText = result;
}



// december - feb: blue
// march - may: green
// june - august: yellow
// september - november: orange

