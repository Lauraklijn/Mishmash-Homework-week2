const infoContainer = document.getElementById("infoContainer");
const infoContainer2 = document.getElementById("infoContainer2");
const newCharacter = document.getElementById("newCharacterButton");

fetch("https://swapi.co/api/people/1/")
  .then(response => response.json())
  .then(myJson => {
    infoContainer.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
  });

function getDarthVader() {
  fetch("https://swapi.co/api/people/4/")
    .then(response => response.json())
    .then(myJson => {
      infoContainer2.innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
    });
}
newCharacter.addEventListener("click", function() {
  event.preventDefault();
  getDarthVader();
});
