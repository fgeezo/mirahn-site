/* ───── simple playlist ───── */
const playlist=[
  {title:"instupendo – comfort chain",src:"assets/comfort_chain.mp3",cover:"assets/snoopynightout.jpg"},
  {title:"lots of hands – mistake",  src:"assets/mistake.mp3",       cover:"assets/snoopyeating.png"},
  {title:"scizzie – aquatic ambience",src:"assets/aquatic_ambience.mp3",cover:"assets/aquatic_ambience.png"},
  {title:"c418 – mice on venus",      src:"assets/mice_on_venus.mp3", cover:"assets/woodstock1.png"},
  {title:"i wanna be a jack-o-lantern – tell me",src:"assets/tell_me.mp3",cover:"assets/snoopy1.jpg"},
  {title:"xori – warm nights",        src:"assets/warm_nights.mp3",   cover:"assets/snoopydancin.jpg"}
];

const audio  = document.getElementById('player');
const cover  = document.getElementById('cover');
const metaTxt= document.getElementById('meta');
let idx=0;

/* preload covers so “cover” never shows broken */
playlist.forEach(t=>{const i=new Image();i.src=t.cover});

/* load / play */
function load(i){
  if(i<0) idx=playlist.length-1;
  if(i>=playlist.length) idx=0;
  const tr=playlist[idx];
  audio.src = tr.src;
  metaTxt.textContent = tr.title;
  cover.style.display="block";
  cover.src = tr.cover;
  setTimeout(()=>{audio.volume=.15;audio.play().catch(()=>{})},200);
}
audio.onended = ()=>{idx++;load(idx)};
document.getElementById('prev').onclick=()=>{idx--;load(idx)};
document.getElementById('next').onclick=()=>{idx++;load(idx)};

load(idx);
