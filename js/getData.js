/*** Data ***/
export const projects = [
  {
    url: "https://password-generator-web-page.netlify.app/",
    imgSrc: "assets/images/passwordGenerator.png",
    imgAlt: "Password Generator",
  },
  {
    url: "https://expense-tracker-tool.netlify.app/",
    imgSrc: "assets/images/expenseTracker.png",
    imgAlt: "Expense Tracker Tool",
  },
  {
    url: "https://wikipedia-api-search-app.netlify.app/",
    imgSrc: "assets/images/wikipediaSearchApp.png",
    imgAlt: "Wikipedia Search App",
  },
  {
    url: "https://tv-maze-show-app.netlify.app/#/",
    imgSrc: "assets/images/tvshows.png",
    imgAlt: "Shows de TV",
  },
  {
    url: "https://hulu-clone-ui-ux.netlify.app/",
    imgSrc: "assets/images/huluClone.png",
    imgAlt: "Hulu Clone",
  },
  {
    url: "https://youtube-clone-ui-ux.netlify.app/",
    imgSrc: "assets/images/youtubeClone.png",
    imgAlt: "Youtube Clone",
  },
  {
    url: "https://frontend-mentor-webs.netlify.app/",
    imgSrc: "assets/images/frontendMentorProjects.png",
    imgAlt: "Frontend Mentor Projects",
  },
];

export const interfaces = [
  {
    url: "https://gpt3-modern-ui-ux-web-page.netlify.app/",
    imgSrc: "assets/images/GPT3.png",
    imgAlt: "GPT-3",
  },
  {
    url: "https://gericht-restaurant-ui-ux.netlify.app/",
    imgSrc: "assets/images/gericht.png",
    imgAlt: "Gericht Restaurant",
  },
  {
    url: "https://hoobank-web-page.netlify.app/",
    imgSrc: "assets/images/hooBank.png",
    imgAlt: "HooBank",
  },
  {
    url: "https://modern-ui-metaversus.netlify.app/",
    imgSrc: "assets/images/metaversus.png",
    imgAlt: "Metaversus",
  },
  {
    url: "https://nike-clone-ui.netlify.app/",
    imgSrc: "assets/images/nikeClone.png",
    imgAlt: "Nike Clone",
  },
  {
    url: "https://hilink-modern-ui.netlify.app/",
    imgSrc: "assets/images/hilink.png",
    imgAlt: "Hilink",
  },
  {
    url: "https://sunnyside-agency-ui.netlify.app/",
    imgSrc: "assets/images/sunnyside.png",
    imgAlt: "Sunnyside Agency",
  },
  {
    url: "https://blogr-ui.netlify.app/",
    imgSrc: "assets/images/blogr.png",
    imgAlt: "Blogr",
  },
  {
    url: "https://crowdfund-ui-ux.netlify.app/",
    imgSrc: "assets/images/crowdfund.png",
    imgAlt: "Crowdfund",
  },
  {
    url: "https://loopstudios-ui.netlify.app/",
    imgSrc: "assets/images/loopstudios.png",
    imgAlt: "Loopstudios",
  },
  {
    url: "https://brainwave-modern-ui-ux.netlify.app/",
    imgSrc: "assets/images/brainwave.png",
    imgAlt: "Brainwave",
  },
  {
    url: "https://iphone-pro-ui.netlify.app/",
    imgSrc: "assets/images/iphone.png",
    imgAlt: "Iphone",
  },
];

export const contributions = [
  {
    url: "https://lasrecetasdemama2024.netlify.app/",
    imgSrc: "assets/images/lasRecetasDeMama.png",
    imgAlt: "Las recetas de mamá",
  },
];

/*** Get-Data ***/
export const getData = (containerElement, loadingSelector, data) => {
  const container = document.getElementById(containerElement);
  const loadingElement = document.getElementById(loadingSelector);

  container.classList.add("none");
  loadingElement.classList.remove("none");

  const projectElements = data.map((project) => {
    const link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener";

    const img = document.createElement("img");
    img.src = project.imgSrc;
    img.alt = project.imgAlt;
    img.draggable = "false";

    link.appendChild(img);
    return link;
  });

  Promise.all(
    projectElements.map(
      (element) =>
        new Promise((resolve) => {
          element.querySelector("img").onload = resolve;
        })
    )
  ).then(() => {
    setTimeout(() => {
      loadingElement.style.opacity = "0";
      container.style.opacity = "1";
      loadingElement.classList.add("none");
      container.classList.remove("none");
    }, 1000);
  });

  projectElements.reverse();
  projectElements.forEach((element) => container.appendChild(element));
};
