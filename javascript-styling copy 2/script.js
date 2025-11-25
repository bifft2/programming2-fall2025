let counter = 0;

function mode() {
  
  document.body.classList.toggle("dark");

  if (counter % 2 == 0) { // dark mode
    const darkSound = new Audio("light.mp3");
    darkSound.play();
    document.getElementById("mode").innerText = "Light ☀️";
    counter = counter + 1;
  } else { // light mode
    document.getElementById("mode").innerText = "Dark 🌙";
    counter = counter + 1;
  }
}
