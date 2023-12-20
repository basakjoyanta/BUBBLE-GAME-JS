var tl=gsap.timeline()

function time(){
    var a=0;
    setInterval(function(){
        a+=Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector(".loader h1").innerHTML=a+"%"
        }
        else{
            a=100
            document.querySelector(".loader h1").innerHTML=a+"%"
           
        }
    },100)
}
tl.to(".loader h1",{
    delay:0.5,
    duration:1,
    onStart:time(),

})
tl.to(".loader",{
    top:"-100vh",
    delay:0.4,
    duration:1,
    
})







let score = 0;
let timer = 60;
let hitrn = 0;

function makebubble() {
    let clutter = "";

    for (let i = 1; i <= 126; i++) {
        let randomnumber = Math.floor(Math.random() * 100);
        clutter += `<div class="bubble">${randomnumber}</div>`;
    }
    document.querySelector(".pbotom").innerHTML = clutter;
}

function runtimer() {
    let timerinter = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerinter);
            document.querySelector(".pbotom").innerHTML = `<h1> GAME OVER</h1>`;
        }
    }, 1000);
}

function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increasescore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".pbotom").addEventListener("click", function (val) {
    let clicknum = Number(val.target.textContent);
    if (clicknum === hitrn) {
        increasescore();
        makebubble();
        getnewhit();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    runtimer();
    makebubble();
    getnewhit();
});




