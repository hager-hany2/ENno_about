var videoplayer=document.getElementById("videoplayer");
var myvideo=document.getElementById('myvideo')
function stopVideo(){
  videoplayer.style.display='none'
  
}
function playVideo(File){
  myvideo.scr=File;
   videoplayer.style.display='block'
}