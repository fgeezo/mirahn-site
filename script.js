/* ---------- tiny playlist --------- */
const playlist = [
  {title:'instupendo – comfort chain',  cover:'assets/snoopynightout.jpg', src:'assets/Comfort_Chain.mp3'},
  {title:'lots of hands – mistake',     cover:'assets/snoopyeating.png',   src:'assets/mistake.mp3'},
  {title:'i wanna be a jack-o-lantern – tell me', cover:'assets/snoopyriding.png', src:'assets/tell_me.mp3'},
  {title:'scizzie – aquatic ambience',  cover:'assets/aquatic_ambience.mp3',src:'assets/aquatic_ambience.mp3'},
  {title:'c418 – mice on venus',        cover:'assets/mice_on_venus.jpg',  src:'assets/mice_on_venus.mp3'}
];

const audio   = document.getElementById('audio');
const cover   = document.getElementById('cover');
const metaTxt = document.getElementById('track-meta');
let idx = 0;  load(idx);

document.getElementById('next').onclick = () => load(++idx);
document.getElementById('prev').onclick = () => load(--idx);
audio.onended = () => load(++idx);

function load(i){
  if(i<0) idx=playlist.length-1; if(i>=playlist.length) idx=0;
  const {title,cover:img,src} = playlist[idx];
  audio.src    = src;
  metaTxt.textContent = title;
  cover.src    = img;
  setTimeout(()=>{audio.volume=.15; audio.play().catch(()=>{})},200);
}
