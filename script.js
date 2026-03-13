const grid = document.getElementById("grid");
const modal = document.getElementById("playerModal");
const player = document.getElementById("videoPlayer");
const closeBtn = document.getElementById("closeBtn");

files.forEach(file => {

const card = document.createElement("div");
card.className = "card";

const video = document.createElement("video");
video.src = "content/" + file;
video.className = "preview";
video.muted = true;

const name = document.createElement("div");
name.className = "filename";
name.textContent = file;

card.appendChild(video);
card.appendChild(name);

card.onclick = () => {
player.src = "content/" + file;
modal.classList.remove("hidden");
player.play();
};

grid.appendChild(card);

});

closeBtn.onclick = () => {
modal.classList.add("hidden");
player.pause();
player.src = "";
};
