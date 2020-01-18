const infoContainer = document.getElementById("infoContainer");
const infoContainer2 = document.getElementById("infoContainer2");
const newCharacter = document.getElementById("newCharacterButton");

// fetch example - works in the browser but not in node
// (fetch is not a part of node.js by default)
fetch("https://swapi.co/api/people/1/") // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => {
    // display data in the browser
    infoContainer.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
  });

function getDarthVader() {
  fetch("https://swapi.co/api/people/4/") // make the request
    .then(response => response.json()) // convert response to json
    .then(myJson => {
      // display data in the browser
      infoContainer2.innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
    });
}
newCharacter.addEventListener("click", function() {
  event.preventDefault();
  getDarthVader();
});
