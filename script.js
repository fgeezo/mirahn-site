/* preload covers so “cover” alt text never shows */
playlist.forEach(t=>{
  const i=new Image(); i.src=t.cover;
});

/* in load() – if image missing, hide broken icon */
function load(i){
  if(i<0) idx=playlist.length-1;
  if(i>=playlist.length) idx=0;
  const {title,cover:img,src}=playlist[idx];
  audio.src = src;
  metaTxt.textContent = title;
  cover.onload = ()=>{};         /* no-op after load */
  cover.onerror = ()=>cover.style.display='none';
  cover.src = img;
  setTimeout(()=>{audio.volume=.15;audio.play().catch(()=>{})},200);
}
