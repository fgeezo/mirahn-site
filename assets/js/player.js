const tracks = [
  {cover:'assets/img/snoopy1.jpg',title:'c418 – mice on venus',src:'assets/media/mice_on_venus.mp3'},
  {cover:'assets/img/snoopy2.jpg',title:'lots of hands – mistake',src:'assets/media/mistake.mp3'},
  {cover:'assets/img/cow1.png',title:'tell me – jack‑o‑lantern / six days after christmas',src:'assets/media/tell_me.mp3'},
  {cover:'assets/img/cow2.png',title:'christian joel – warm nights',src:'assets/media/warm_nights.mp3'},
  {cover:'assets/img/cow2.png',title:'instupendo – comfort chain',src:'assets/media/comfort_chain.mp3'},
  {cover:'assets/img/woodstock1.png',title:'scizzie – aquatic ambience',src:'assets/media/aquatic_ambience.mp3'}
];
let idx = 0;
const cover = document.getElementById('cover');
const titleEl = document.getElementById('track-title');
const audio = document.getElementById('audio');
function load(i){
  const t=tracks[i];
  cover.src=t.cover;
  titleEl.textContent=t.title;
  audio.src=t.src;
}
function playCurrent(){audio.play();}
document.getElementById('prev').onclick = ()=>{idx=(idx+tracks.length-1)%tracks.length;load(idx);playCurrent();}
document.getElementById('next').onclick = ()=>{idx=(idx+1)%tracks.length;load(idx);playCurrent();}
load(0);
window.addEventListener('load',()=>{playCurrent();});