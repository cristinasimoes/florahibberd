// ! ************ VARIABLES  ********
var mainWrapper = document.getElementById('mainWrapper');
// ?slidebar VARIABLES
var ilPlaySlide = document.getElementById('ilPlaySlide');
var ilPlayPhone = document.getElementById('ilPlayPhone');
var platePlay = document.getElementById('platePlay');
var stonePlay = document.getElementById('stonePlay');
var cursorSpace = document.getElementById('cursorSpace');
var slidebar = document.getElementById('slidebarWrapper');
var slidebarIcon = document.getElementById('slidebarIcon');
var slidebarSideTitles = document.getElementById('slidebarSideTitles');
var slidebarSideTitleBio = document.getElementById('slidebarSideTitleBio');
var slidebarSideTitleLyrics = document.getElementById('slidebarSideTitleLyrics');
//? slidebar titles
var titlesAlbum = document.getElementById('titlesAlbum');
// ?slidebar texts
var textBio = document.getElementById('textBio');
var textsContainerAlbum = document.getElementById('textsContainerAlbum');
var textLong = document.getElementById('textLong');
var textViolence = document.getElementById('textViolence');
var textContact = document.getElementById('textContact');
var textShenandoah = document.getElementById('textShenandoah');
var textRocks = document.getElementById('textRocks');
var textHealing = document.getElementById('textHealing');
var textSignal = document.getElementById('textSignal');
//? navbar
var decorationVideo = document.getElementById('decorationVideo');
var decorationBio = document.getElementById('decorationBio');
var decorationMusic = document.getElementById('decorationMusic');
var decorationContact = document.getElementById('decorationContact');
// ?main content
var mainContent = document.getElementById('mainContent');
var bioPicContainerBig = document.getElementById('bioPicContainerBig');
var bioPicContainerSmall = document.getElementById('bioPicContainerSmall');
var bioPicBig = document.getElementById('bioPicBig');
var bioPicSmall = document.getElementById('bioPicSmall');
var titlePic = document.getElementById('titlePic');
var galleryAlbums = document.getElementById('galleryAlbums');
var titlePicGallery = document.getElementById('titlePicGallery');
var titleBigGallery = document.getElementById('titleBigGallery');
var titlePicsPhone = document.getElementById('titlePicsPhone');
var videoGallery = document.getElementById('videoGallery');
var titlePicVideo = document.getElementById('titlePicVideo');
var contactSection = document.getElementById('contactSection');
// ?illustrations
var ampContainerPhone = document.getElementById('ampContainerPhone');
var ampContainerSlide = document.getElementById('ampContainerSlide');
var ampPhone = document.getElementById('ampPhone');
var ampSlide = document.getElementById('ampSlide');
var stone = document.getElementById('stoneContainer');
var stoneImg = document.getElementById('stone');
var plate = document.getElementById('plateContainer');
var plateIl = document.getElementById('plateIl');
// ?VIDEO CONTROLLS
var cimage = 1;
var p = 1;
var texts = 1;
var video = document.querySelector('.video');
var videoC = document.querySelector('.video-container');
var juice = document.querySelector('.juice');
var pause = document.getElementById('pause');
var play = document.getElementById('play');
var pauseC = document.getElementById('pauseContainer');
var playC = document.getElementById('playContainer');
var btn = document.querySelector('.playPause');
var buttons = document.getElementById('buttons');
var stopButton = document.getElementById('stopButton');
var iconArrowRight = document.getElementById('iconArrowRight');
var iconArrowLeft = document.getElementById('iconArrowLeft');
//? media queries VARIABLES
var screenXS = window.matchMedia("(max-width:380px)");
var screenS = window.matchMedia("(max-width:769px) and (min-width: 380px)");
var screenSsmall = window.matchMedia("(max-width:680px) and (min-width: 380px)");
var screenSlarge = window.matchMedia("(max-width:769px) and (min-width: 680px)");
var screenM = window.matchMedia("(max-width:856px) and (min-width: 769px)");
var extraScreenM = window.matchMedia("(max-width:807px) and (min-width: 769px)");
var screenL = window.matchMedia("(max-width:1092px) and (min-width: 856px)");
var extraScreenL = window.matchMedia("(max-width:900px) and (min-width: 856px)");
var screenXL = window.matchMedia("(min-width:1092px)");
// ! ************ FUNCTIONS  ********

// CURSOR CIRCLE INTERACTION
jQuery(document).ready(function(e) {
  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circleCursor").css({
      left: xp +'px',
      top: yp +'px'});
  }, 20);
});

// ANIMATIONS
function resetsAmpAnimation(){
  ampPhone.classList.remove("amp-phone");
  // trigger a DOM reflow
  void ampPhone.offsetWidth; 
  ampPhone.classList.add("amp-phone");
  ampSlide.classList.remove("amp-slide");
  void ampSlide.offsetWidth; 
  ampSlide.classList.add("amp-slide");
}
function resetsPlateAnimation(){
  plateIl.classList.remove("plate");
  // trigger a DOM reflow
  void plateIl.offsetWidth; 
  plateIl.classList.add("plate");
}
function toggleAmpAnimation(e){
  //CLICK TO START
  if (audioAmpPhone.paused) {
    ampSlide.style.opacity = "0.7";
    ampSlide.style.animation = "amplificador 1s linear infinite both";
    ampPhone.style.animation = "amplificador 1s linear infinite both";
    audioAmpPhone.play();
    resetsAmpAnimation();
  }
  // CLICK TO STOP
  else{
    audioAmpPhone.pause(); 
    ampSlide.style.animation = "amplificador  linear 4s both";
    ampPhone.style.animation = "amplificador linear 4s both";
    resetsAmpAnimation();
  }e.preventDefault();
}
function toggleStoneAnimation(e){
  //CLICK TO START
  if (audioStone.paused) {
    const stone= document.getElementById('stone');
    audioStone.play();
    stone.style.animation = "amplificador 1s linear infinite both";
  }
  //CLICK TO START
  else  {
    const stone= document.getElementById('stone');
    audioStone.pause(); 
    stone.style.animation = "none";
  }e.preventDefault();
}

// CHECK IF SCRROLL NEEDED - SLIDEBAR
function checkScrollHeight(){
  if(slidebar.classList.contains('clickOpen')== true){
   if(slidebar.scrollHeight > slidebar.clientHeight){
    scrollArrow.style.opacity='1';
    scrollArrow.style.transition = 'all 1.5s ease';
   }else{
    scrollArrow.style.opacity='0';
    scrollArrow.style.transition = 'all 1.5s ease';  
   }
  }
}

function openSlide(){
  slidebar.classList.add('clickOpen');
  // toggle slidebar icon
  slidebarIcon.classList.add('clicked');
  // pushes back slidebar
  mainWrapper.style.marginLeft= '0px';
  mainWrapper.style.transition = 'all 1.5s ease';
  // yellow border desapears
  slidebar.style.borderRight = '3px solid  yellow';
  slidebar.style.transition = 'all 1.5s ease';
  // shows back right slidebar title and illustration
  slidebarSideTitles.style.opacity='0';
  slidebarSideTitles.style.transition = 'all 1.5s ease';
  // ADJUSTS STONE play sign POSITION
  if(screenM.matches){
    stonePlay.style.left = '0';
  }
  checkScrollHeight();
}
function closeSlide(){
  slidebar.classList.remove('clickOpen');
  // toggle slidebar icon
  slidebarIcon.classList.remove('clicked');
  // yellow border apears
  slidebar.style.borderRight = '5px solid  rgba(255, 255, 0, 0)';
  // hides right slidebar title and illustration
  slidebarSideTitles.style.opacity='1';
  slidebarSideTitles.style.transition = 'all 1.5s ease';
  // adjusts the width of the the slidebar
  if(screenL.matches || screenM.matches){
    mainWrapper.style.marginLeft= 'calc(-300px + 55px)'; 
  }else{
    mainWrapper.style.marginLeft= 'calc(-28vw + 55px)';
  }
  // ADJUSTS STONE play sign POSITION
  if(screenM.matches){
    stonePlay.style.left = '200px';
  }
}
// MAIN CONTENT
function moveBioPic(m,widthM,l,widthL,xl,widthXL){
  switch(true){
    case screenS.matches || screenXS.matches :
      bioPicSmall.style.marginLeft = '0';
      bioPicSmall.style.maxWidth = '100vw';
      break;
    case screenM.matches:
      bioPicSmall.style.maxWidth = widthM;
      bioPicSmall.style.marginLeft = m;
      break;
    case screenL.matches:
      bioPicBig.style.maxWidth = widthL;
      bioPicBig.style.marginLeft = l;
      break;
    case screenXL.matches:    
      bioPicBig.style.maxWidth = widthXL;
      bioPicBig.style.marginLeft = xl; 
      break;
    default:         
  }
}
function moveTitlePic(m,l,xl){
  switch(true){
    case screenM.matches:
      titlePic.style.margin = m;
      break;
    case screenL.matches:
      titlePic.style.margin = l;
      break;
    case screenXL.matches:     
      titlePic.style.margin = xl;
      break;
    default:         
  }
}
function moveGalleryAlbums(m,l,xl){
  switch(true){
    case screenS.matches || screenXS.matches:
      galleryAlbums.style.margin = '0px';
      break;
    case screenM.matches:
      galleryAlbums.style.margin = m;
      break;
    case screenL.matches:
      galleryAlbums.style.margin = l;
      break;
    case screenXL.matches:   
      galleryAlbums.style.margin = xl;  
      break;
    default:         
  }
}
function moveTitlePicGallery(xs,widthXS,s,widthS,m,widthM,l,widthL,xl,widthXL){
  switch(true){
    case screenXS.matches:
      titlePicGallery.style.margin = xs;
      titleBigGallery.style.maxWidth = widthXS;
      break;
    case screenS.matches:
      titlePicGallery.style.margin = s;
      titleBigGallery.style.maxWidth = widthS;
      break;
    case screenM.matches:
      titlePicGallery.style.margin = m;
      titleBigGallery.style.maxWidth = widthM;
      break;
    case screenL.matches:
      titlePicGallery.style.margin = l;
      titleBigGallery.style.maxWidth = widthL;
      break;
    case screenXL.matches:     
      titlePicGallery.style.margin = xl;
      titleBigGallery.style.maxWidth = widthXL;
      break;
    default:         
  }
}
function moveVideoGallery(m,l,xl){
  switch(true){
    case screenXS.matches :
      videoGallery.style.margin = '-8vw 0 0 0';
      break;
    case screenS.matches:
      videoGallery.style.margin = '0';
      break;
    case screenM.matches:
      videoGallery.style.margin = m;
      break;
    case screenL.matches:
      videoGallery.style.margin = l;
      break;
    case screenXL.matches:   
    videoGallery.style.margin = xl;  
      break;
    default:         
  }
}
function moveTitlePicVideo(m,extraM,l,extraL,xl){
  switch(true){
    case screenXS.matches:
      titlePicVideo.style.margin = '58vw 0px 0px 0vw';
      titlePicVideo.style.maxWidth ='100%';
      break;
    case screenSlarge.matches:
      titlePicVideo.style.margin = '40vw 0 0 0';
      titlePicVideo.style.maxWidth ='100%';
      break;
    case screenSsmall.matches:
      titlePicVideo.style.margin = '45vw 0 0 0';
      titlePicVideo.style.maxWidth ='100%';
      break;
    case extraScreenM.matches:     
      titlePicVideo.style.margin = extraM;
      break;
    case screenM.matches:
      titlePicVideo.style.margin = m;
      break;
    case extraScreenL.matches:     
      titlePicVideo.style.margin = extraL;
      break;
    case screenL.matches:
      titlePicVideo.style.margin = l;
      break;
    case screenXL.matches:     
      titlePicVideo.style.margin = xl;
      break;
    default:         
  }
}
function moveContactSection(xs,s,m){
  switch(true){
    case screenXS.matches:
      contactSection.style.margin = xs;
      break;
    case screenS.matches:
      contactSection.style.margin = s;
      break;
    default:  
      contactSection.style.margin = m;
      break;
  }
}
function moveStone(xs,widthXS,s,widthS,m,widthM,l,widthL,xl,widthXL){
  switch(true){
    case screenXS.matches:
      stone.style.margin = xs;
      stoneImg.style.maxWidth = widthXS;
      break;
    case screenS.matches:
      stone.style.margin = s;
      stoneImg.style.maxWidth = widthS;
      break;
    case screenM.matches:
      stone.style.margin = m;
      stoneImg.style.maxWidth = widthM;
      break;
    case screenL.matches:
      stone.style.margin = l;
      stoneImg.style.maxWidth = widthL;
      break;
    case screenXL.matches:
      stone.style.margin = xl;
      stoneImg.style.maxWidth = widthXL;
      break;
    default:  
    break;
  }
}
function setTextArea(xs,s,m,l,xl){
  switch(true){
    case screenXS.matches:
      titlesAlbum.style.marginLeft = xs;
      break;
    case screenS.matches:
      titlesAlbum.style.marginLeft = s;
      break;
    case screenM.matches:
      titlesAlbum.style.marginLeft = m;
      break;
    case screenL.matches:
      titlesAlbum.style.marginLeft = l;
      break;
    case screenXL.matches:
      titlesAlbum.style.marginLeft = xl;
      break;
    default:  
    break;
  }
}
function noTransition(){
  bioPicBig.style.transition = 'none';
  bioPicSmall.style.transition = 'none';
  slidebar.style.transition = 'none';
  mainWrapper.style.transition = 'none';
  titlePic.style.transition = 'none';
  titlePicsPhone.style.transition = 'none';
  titlePicGallery.style.transition = 'none';
  galleryAlbums.style.transition = 'none';
  titlePicVideo.style.transition = 'none';
  videoGallery.style.transition = 'none';
}
function pushMedia(){
  moveBioPic(
    '5vw','50%',
    '0','70%',
    '5vw','100%');
  moveTitlePic(
    '380px 0 0 10vw', 
    '380px 0 0 5vw', 
    '380px 0 0 10vw');
  moveGalleryAlbums(
    '5vw 0 0 2vw',
    '3vw 0 0 0',
    '5vw 0 0 2vw');
  moveTitlePicGallery(
    '357px 0 0 1vw', '100%',
    '423px 0 0 0','100%',
    '414px 0 0 10vw','100%',
    '423px 0 0 0','80%',
    '382px 0 0 12vw','100%'); 
  moveVideoGallery(
    '6vw 0 0 0vw',
    '4vw 0 0 0', 
    '4vw 0 0 8vw');
  moveTitlePicVideo(
    '310px 0 0 2vw',
    '290px 0px 0px 10vw',
    '340px 0 0 15vw', 
    '310px 0px 0px 15vw',
    '350px 0 0 15vw');
  moveContactSection(
    '120px 0 0 0',
    '120px 0 0 0',
    '10px 0 0 5vw');
  moveStone(
    '10px auto 0 auto','30%',
    '10px auto 0 auto','30%',
    '250px 0 0 35vw','90%',
    '150px 0 0 33vw','90%',
    '150px 0 0 33vw','90%');
}
function pushbackMedia(){
  moveBioPic(
    '10vw', '50%',
    '10vw','100%',
    '10vw','100%');
  moveTitlePic(
    '380px 0 0 10vw', 
    '380px 0 0 15vw', 
    '380px 0 0 15vw');
  moveGalleryAlbums(
    '5vw 0 0 12vw',
    '5vw 0 0 12vw',
    '5vw 0 0 10vw');
  moveTitlePicGallery(
    '373px 0 0 0', '100%',
    '423px 0 0 0','100%',
    '410px 0 0 15vw','80%',
    '430px 0 0 15vw','80%',
    '360px 0 0 15vw','100%');
  moveVideoGallery(
    '6vw 0 0 8vw',
    '4vw 0 0 8vw', 
    '4vw 0 0 8vw');
  moveTitlePicVideo(
    '347px 0 0 10vw',
    '347px 0 0 10vw',
    '350px 0 0 15vw', 
    '350px 0 0 15vw', 
    '350px 0 0 15vw');
  moveContactSection(
    '120px 0 0 0',
    '120px 0 0 0',
    '10px 0 0 15vw');
  moveStone(
    '10px auto 0 auto','30%',
    '10px auto 0 auto','30%',
    '150px 0 0 40vw','90%',
    '150px 0 0 48vw','90%',
    '150px 0 0 40vw','90%');
}
function toggleSlide(){
  if(slidebar.classList.contains('clickOpen')==false){
    openSlide();
    pushMedia();
  }else{
    closeSlide();
    pushbackMedia();
  }
}

function display(status, item){
  switch(status){
    case 'none':
      item.style.display = 'none';
      break;
    case 'block':
      item.style.display = 'block';      
      break;
    case 'flex':
      item.style.display = 'flex';
      break;   
    case 'grid':
      item.style.display = 'grid';
      break; 
    default:
      item.style.textDecorationColor = status;
  }
}
function pics(t1,t2,t3,t4){
  display(t1,titlePic);
  display(t2,titlePicGallery);      
  display(t3,titlePicsPhone);
  display(t4,titlePicVideo);
}

function setsGrid(xs,s,m,l,xsSlidebar,sSlidebar,xsAlign,sAlign){
  switch(true){
    case (screenXS.matches):
      titlePicVideo.style.margin = '58vw 0px 0px 0vw';
      slidebar.style.gridTemplateRows = xsSlidebar;
      mainWrapper.style.gridTemplateRows =xs;
      mainContent.style.alignItems = xsAlign; 
      break;
    case (screenSlarge.matches && (videoGallery.style.display == "grid")): 
      mainContent.style.alignItems = "flex-start"; 
      titlePicVideo.style.margin = '40vw 0 0 0';
      mainWrapper.style.gridTemplateRows = " 80px 65vw auto 100px";
      break;
    case (screenSsmall.matches && (videoGallery.style.display == "grid")): 
      mainContent.style.alignItems = "flex-start"; 
      mainWrapper.style.gridTemplateRows = " 80px 75vw auto 100px";
      break;
    case (screenS.matches):
      slidebar.style.gridTemplateRows = sSlidebar;
      mainWrapper.style.gridTemplateRows = s;
      mainContent.style.alignItems = sAlign; 
      break;
    
    case screenM.matches:
      mainContent.style.alignItems = 'center';
      mainWrapper.style.gridTemplateRows = m;
      break;
    case screenL.matches:
      mainContent.style.alignItems = 'center';
      mainWrapper.style.gridTemplateRows = l;
      break;
    default:   
    break;
  }
}
function stoneAnimation(anim){
  const stone= document.getElementById('stone');
  stone.style.animation = anim;
}
// DISPLAY THE RIGHT PAGE OF SLIDEBAR TEXTS
function pauseAudio(audio){
  audio.pause();
  audio.currentTime = 0;
  mainWrapper.style.transition = 'all 1.5s ease';
}
function toggleStopButton(){
  video.currentTime = 1;
  video.pause();
  videoC.maxWidth = '800px';
  playC.style.display="block";
  pauseC.style.display="none";
}
function togglePlayPause(){
  if(video.paused){
    playC.style.display="none";
    pauseC.style.display="block";
    video.play();
  }else{
    playC.style.display="block";
    pauseC.style.display="none";
    video.pause();
  }
  video.addEventListener('timeupdate', function(){
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended){
      playC.style.display="block";
      pauseC.style.display="none";  
    }
  });
}
function displaysTexts(a,b,c,d,e,album,size,pos,song){
  display(a,textLong);
  display(b,textViolence);
  display(c,textRocks);
  display(d,textHealing);
  display(e,textSignal);
    // SETS THE RIGHT PIC AND POSITION ON THE BIG SQUARE
  bigBox.style.background=`url('media/${album}-clean.jpg')`;
  bigBox.style.backgroundSize=size;
  bigBox.style.backgroundPosition=pos;
  audioAmpSlide.src =`media/${song}.mp3`;
  audioAmpPhone.src = `media/${song}.mp3`;

  resetsAmpAnimation(); 
  ampSlide.style.animation = "amplificador 1s linear infinite both";
  ampPhone.style.animation = "amplificador 1s linear infinite both";
}
function defaultMusicGallery(album){

  if(screenS.matches ){
    bigBox.style.backgroundPosition='center';
  } else{
    bigBox.style.backgroundPosition='top';
  } 
  displaysTexts('none','none','none','block','none',album,'cover','center','song-healing');
}

function navUnderline(elmOn,elm1,elm2,elm3){
  display('yellow',elmOn);
  display('transparent',elm1);
  display('transparent',elm2);
  display('transparent',elm3);
}
function displaySection(status,elmOn,elm1,elm2,elm3){
  display(status,elmOn);
  display('none',elm1);
  display('none',elm2);
  display('none',elm3);
}
function displayMedia(status,elmOn,elm1,elm2,elm3,elm4){
  display(status,elmOn);
  display('none',elm1);
  display('none',elm2);
  display('none',elm3);
  display('none',elm4);
}
function displaySlideTitle(elmOn,elm1){
  display('block',elmOn);
  display('none',elm1);
}

function clickHome(){
  navUnderline(decorationBio,decorationContact,decorationMusic,decorationVideo);
  // displaySlideTexts
  displaySection('block',textBio,textsContainerAlbum,textContact,textLong,textShenandoah);
  // displayMedia
  if(screenXS.matches || screenS.matches || screenM.matches){
    displayMedia('flex',bioPicContainerSmall,bioPicContainerBig,galleryAlbums,videoGallery,contactSection);
  }else{
    displayMedia('block',bioPicContainerBig,bioPicContainerSmall,galleryAlbums,videoGallery,contactSection);
  }
  // displayIlustrations
  displaySection('none',ampContainerSlide, ampContainerPhone,plate,stone);
  displaySlideTitle(slidebarSideTitleBio,slidebarSideTitleLyrics);
  // displayTitlePics
  if(screenXS.matches || screenS.matches){
    displaySection('flex',titlePicsPhone,titlePic,titlePicGallery,titlePicVideo);
  }else{
    displaySection('block',titlePic,titlePicsPhone,titlePicGallery,titlePicVideo);
  }
  setsGrid(
    '180px 500px auto 100px',
    '80px 600px auto 100px',
    '90px minmax(550px, calc(100vh - 90px))',
    '90px minmax(550px, calc(100vh - 90px))',
    'auto', 'auto','stretch','stretch');
  pauseAudio(audioStone);
  pauseAudio(audioAmpPhone);
  stoneAnimation('none');
  toggleStopButton();
  checkScrollHeight();
}
function clickMusic(){
  navUnderline(decorationMusic,decorationContact,decorationBio,decorationVideo);
  // displaySlideTexts
  displaySection('block',textsContainerAlbum,textBio,textContact,textLong,textShenandoah);
  // displayMedia
  displayMedia('grid',galleryAlbums,bioPicContainerSmall,bioPicContainerBig,videoGallery,contactSection);
  // displayIlustrations
  if(screenS.matches || screenXS.matches){
    displaySection('block',ampContainerPhone, ampContainerSlide,plate,stone);  
  }else{
    displaySection('block',ampContainerSlide, ampContainerPhone,plate,stone);
  }
  displaySlideTitle(slidebarSideTitleLyrics,slidebarSideTitleBio);
  // displayTitlePics
  displaySection('block',titlePicGallery,titlePic,titlePicsPhone,titlePicVideo);
  if(slidebar.classList.contains('clickOpen')==false){
    pushbackMedia();
  }else{
    pushMedia();
  }
  videoGallery.style.transition = 'all 1.5s ease';
  setsGrid(
    '180px 500px auto 100px',
    '80px 600px auto 100px',
    '90px minmax(550px, calc(100vh - 90px))',
    '90px minmax(550px, calc(100vh - 90px))',
    'auto', 'auto','flex-start','flex-start');
  defaultMusicGallery('album-flora');
  pauseAudio(audioStone);
  stoneAnimation('none');
  toggleStopButton();
  checkScrollHeight();
}
function clickVideo(){
  navUnderline(decorationVideo,decorationMusic,decorationContact,decorationBio);
  // displaySlideTexts
  displaySection('block',textLong,textsContainerAlbum,textBio,textContact,textShenandoah);
  // displayMedia
  displayMedia('grid',videoGallery,galleryAlbums,bioPicContainerSmall,bioPicContainerBig,contactSection);
  // displayIlustrations
  if(screenS.matches || screenXS.matches){
    displaySection('block',plate,ampContainerPhone, ampContainerSlide,stone);  
  }else{
    displaySection('none',plate,ampContainerSlide, ampContainerPhone,stone);
  }
  displaySlideTitle(slidebarSideTitleLyrics,slidebarSideTitleBio);
  // displayTitlePics
  displaySection('block',titlePicVideo,titlePicGallery,titlePic,titlePicsPhone);
  setsGrid(
    '180px 300px auto 100px',
    '80px 70vw auto 100px',
    '90px minmax(550px, calc(100vh - 90px))',
    '90px minmax(550px, calc(100vh - 90px))',
    'auto', 'auto','center','flex-start');
  // Change the source image
  video.src = 'media/video-flora.mp4';
  video.poster = 'media/imgVideo2.jpg';
  pauseAudio(audioStone);
  pauseAudio(audioAmpPhone);
  stoneAnimation('none');
  resetsPlateAnimation();
  checkScrollHeight();
  if(slidebar.classList.contains('clickOpen')==false){
    pushbackMedia();
  }else{
    pushMedia();
  }

}
function clickContact(){ 
  navUnderline(decorationContact,decorationVideo,decorationMusic,decorationBio);
  // displaySlideTexts
  if(screenS.matches || screenXS.matches){
    displaySection('none',textContact,textLong,textsContainerAlbum,textBio,textShenandoah);  
  }else{
    displaySection('block',textContact,textLong,textsContainerAlbum,textBio,textShenandoah);
  }
  // displayMedia
  displayMedia('block',contactSection,videoGallery,galleryAlbums,bioPicContainerSmall,bioPicContainerBig);
  // displayIlustrations
  displaySection('block',stone,plate,ampContainerPhone, ampContainerSlide); 
  displaySlideTitle(slidebarSideTitleLyrics,slidebarSideTitleBio);
  // displayTitlePics
  displaySection('none',titlePicVideo,titlePicGallery,titlePic,titlePicsPhone);
  if(screenS.matches|| screenXS.matches){
    stonePlay.style.top= '0';
    stonePlay.style.left= '0';  }
  if(screenM.matches || screenL.matches ||    screenXL.matches ){
    stonePlay.style.top= '210px';  
    stonePlay.style.left= '200px';
  }
  setsGrid(
    '180px 500px auto 100px',
    '80px 500px auto 100px',
    '90px minmax(550px, calc(100vh - 90px))',
    '90px minmax(550px, calc(100vh - 90px))',
    'auto', 'auto','stretch','stretch');
  stoneAnimation('amplificador linear 2s both');
  pauseAudio(audioAmpPhone);
  toggleStopButton();
  checkScrollHeight();
}
// ! ************ EVENT LISTENERS  ********

// TODO EVENT LISTENER FOR ANIMATIONS
document.getElementById('ampPhone').addEventListener('click',toggleAmpAnimation);
document.getElementById('ilPlayPhone').addEventListener('click',toggleAmpAnimation);
document.getElementById('ampSlide').addEventListener('click',toggleAmpAnimation);
document.getElementById('ilPlaySlide').addEventListener('click',toggleAmpAnimation);
document.getElementById('stoneContainer').addEventListener('click', toggleStoneAnimation);

// TODO EVENT LISTENER FOR SLIDEBAR - TOGGLE
cursorSpace.addEventListener('click', toggleSlide);

// TODO - EVENT LISTENERS FOR NAV SECTIONS
document.getElementById('bio').addEventListener('click', clickHome);
document.getElementById('music').addEventListener('click',clickMusic);
document.getElementById('video').addEventListener('click',clickVideo);
document.getElementById('contact').addEventListener('click', clickContact);

// TODO - EVENT LISTENER FOR PICS ON GALLERY
document.getElementById('topLeftBox').addEventListener('click',function(){
  const y= this.classList.item(0);
  // SETS THE RIGHT LYRICS FOR THIS ALBUM
  displaysTexts('none','none','block','none','none',y,'cover','bottom','song-rocks');
  // SETS THE RIGHT PIC AND POSITION ON THE BIG SQUARE
  if(screenM.matches ){
    bigBox.style.backgroundPosition='bottom';
    bigBox.style.backgroundSize='340px';
  } else{
    if(screenS.matches){
      bigBox.style.background=`url('media/${y}-clean.jpg')`;
      bigBox.style.backgroundSize='cover';
      bigBox.style.backgroundPosition='bottom';
    }else{
      bigBox.style.backgroundPosition='bottom';
    }
  } 
  pauseAudio(audioAmpPhone);
  pauseAudio(audioAmpSlide);
  checkScrollHeight();
});
document.getElementById('topRightBox').addEventListener('click',function(){  
  const y= this.classList.item(0);
  displaysTexts('none','none','none','none','block',y,'cover','top','song-signal');
  if(screenS.matches ){
    bigBox.style.background=`url('media/${y}-clean.jpg')`;
    bigBox.style.backgroundPosition='bottom';
    bigBox.style.backgroundSize='cover';
  } 
  checkScrollHeight();
});
document.getElementById('bottomLeftBox').addEventListener('click',function(){
  const y= this.classList.item(0);
  defaultMusicGallery(y);
  checkScrollHeight();
});
document.getElementById('bottomRightBox').addEventListener('click',function(){
  const y= this.classList.item(0);
  displaysTexts('none','block','none','none','none',y,'cover','center','song-violence');
  checkScrollHeight();
});

// TODO EVENT LISTENER VIDEO CONTROLS
document.getElementById('buttons').addEventListener('click',function(){
  togglePlayPause();
});
document.getElementById('stopButton').addEventListener('click',function(){
  toggleStopButton();
});
plate.addEventListener('click', function(){
  if(videoGallery.style.display != 'none'){
    togglePlayPause();
    plateIl.classList.remove("plate");
    void plateIl.offsetWidth; // trigger a DOM reflow
    plateIl.classList.add("plate");
  }
});
iconArrowRight.addEventListener('click', function(){
  csources = [
    'media/video-flora.mp4',
    'media/video-let.mp4',
    'media/video-live2.mp4'
  ];
  posters = [
    'media/imgVideo2.jpg',
    'media/imgVideo1.jpg',
    'media/imgVideo4.jpg'
  ];
  textsVideos = [
    textLong,
    textContact,
    textShenandoah
  ];

  if(cimage >= 3 ) {
    cimage = 0;
  }
  if(p >= 3 ) {
    p = 0;
  }
  if(texts >= 3 ) {
    texts = 0;
  }
  // Change the source image
  video.src = csources[cimage ++];
  video.poster = posters[p ++];
  video.style.transition ='all 1.5s ease';

  display('none',textContact);
  display('none',textShenandoah);
  display('none',textLong);
  display('block',textsVideos[texts ++]);
  resetsPlateAnimation();
  checkScrollHeight();
});
video.onclick = function(){
  togglePlayPause();
}

// *!  EVENT LISTENERS MEDIA QUERYS *************/
function placeBigScreens(screen){
  noTransition();
  if(videoGallery.style.display != 'none'){
    clickVideo();
  }
  if(contactSection.style.display != 'none'){
    clickContact();
  }
  if((bioPicContainerSmall.style.display != 'none') || (bioPicContainerBig.style.display != 'none')){
    clickHome();
  }
  if(galleryAlbums.style.display != 'none'){
    clickMusic();
  }
  mainWrapper.style.transition = 'none';
    if(slidebar.classList.contains('clickOpen')==false){
    pushbackMedia();
  }else{
    pushMedia();
  }
  if(screen.matches  && (slidebar.classList.contains('clickOpen')== false)){  
    closeSlide();
    pushbackMedia();
  }
  if(screen.matches && (slidebar.classList.contains('clickOpen')==true)) {  
    pushMedia();
    openSlide();
  }
}
function placeSmallScreens(screen){
  if(screen.matches){
    mainWrapper.style.marginLeft='0';
    mainWrapper.style.transition = 'none';
    if((bioPicContainerSmall.style.display != 'none') || (bioPicContainerBig.style.display != 'none')){
      clickHome();
    }
    if(galleryAlbums.style.display != 'none'){
      clickMusic();
    }
    if(videoGallery.style.display != 'none'){
      clickVideo();
    }
    if(contactSection.style.display != 'none'){
      clickContact();
    }
  }
}
//  TODO x small screen event
screenXS.addListener(function(){
  placeSmallScreens(screenXS);
});
// TODO small screen event
screenS.addListener(function(){
  placeSmallScreens(screenS);
});
//  *TODO screenSsmall screen event
screenSsmall.addListener(function(){
  placeSmallScreens(screenSsmall);
});
//  *TODO screenSlarge screen event
screenSlarge.addListener(function(){
  placeSmallScreens(screenSlarge);
});
//  *TODO medium screen event 
screenM.addListener(function(){
  placeBigScreens(screenM);
});
extraScreenM.addListener(function(){
  placeBigScreens(extraScreenM);
});
//  *TODO large screen event
screenL.addListener(function(){
  placeBigScreens(screenL);
});
extraScreenL.addListener(function(){
  placeBigScreens(extraScreenL);
});
//  *TODO xlarge screen event
screenXL.addListener(function(){
  placeBigScreens(screenXL);
});