/* Select fileds from Form */
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const role = document.querySelector("#role");
const url = document.querySelector("#linkedin");
const address = document.querySelector("#address");
const number = document.querySelector("#number");
const eduyear = document.querySelector("#edu-year");
const eduQu = document.querySelector("#edu");
const file = document.querySelector("#file");
const text = document.querySelector("#text");
const selectExperince = document.querySelector("#experience");

/* Project  */
const projectTitle = document.getElementById("projectTitle");
const projectTech = document.getElementById("projectTech");
const projectDesc = document.getElementById("projectDesc");
const projectBtn = document.getElementById("addproject");

/* Select fields from Resume */

const resName = document.querySelector("#res-name");
const resEmail = document.querySelector("#res-email");
const resRole = document.querySelector("#res-role");
const resUrl = document.querySelector("#res-linkedin");
const resAddress = document.querySelector("#res-address");
const resNumber = document.querySelector("#res-number");
const resEduyear = document.querySelector("#res-year");
const resEduQu = document.querySelector("#res-edu");
const img = document.querySelector("#img");
const resText = document.querySelector("#res-text");
const resWork = document.querySelector("#res-work");
const ul = document.querySelector("#skill");
const projectList = document.getElementById("projectList");

/* Form */
const form = document.querySelector("#form");
const result = document.querySelector("#result");

/* Skills */
const check = document.querySelector("#check");
const btn = document.querySelector("#add");


btn.addEventListener("click", () => {
  let input = document.createElement("input");
  input.classList.add("skillInput");
  input.placeholder = "Enter your skill...";
  check.appendChild(input);
});

/* Project Add logic */

let projects = [];
projectBtn.addEventListener("click", () => {
  let title = projectTitle.value;
  let tech = projectTech.value;
  let desc = projectDesc.value;
  const project = { title, tech, desc };
  projects.push(project);
  projectTitle.value = "";
  projectTech.value = "";
  projectDesc.value = "";
  console.log(projects);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  result.style.display = "block";
  form.style.display = "none";
  resName.innerHTML = name.value;
  resEmail.innerHTML = email.value;
  resNumber.innerHTML = number.value;
  resRole.innerHTML = role.value;
  resUrl.innerHTML = url.value;
  resAddress.innerHTML = address.value;
  resEduQu.innerHTML = eduQu.value;
  resEduyear.innerHTML = eduyear.value;
  resText.innerHTML = text.value;
  resWork.innerHTML = selectExperince.value;

  /*  */

  /* ---------------------Add skill Logic Starts here------------------------ */

  const skillInput = document.querySelectorAll(".skillInput");
  const values = [];

  skillInput.forEach((input) => {
    values.push(input.value);
  });

  ul.innerHTML = "";
  values.forEach((check) => {
    let li = document.createElement("li");
    li.innerText += check;
    ul.appendChild(li);
  });

  projectList.innerHTML = projects.map(
    (p, index) => `
  <div class="project-card">
<h2>Project ${index + 1}</h2>
    <h3>${p.title}</h3>
    <p><strong>Tech:</strong> ${p.tech}</p>
    <p>${p.desc}</p>
                <hr>

  </div>
`
  );

  /* Add image logic */
  let fileInput = file?.files[0];
  img.src = URL.createObjectURL(fileInput);
});

/* Download btn logic */
const downloadBtn = document.querySelector("#download-btn");

downloadBtn.addEventListener("click", () => {
  window.print();
  result.style.display = "none";
  form.style.display = "block";
});
