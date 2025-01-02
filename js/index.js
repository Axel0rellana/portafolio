/*** Imports ***/
import { projects, interfaces, contributions, getData } from "./getData.js";
import { toggleMenu } from "./toggleMenu.js";
import { contactForm } from "./contactForm.js";
import { carousel } from "./carousel.js";
import { showLoaderAndRenderIcons } from "./getIcons.js";
/*** Imports ***/

toggleMenu();
showLoaderAndRenderIcons();
contactForm();
getData("projects", "loading", projects);
getData("interfaces", "loading2", interfaces);
getData("contributions", "loading3", contributions);
carousel(".carousel", document.querySelectorAll(".wrapper i"), "img");
carousel(".carousel2", document.querySelectorAll(".wrapper2 i"), "img");
carousel(".carousel3", document.querySelectorAll(".wrapper3 i"), "img");
