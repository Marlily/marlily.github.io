// slider 
const slider = new bootstrap.Carousel(document.querySelector("#slider"), {
    interval: 2000,
    pause: true
  });

  const btnPlay = document.getElementById("playBtn");
  const btnStop = document.getElementById("pauseBtn");

  btnStop.addEventListener("click", function (e) {
    slider.pause();

    btnStop.classList.add("d-none");
    btnPlay.classList.remove("d-none");
    
});

btnPlay.addEventListener("click", function (e) {
    slider.cycle();
    
    btnPlay.classList.add("d-none");
    btnStop.classList.remove("d-none");
});