const dogImg = document.querySelector("#dog-img");
const dogBtn = document.querySelector("#dog-btn");
const catFact = document.querySelector("#cat-fact");
const catBtn = document.querySelector("#cat-fact-btn");
const randomJoke = document.querySelector("#joke-setup");
const randomJokePunch = document.querySelector("#joke-punchline");
const randomJokeBtn = document.querySelector("#joke-btn");

dogBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    dogImg.src = data.message;
  } catch (error) {
    console.log("Error", error.message);
  }
});
catBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    catFact.innerHTML = data.fact;
  } catch (error) {
    console.log("Error", error.message);
  }
});
randomJokeBtn.addEventListener("click", async () => {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    const data = await res.json();
    randomJoke.innerHTML = data.setup;
    randomJokePunch.innerHTML = data.punchline;
  } catch (error) {
    console.log("Error", error.message);
  }
});

/*  Github User */

const form = document.querySelector(".form");
const input = document.querySelector("#input");
const result = document.querySelector("#result");
async function fetchGithubUserName(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const user = await res.json();
    result.innerHTML = `
    <div class="github-card">
<img src="${user.avatar_url}" alt="User Avatar" class="avatar">
<div class="info">
<h2 class="name">${user?.name || user.login}</h2>
<p class="bio">${user?.bio || " "}</p>
<div class="stats">
<span>Repos: <strong>${user.public_repos}</strong></span>
<span>Followers: <strong>${user.followers}</strong></span>
<span>Following: <strong>${user.following}</strong></span>
</div>
<div class="links">
<a href="${user.html_url}" target="_blank">GitHub Profile</a>

</div>
</div>
</div>         `;
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchGithubUserName(input.value);
});
