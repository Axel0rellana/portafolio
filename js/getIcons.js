/*** Data ***/
const icons = [
  {
    imgSrc: "assets/icons/html.png",
    imgAlt: "HTML",
    imgTitle: "HTML",
  },
  {
    imgSrc: "assets/icons/css.png",
    imgAlt: "CSS",
    imgTitle: "CSS",
  },
  {
    imgSrc: "assets/icons/javascript.png",
    imgAlt: "JavaScript",
    imgTitle: "JavaScript",
  },
  {
    imgSrc: "assets/icons/json.png",
    imgAlt: "JSON",
    imgTitle: "JSON",
  },
  {
    imgSrc: "assets/icons/jquery.png",
    imgAlt: "Jquery",
    imgTitle: "Jquery",
  },
  {
    imgSrc: "assets/icons/vscode.png",
    imgAlt: "VS Code",
    imgTitle: "VS Code",
  },
  {
    imgSrc: "assets/icons/npm.png",
    imgAlt: "NPM",
    imgTitle: "NPM",
  },
  {
    imgSrc: "assets/icons/vite.png",
    imgAlt: "Vite",
    imgTitle: "Vite",
  },
  {
    imgSrc: "assets/icons/git.png",
    imgAlt: "Git",
    imgTitle: "Git",
  },
  {
    imgSrc: "assets/icons/markdown.png",
    imgAlt: "Markdown",
    imgTitle: "Markdown",
  },
  {
    imgSrc: "assets/icons/tailwind.png",
    imgAlt: "Tailwind CSS",
    imgTitle: "Tailwind CSS",
  },
  {
    imgSrc: "assets/icons/bootstrap.png",
    imgAlt: "Bootstrap",
    imgTitle: "Bootstrap",
  },
  {
    imgSrc: "assets/icons/heroicons.png",
    imgAlt: "Heroicons",
    imgTitle: "Heroicons",
  },
  {
    imgSrc: "assets/icons/react.png",
    imgAlt: "React.js",
    imgTitle: "React.js",
  },
  {
    imgSrc: "assets/icons/react-icons.png",
    imgAlt: "React icons",
    imgTitle: "React icons",
  },
  {
    imgSrc: "assets/icons/reactRouter.png",
    imgAlt: "React Router",
    imgTitle: "React Router",
  },
  {
    imgSrc: "assets/icons/next.png",
    imgAlt: "Next",
    imgTile: "Next",
  },
  {
    imgSrc: "assets/icons/locOS.png",
    imgAlt: "LOC-OS",
    imgTitle: "LOC-OS",
  },
  {
    imgSrc: "assets/icons/terminal.png",
    imgAlt: "Terminal",
    imgTitle: "Terminal",
  },
  {
    imgSrc: "assets/icons/xampp.png",
    imgAlt: "Xampp",
    imgTitle: "Xampp",
  },
  {
    imgSrc: "assets/icons/php.png",
    imgAlt: "PHP",
    imgTitle: "PHP",
  },
  {
    imgSrc: "assets/icons/mysql.png",
    imgAlt: "MySQL",
    imgTitle: "MySQL",
  },
  {
    imgSrc: "assets/icons/composer.png",
    imgAlt: "Composer",
    imgTitle: "Composer",
  },
  {
    imgSrc: "assets/icons/laravel.png",
    imgAlt: "Laravel",
    imgTitle: "Laravel",
  },
];

const loader = document.getElementById("loading4");
const container = document.getElementById("techlogos");

const renderIcons = () => {
  container.innerHTML = "";

  icons.forEach((icon) => {
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("tech-logo", "fade-in");

    const img = document.createElement("img");
    img.classList.add("pointer-events-none");
    img.src = icon.imgSrc;
    img.alt = icon.imgAlt;
    img.title = icon.imgTitle;
    logoDiv.appendChild(img);
    container.appendChild(logoDiv);

    logoDiv.addEventListener("animationend", () => {
      logoDiv.classList.remove("fade-in");
      logoDiv.classList.add("scale-on");
    });
  });
};

/*** RenderIcons ***/
export const showLoaderAndRenderIcons = () => {
  loader.style.display = "flex";
  container.style.display = "none";

  setTimeout(() => {
    loader.style.display = "none";
    container.style.display = "grid";
    renderIcons();
  }, 2000);
};
