
const playlist = [
    {
        src: "assets/media/Comfort Chain - Instupendo.mp3",
        cover: "assets/img/snoopychilling.png",
        title: "comfort chain",
        artist: "instupendo"
    },
    {
        src: "assets/media/Mice On Venus - C418.mp3",
        cover: "assets/img/snoopydancin.jpg",
        title: "mice on venus",
        artist: "c418"
    }
    // Add more tracks as needed
];

let idx = 0;
let audio, playBtn, nextBtn, prevBtn, cover, meta, isAutoPlay = true;

function updatePlayer() {
    cover.src = playlist[idx].cover;
    meta.innerHTML = `<span>${playlist[idx].artist}</span> – <span>${playlist[idx].title}</span>`;
    audio.src = playlist[idx].src;
    if (isAutoPlay) { setTimeout(()=>audio.play(), 100); }
}

window.onload = () => {
    audio = document.getElementById('audio');
    playBtn = document.getElementById('play-btn');
    nextBtn = document.getElementById('next-btn');
    prevBtn = document.getElementById('prev-btn');
    cover = document.getElementById('music-cover');
    meta = document.getElementById('music-meta');
    audio.volume = 0.15;
    updatePlayer();
    playBtn.onclick = () => audio.paused ? audio.play() : audio.pause();
    nextBtn.onclick = () => { idx = (idx+1)%playlist.length; updatePlayer(); };
    prevBtn.onclick = () => { idx = (idx-1+playlist.length)%playlist.length; updatePlayer(); };
    audio.onended = () => { idx = (idx+1)%playlist.length; updatePlayer(); };
}
