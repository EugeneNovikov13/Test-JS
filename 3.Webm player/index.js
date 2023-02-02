player = document.querySelector('#player');
time = document.querySelector('.current_time');

player.addEventListener('click', function () {
    if (this.paused) this.play()
    else this.pause()
})

player.addEventListener('timeupdate', function () {
    time.innerHTML = currentTimeTransform(this.currentTime);
})

function currentTimeTransform(time) {
    let roundTime = time.toFixed(3);
    let mmm = Math.floor((roundTime % 1)*1000);
    let sec = Math.floor(roundTime);
    let min = Math.floor(roundTime / 60);
    if (mmm < 100 && mmm > 9) mmm = '0' + mmm;
    else {
        if (mmm < 10 && mmm !== 0) mmm = '00' + mmm;
        else {
            if (mmm === 0) mmm = '000'
        }
    }
    if (sec < 10) sec = '0' + sec;
    if (min < 10) min = '0' + min;
    return min + ':' + sec + ':' + mmm;
}

player.addEventListener('ended', function () {
    this.currentTime = 0;
})