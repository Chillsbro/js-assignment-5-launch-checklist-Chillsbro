// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  image
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  let missionDiv = document.getElementById("missionTarget");
  missionDiv.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${image}"/>
 `;
}

function validateInput(testInput) {
  const numInput = Number(testInput);
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(numInput)) {
    return "Not a number";
  } else if (!isNaN(numInput)) {
    return "Is a number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");

  pilotStatus.innerHTML = `${pilot}`;
  copilotStatus.innerHTML = `${copilot}`;

  const launchStatus = document.getElementById("launchStatus");

  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
      validateInput(fuelLevel === "Empty") || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
  }
   else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number") {
        alert("Pilots cannot be numbers, please input a name")
    }
    else if (validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
        alert("Fuel Level and Cargo Mass must be a number")
    }
  else if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Not enough fuel";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
  } else if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    cargoStatus.innerHTML = "Too much mass, shuttle unable to launch";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "#C7254E";
  } else {
    launchStatus.style.color = "#419F6A";
    launchStatus.innerHTML = "Shuttle is ready for launch.";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
