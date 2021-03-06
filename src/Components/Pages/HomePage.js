import { Redirect } from "../Router/Router";
import logoNavbar from "../../img/FindMyDraw.png";
import { getSessionObject } from "../../utils/session";

const HomePage = () => {
  const page = document.querySelector("#page");
  let homePage;
  // Get the user object from the localStorage
  let user = getSessionObject("user");
  if (!user) {
    homePage = `
    <div class="row" id="homePage">
      <div class="col"></div>
        <div class="col text-center">
          <img id="logo" class="rounded mx-auto d-block" src="${logoNavbar}" alt="logo">
          <h1 id="titleHomePage" class="display-2 mb-2 mb-md-5 text-center">Let's Find The Drawings</h1>
          <button type="button" id="playButton" class="btn btn-primary homepage_play_button mt-5" href="#" data-uri="/login" ">Jouer</button>
        </div>
      <div class="col"></div>
    </div>`;
  } else {
    homePage = `
    <div class="row" id="homePage">
      <div class="col"></div>
      <div class="col text-center">
        <img id="logo" class="rounded mx-auto d-block" src="${logoNavbar}" alt="logo">
        <h1 id="titleHomePage" class="display-2 mb-2 mb-md-5 text-center">Let's Find The Drawings</h1>
        <button type="button" class="btn btn-primary homepage_play_button mt-5" href="#" data-uri="/room"">Créer une partie</button>
        <button type="button" class="btn btn-primary homepage_play_button mt-5" href="#" data-uri="/joinRoom"">Rejoindre une partie</button>
      </div>
      <div class="col"></div>
    </div>`;
  }
  page.innerHTML = homePage;

  //faire fonctionner le redirect
  page.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (e) => {
      Redirect(e.target.dataset.uri);
    });
  });
};

/***************************************************************************************
 *    Title: Animated Background For Website Header Using CSS & Vanilla Javascript | CSS Animation Effects
 *    Author: Online Tutorials
 *    Date: 4/12/2021
 *    Availability: https://www.youtube.com/watch?v=LTMNdqsFh9M
 *
 ***************************************************************************************/

const colors = ["#2196f3", "#e91e63", "#ffeb3b", "#74ff1d"];

function createSquare() {
  const page = document.querySelector("#page");
  const square = document.createElement("span");
  square.className = "animation-background";

  let pageWidth = page.clientWidth;
  let pageHeight = page.clientWidth;

  var size = Math.random() * 20;

  square.style.width = 20 + size + "px";
  square.style.height = 20 + size + "px";

  square.style.top = Math.random() * pageHeight + "px";
  square.style.left = Math.random() * pageWidth + "px";

  const bg = colors[Math.floor(Math.random() * colors.length)];

  square.style.background = bg;

  page.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 50000);
}

setInterval(createSquare, 50);


export default HomePage;
