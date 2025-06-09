var typed = new Typed("#element", {
  strings: [
    "Rahi",
    "Software Developer",
    "MERN Expert",
    "Tech Enthusiast",
    "Code Lover",
  ],
  typeSpeed: 70,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  showCursor: true,
  cursorChar: "|",
  smartBackspace: true,
});

/* Nav Link Active */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

/* Logos Section */
const logoMap = {
  HTML: "./assests/logos/html.png",
  CSS: "./assests/logos/css.png",
  JavaScript: "./assests/logos/js.png",
  "MERN Stack": "./assests/logos/mern.png",
  "Tailwind CSS": "./assests/logos/tailwind.png",
  "Git & Github": "./assests/logos/git.png",
};

const skills = document.querySelectorAll(".skill");
const logo = document.getElementById("skill-logo");

skills.forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    const skillTitle = skill.querySelector("h3").innerText.trim();
    const logoSrc = logoMap[skillTitle];

    if (logoSrc) {
      logo.src = logoSrc;
      logo.style.display = "block";

      const randomSide = Math.random() < 0.5 ? "left" : "right";

      logo.style.top = Math.random() * 60 + 20 + "%";

      logo.style.left = randomSide === "left" ? "0" : "auto";
      logo.style.right = randomSide === "right" ? "0" : "auto";

      logo.style.animation =
        randomSide === "left"
          ? "bounceFromLeft 1s ease"
          : "bounceFromRight 1s ease";

      logo.style.opacity = 0.7;

      setTimeout(() => {
        logo.style.opacity = 0;
      }, 3000);
    } else {
      console.warn(`No logo found for: ${skillTitle}`);
    }
  });

  skill.addEventListener("mouseleave", () => {
    logo.style.opacity = 0;
    logo.style.display = "none";
  });
});

/*  Project Section */

const projects = [
  
 
  {
    title: "Resume Builder",
    description:
      "A user-friendly Resume Builder tool built with HTML, CSS, and JavaScript, enabling users to create professional resumes effortlessly.",
    link: "./projects/project_resume/index.html",
    image: "./assests/project_img/project3.png",
  },
  {
    title: "E-commerce Store",
    description:
      "A clean and responsive website showcasing products from the FakeStore API with detailed information and images.",
    link: "./projects/project_ecommerce/index.html",
    image: "./assests/project_img/projecte.png",
  },
  {
    title: "Small Projects Using Fetch API",
    description:
      "Four projects using HTML, CSS, and JavaScript with Fetch API to display data.",
    link: "./projects/project_api/index.html",
    image: "./assests/project_img/projectapi.png",
  },
  {
    title: "Explore Project On GitHub",
    description:
      "Explore my work on GitHub, including projects built with HTML, CSS, JavaScript, Fetch API, and MERN stack.",
    link: "https://github.com/Rahirai",
    image: "./assests/project_img/github.png",
  },
];

const projectsGrid = document.getElementById("projectsGrid");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <a href="${project.link}" class="project-link" target="_blank">View Project →</a>
  `;
  projectsGrid.appendChild(card);
});
