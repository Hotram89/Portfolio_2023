import { projectProvider } from "../data/projectProvider.js";

const smallList = document.querySelector(".smallList");
const smallMenu = document.querySelector(".smallMenu");
const smallMenuSpan = document.querySelector(".smallMenu span");

//////// DOM LISTENER ///////////////////

smallMenu.addEventListener("click", (e) => {
  openMenu();
});

function openMenu() {
  smallList.classList.toggle("visible");
  smallMenuSpan.classList.toggle("hide");
}

////////// PROVIDE PROJECTS INTO CONTAINER //////////

const container = document.querySelector(".projectsContainer");

const projets = projectProvider();
console.log(projets);
let htmlList = "";

projets.forEach((element) => {
  console.log(element);
  let technoList = element.technos;
  let technoElt = "";
  technoList.forEach((el) => {
    technoElt += el + " ";
  });

  htmlList += `<a href="${element.link}" target="_blank">
  <figure class="card " id=${element.id}>
      <img class="projectPicture" src="./assets/${
        element.img
      }" alt="booki preview" />
      <figcaption class="screen ${element.type}">${element.name} 
      <div class="techno"><span>${technoElt + " "}</span>
          </div>
      </figcaption>
  </figure>
</a>`;
});

container.innerHTML = htmlList;
