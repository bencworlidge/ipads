let kick = new Audio('https://raw.githubusercontent.com/bencworlidge/ipads/master/resources/audio/kick.wav')
let snare = new Audio('../resources/audio/snare.wav')
let clap = new Audio('../resources/audio/clap.wav')
let chh = new Audio('../resources/audio/chh.wav')
let ohh = new Audio('../resources/audio/ohh.wav')
let ht = new Audio('../resources/audio/ht.wav')
let lt = new Audio('../resources/audio/lt.wav')
let cv = new Audio('../resources/audio/cv.wav')
let cb = new Audio('../resources/audio/cb.wav')


window.addEventListener("keypress", e => { 
    if (e.key == "q") {
        document.getElementById('pad-1').style.backgroundColor = "orange";
        cb.play();
    }
    window.addEventListener("keyup", e => {
        document.getElementById('pad-1').style.backgroundColor = "rgb(255, 255, 117)";
    })
})

window.addEventListener("keypress", e => { 
    if (e.key == "a") {
        document.getElementById('pad-2').style.backgroundColor = "orange";
        cv.play();
    }
    window.addEventListener("keyup", e => {
        document.getElementById('pad-2').style.backgroundColor = "rgb(255, 255, 117)";
    })
})

window.addEventListener("keypress", e => { 
    if (e.key == "z") {
        document.getElementById('pad-3').style.backgroundColor = "orange";
        kick.play();
    }
    window.addEventListener("keyup", e => {
        document.getElementById('pad-3').style.backgroundColor = "rgb(255, 255, 117)";
    })
})

window.addEventListener("keypress", e => { 
    if (e.key == "w") {
        document.getElementById('pad-4').style.backgroundColor = "orange";
        ht.play();
    }
    window.addEventListener("keyup", e => {
        document.getElementById('pad-4').style.backgroundColor = "rgb(255, 255, 117)";
    })
})

window.addEventListener("keypress", e => { 
    if (e.key == "s") {
        document.getElementById('pad-5').style.backgroundColor = "orange";
        ohh.play();
    }
    window.addEventListener("keyup", e => {
        document.getElementById('pad-5').style.backgroundColor = "rgb(255, 255, 117)";
    })
})

window.addEventListener("keypress", e => { 
    if (e.key == "x") {
        document.getElementById('pad-6').style.backgroundColor = "orange";
        clap.play();
    }
    window.addEventListener("keyup", e => {
        document.getElementById('pad-6').style.backgroundColor = "rgb(255, 255, 117)";
    })
})

window.addEventListener("keypress", e => { 
    if (e.key == "e") {
        document.getElementById('pad-7').style.backgroundColor = "orange";
        lt.play();
    }
    window.addEventListener("keyup", e => {
        document.getElementById('pad-7').style.backgroundColor = "rgb(255, 255, 117)";
    })
})

window.addEventListener("keypress", e => { 
    if (e.key == "d") {
        document.getElementById('pad-8').style.backgroundColor = "orange";
        chh.play();
    }
    window.addEventListener("keyup", e => {
        document.getElementById('pad-8').style.backgroundColor = "rgb(255, 255, 117)";
    })
})

window.addEventListener("keypress", e => { 
    if (e.key == "c") {
        document.getElementById('pad-9').style.backgroundColor = "orange";
        snare.play();
    }
    window.addEventListener("keyup", e => {
        document.getElementById('pad-9').style.backgroundColor = "rgb(255, 255, 117)";
    })
})

