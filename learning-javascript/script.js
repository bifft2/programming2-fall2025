const myName = "Ms. Ifft";
let favoriteNumber = 7;

console.log(myName);
console.log(favoriteNumber);

console.log("My name is " + myName + " and my favorite number is " + favoriteNumber);

console.log("The sum of my favorite numbers is " + favoriteNumber + favoriteNumber); 
console.log(favoriteNumber + favoriteNumber + " is the sum of my favorite numbers");
console.log("The sum of my favorite numbers is " + (favoriteNumber + favoriteNumber));


function reveal() {
	// alert("test!");
	const mySpan = document.getElementById("name");
	mySpan.innerText = myName;
}