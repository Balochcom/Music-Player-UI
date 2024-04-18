let arr = [
  {
    songName: "Arjan Vailly",
    url: "./songs/Arjan-Vailly.mp3",
    image: "./Images/Arjan-Vailly.jpg",
  },
  {
    songName: "Haiwaan",
    url: "./songs/Haiwaan.mp3",
    image: "./Images/Haiwaan.jpg",
  },
  {
    songName: "Hua Main",
    url: "./songs/Hua-Main.mp3",
    image: "./Images/Hua-Main.jpg",
  },
  {
    songName: "Pehle Bhi Main",
    url: "./songs/Pehle-Bhi-Main.mp3",
    image: "./Images/Pehle-Bhi-Main.jpg",
  },
];
let allSongs = document.querySelector("#all-songs");
let poster = document.querySelector("#left");

let play = document.querySelector("#play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");

let audio = new Audio();

let selectedSong = 0;

function mainFunction() {
  let clutter = "";
  arr.forEach(function (elem, index) {
    clutter += `<div class="songs-card" id=${index}>
  <div class="part1">
    <img
      src=${elem.image}
      alt=""
    />
    <h2>${elem.songName}</h2>
  </div>
  <h6>3:55</h6>
</div>`;
  });
  allSongs.innerHTML = clutter;
  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].image})`;
}
mainFunction();

allSongs.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  mainFunction();
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  flag = 1;
  audio.play();
});

let flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = 0.4;
  }
});
backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = 0.4;
  }
});
