let counter = 0;

function mode() {

  if (counter % 2 == 0) { // dark mode
    const darkSound = new Audio("light.mp3");
    darkSound.play();
    document.body.style.color = "#C6CAED";
    document.body.style.backgroundColor = "#0d0c1d";
    document.getElementById("navbar").style.color = "#C6CAED";
    document.getElementById("navbar").style.backgroundColor = "#0d0c1d";

    const links = document.getElementsByClassName("link");
    console.log(links);
    for (const item of links) {
      item.style.color = "#C6CAED";
    }

    document.getElementById("welcome").style.color = "#C6CAED";
    document.getElementById("welcome").style.backgroundColor = "#161b33";

    document.getElementById("features").style.color = "#C6CAED";
    document.getElementById("features").style.backgroundColor = "#474973";

    const cards = document.getElementsByClassName("card");
    for (const item of cards) {
      item.style.color = "#C6CAED";
      item.style.backgroundColor = "#161b33";
    }

    document.getElementById("testimonials").style.color = "#C6CAED";
    document.getElementById("testimonials").style.backgroundColor = "#0d0c1d";

    const testimonalCards = document.getElementsByClassName("testimonial-card");
    for (const item of testimonalCards) {
      item.style.color = "#C6CAED";
      item.style.backgroundColor = "#161b33";
    }

    document.getElementById("footer").style.color = "#C6CAED";
    document.getElementById("footer").style.backgroundColor = "#161b33";

    const h4s = document.getElementsByTagName('h4');
    for (const item of h4s) {
      item.style.color = "#C6CAED";
    }

    document.getElementById("mode").innerText = "Light ☀️";
    counter = counter + 1;
  } else { // light mode

    document.body.style.color = "#333";
    document.body.style.backgroundColor = "white";
    document.getElementById("navbar").style.color = "#333";
    document.getElementById("navbar").style.backgroundColor = "white";

    const links = document.getElementsByClassName("link");
    console.log(links);
    for (const item of links) {
      item.style.color = "#333";
    }

    document.getElementById("welcome").style.color = "#333";
    document.getElementById("welcome").style.backgroundColor = "#e5edff";

    document.getElementById("features").style.color = "#333";
    document.getElementById("features").style.backgroundColor = "#f0f0f0";

    const cards = document.getElementsByClassName("card");
    for (const item of cards) {
      item.style.color = "#333";
      item.style.backgroundColor = "white";
    }

    document.getElementById("testimonials").style.color = "#333";
    document.getElementById("testimonials").style.backgroundColor = "white";

    const testimonalCards = document.getElementsByClassName("testimonial-card");
    for (const item of testimonalCards) {
      item.style.color = "#333";
      item.style.backgroundColor = "#f7f7f7";
    }

    document.getElementById("footer").style.color = "#333";
    document.getElementById("footer").style.backgroundColor = "#f9f9f9";

    const h4s = document.getElementsByTagName('h4');
    for (const item of h4s) {
      item.style.color = "#555";
    }

    document.getElementById("mode").innerText = "Light ☀️";
    document.getElementById("mode").innerText = "Dark 🌙";
    counter = counter + 1;
  }
}
