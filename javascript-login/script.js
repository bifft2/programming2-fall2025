let attempts = 0

function login() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	// console.log(username);
	// console.log(password);

	let correct_username = "helen-akl";
	let correct_password = "lioneliscool";

	attempts = attempts + 1;

	if(username == correct_username && password == correct_password) {
		// window.location.href = "https://media.newyorker.com/photos/590965162179605b11ad602e/master/pass/130722_r23742_g2048.jpg";
		document.getElementById("alert").innerText = "That is correct, you are in!";
		document.getElementById("alert").style.color = "green";
	} else if (attempts >= 3) {
		document.getElementById("alert").innerText = "You ran out of attempts!";
		document.getElementById("login").disabled = true;
		document.getElementById("alert").style.color = "red";
	} else {
		document.getElementById("alert").innerText = "Either your username or password is incorrect. Try again.";
		document.getElementById("alert").style.color = "gold";
	}
}