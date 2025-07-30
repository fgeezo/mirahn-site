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

let idx = 0;
const coverImg = document.getElementById('cover');
const titleEl = document.getElementById('track-title');
const audio = document.getElementById('audio');

function load(i){
  const t = trackList[i];
  coverImg.src = covers[Math.floor(Math.random()*covers.length)];
  titleEl.textContent = t.title;
  audio.src = t.src;
}

function safePlay(){
  const p = audio.play();
  if(p !== undefined){
    p.catch(()=>{}); // ignore autoplay rejection
  }
}

document.getElementById('prev').onclick = ()=>{ idx = (idx + trackList.length -1) % trackList.length; load(idx); safePlay(); }
document.getElementById('next').onclick = ()=>{ idx = (idx +1) % trackList.length; load(idx); safePlay(); }
audio.onended = ()=>{ document.getElementById('next').click(); };

load(0);
audio.volume = 0.15;
window.addEventListener('load', ()=>{
  audio.muted = true;
  safePlay();
  audio.muted = false;
});