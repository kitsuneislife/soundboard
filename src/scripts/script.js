
var bars = document.querySelectorAll(".music");
var colorSpectrum = document.getElementById("colorSpectrum");
var graySpectrum = document.getElementById("graySpectrum");

var nowplaying = "";

var musics = {
    billiebossanova: new Audio('src/audio/billiebossanova.mp3'),
    doiwannaknow: new Audio('src/audio/doiwannaknow.mp3'),
    donadosmeusgatos: new Audio('src/audio/donadosmeusgatos.mp3'),
    goingunder: new Audio('src/audio/goingunder.mp3'),
    honeymaker: new Audio('src/audio/honeymaker.mp3'),
    howtodisappear: new Audio('src/audio/howtodisappear.mp3'),
    juliet: new Audio('src/audio/juliet.mp3'),
    k: new Audio('src/audio/k.mp3'),
    killbill: new Audio('src/audio/killbill.mp3'),
    midnightlove: new Audio('src/audio/midnightlove.mp3'),
    milkofthesiren: new Audio('src/audio/milkofthesiren.mp3'),
    notsobadinla: new Audio('src/audio/notsobadinla.mp3'),
    slimeyouout: new Audio('src/audio/slimeyouout.mp3'),
    tacotruckxvb: new Audio('src/audio/tacotruckxvb.mp3'),
    willow: new Audio('src/audio/willow.mp3')
};

var containers = {
    billiebossanova: document.getElementById("billiebossanova"),
    doiwannaknow: document.getElementById("doiwannaknow"),
    donadosmeusgatos: document.getElementById("donadosmeusgatos"),
    goingunder: document.getElementById("goingunder"),
    honeymaker: document.getElementById("honeymaker"),
    howtodisappear: document.getElementById("howtodisappear"),
    juliet: document.getElementById("juliet"),
    k: document.getElementById("k"),
    killbill: document.getElementById("killbill"),
    midnightlove: document.getElementById("midnightlove"),
    milkofthesiren: document.getElementById("milkofthesiren"),
    notsobadinla: document.getElementById("notsobadinla"),
    slimeyouout: document.getElementById("slimeyouout"),
    tacotruckxvb: document.getElementById("tacotruckxvb"),
    willow: document.getElementById("willow")
};

var playButtons = {
    billiebossanova: document.getElementById("playbilliebossanova"),
    doiwannaknow: document.getElementById("playdoiwannaknow"),
    donadosmeusgatos: document.getElementById("playdonadosmeusgatos"),
    goingunder: document.getElementById("playgoingunder"),
    honeymaker: document.getElementById("playhoneymaker"),
    howtodisappear: document.getElementById("playhowtodisappear"),
    juliet: document.getElementById("playjuliet"),
    k: document.getElementById("playk"),
    killbill: document.getElementById("playkillbill"),
    midnightlove: document.getElementById("playmidnightlove"),
    milkofthesiren: document.getElementById("playmilkofthesiren"),
    notsobadinla: document.getElementById("playnotsobadinla"),
    slimeyouout: document.getElementById("playslimeyouout"),
    tacotruckxvb: document.getElementById("playtacotruckxvb"),
    willow: document.getElementById("playwillow")
};

function addEndedEventListener(audio) {
  audio.addEventListener("ended", function() {
      musics[nowplaying].pause();
      musics[nowplaying].currentTime = 0;
      playButtons[nowplaying].src = "src/assets/play.png";
      playButtons[nowplaying].classList.remove("playing");
      containers[nowplaying].classList.remove("containerPlaying");
      toggleBars(false);
      nowplaying = "";
  });
}

for (var key in musics) {
  if (musics.hasOwnProperty(key)) {
      addEndedEventListener(musics[key]);
  }
}

function toggleBars(bool) {
  if(bool) {
    for(bar in bars) {
      let id = (Number(bar)+1);
      if(isNaN(id)) continue;
      bars[bar].classList.add(`music${id}`)
    }  
    graySpectrum.classList.add("invisi");
  } else {
    for(bar in bars) {
      let id = (Number(bar)+1);
      if(isNaN(id)) continue;
      bars[bar].classList.remove(`music${id}`)
    }
    graySpectrum.classList.remove("invisi");
  }
}

function play(musicName) {
  if (!nowplaying) nowplaying = musicName;
  if (musicName != nowplaying) {
    musics[nowplaying].pause();
    musics[nowplaying].currentTime = 0;
    playButtons[nowplaying].src = "src/assets/play.png";
    playButtons[nowplaying].classList.remove("playing");
    containers[nowplaying].classList.remove("containerPlaying");
    colorSpectrum.classList.remove(nowplaying);
    nowplaying = musicName;
  }
  if (nowplaying == musicName) {
    if (musics[musicName].paused) {
      musics[musicName].play();
      playButtons[musicName].src = "src/assets/pause.png";
      playButtons[musicName].classList.add("playing");
      containers[musicName].classList.add("containerPlaying");
      colorSpectrum.classList.add(musicName);
      toggleBars(true);
    } else {
      musics[musicName].pause();
      playButtons[musicName].src = "src/assets/play.png";
      toggleBars(false);
    }
  }
}


/*function play(musicName) {  

  var playButton = document.getElementById(`play${musicName}`);
  
  if(playButton.src == "https://neardeath.kitsuneislife.repl.co/src/assets/play.png") {
    playButton.src = "src/assets/pause.png";
    for (const nusic in musics) {
        if (musics.hasOwnProperty(nusic)) {
            const audio = musics[nusic];
            if(audio == musics[musicName]) {
              console.log('ok')
              continue;
            }
            if (!audio.paused) {
              audio.pause();
              audio.currentTime = 0;
            }
        }
    }
    toggleBars();
    musics[musicName].play();
    graySpectrum.classList.toggle("invisi");
  } else {
    playButton.src = "src/assets/play.png";
    toggleBars();
    musics[musicName].pause();
    musics[musicName].currentTime = 0;
    graySpectrum.classList.toggle("invisi");
  }
}*/