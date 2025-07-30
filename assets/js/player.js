const tracks = [
  { title: "instupendo – comfort chain",   cover: "assets/img/snoopynightout.jpg", src: "assets/media/comfort_chain.mp3" },
  { title: "c418 – mice on venus",         cover: "assets/img/snoopydancin.jpg",   src: "assets/media/mice_on_venus.mp3" },
  { title: "xori – warm nights",           cover: "assets/img/snoopyeating.png",   src: "assets/media/warm_nights.mp3" },
  { title: "lots of hands – mistake",      cover: "assets/img/snoopyriding.png",   src: "assets/media/mistake.mp3" },
  { title: "scizzie – aquatic ambience",   cover: "assets/img/snoopychilling.png", src: "assets/media/aquatic_ambience.mp3" },
  { title: "overpopulation… – no love…",   cover: "assets/img/snoopy1.jpg",        src: "assets/media/no_love.mp3" }
];

let idx = 0;
const player   = document.getElementById("player");
const nowCover = document.getElementById("nowCover");
const nowTitle = document.getElementById("nowTitle");
const prevBtn  = document.getElementById("prev");
const nextBtn  = document.getElementById("next");

function load(i) {
  idx = (i + tracks.length) % tracks.length;
  player.src   = tracks[idx].src;
  nowCover.src = tracks[idx].cover;
  nowTitle.textContent = tracks[idx].title;
}

prevBtn.onclick = () => { load(idx - 1); player.play(); };
nextBtn.onclick = () => { load(idx + 1); player.play(); };
player.onended  = () =>   nextBtn.onclick();

// autoplay at 15 % volume
player.volume = 0.15;
load(0);
player.play().catch(()=>{ /* autoplay blocked */ });
