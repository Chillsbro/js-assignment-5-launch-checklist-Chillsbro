// Write your JavaScript code here!
// import { myFetch } from "/.scriptHelper.js";

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");


window.addEventListener("load", function () {
  const launchForm = document.querySelector('form');
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planetChosen = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        planetChosen.name,
        planetChosen.diameter,
        planetChosen.star,
        planetChosen.distance,
        planetChosen.moons,
        planetChosen.image
      );
    });
    
    launchForm.addEventListener("submit", function(e) {
       
        
        e.preventDefault();
    
    });
});