 function makeStory() {
     const noun = document.getElementById("nounInput").value;
     const verb = document.getElementById("verbInput").value;
     const food = document.getElementById("foodInput").value;
     const number = document.getElementById("numberInput").value;
     const adjective = document.getElementById("adjectiveInput").value;
     const adjective2 = document.getElementById("adjective2Input").value;
     const verb2 = document.getElementById("verb2Input").value;
     const place = document.getElementById("placeInput").value;
     const adverb = document.getElementById("adverbInput").value;
     const adverb1 = document.getElementById("adverb1Input").value;



     // simple story using the noun
     const story = "Once upon a time, there was a " + noun + ". This " + noun + " loved to " + verb + " very " + adverb1 + ". One day the " + noun + " ate " + number + " " + food + "s that were very " + adjective + ". The " + food + " looked " + adjective2 + " and made the " + noun + "s stomach " + verb2 + ". Since the " + noun + " loves to " + verb + ", the " + noun + " " + verb + "s to " + place + " very " + adverb;

     document.getElementById("storyOutput").innerText = story;
 }