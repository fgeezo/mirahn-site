
const trackList = [
  {title:'instupendo – comfort chain',src:'assets/media/comfort_chain.mp3'},
  {title:'lots of hands – mistake',src:'assets/media/mistake.mp3'},
  {title:'tell me – jack‑o‑lantern / six days after christmas',src:'assets/media/tell_me.mp3'},
  {title:'xori – warm nights',src:'assets/media/warm_nights.mp3'},
  {title:'c418 – mice on venus',src:'assets/media/mice_on_venus.mp3'},
  {title:'scizzie – aquatic ambience',src:'assets/media/aquatic_ambience.mp3'}
];
const covers = [
  'assets/img/snoopyeating.png',
  'assets/img/snoopyriding.png',
  'assets/img/snoopynightout.jpg',
  'assets/img/snoopydancin.jpg',
  'assets/img/snoopychilling.png'
];
let idx=0;
const cover=document.getElementById('cover');
const title=document.getElementById('track-title');
const audio=document.getElementById('audio');
function load(i){
  const t=trackList[i];
  cover.src=covers[Math.floor(Math.random()*covers.length)];
  title.textContent=t.title;
  audio.src=t.src;
}
function tryPlay(){
  audio.play().catch(()=>{}); // ignore rejection
}
document.getElementById('prev').onclick=()=>{idx=(idx+trackList.length-1)%trackList.length;load(idx);tryPlay();}
document.getElementById('next').onclick=()=>{idx=(idx+1)%trackList.length;load(idx);tryPlay();}
audio.onended=()=>{document.getElementById('next').click();};
load(0);
audio.volume=0.15;
audio.setAttribute('autoplay','');
audio.load();
window.addEventListener('load',()=>{
  audio.muted=true;
  tryPlay();
  setTimeout(()=>{audio.muted=false; audio.volume=0.15;},1500);
});
