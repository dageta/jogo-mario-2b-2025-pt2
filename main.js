const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const startButtom = document.querySelector(".start")
const gameOverScree = document.querySelector(".game-over")



audioStart = new Audio("./sound/audio_theme.mp3");
const gameOverSound = new Audio("./sound/audio_gameover.mp3");

let gameStarted = false;

const startGame = () => () {
    gamestarted = true;
    pipe.style.animation = "pipe-animation1.5s infinite linear"; 

    startButton.style.display = "none";
    mario.style.opacity = "1";
    pipe.style.opacity = "1";
    nuvem.style.opacity = "1"; 
}


const jump() {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    },
        500);
}

const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.left = `${marioPosition}px`;

        mario.src = "./imagem/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
        gameOverScreen.style.display = "flex";
    } else if(pipePosition , 0 && gameStarted){
}
},10);
document.addEventListener("keydown", jump);


const restartGame = () => {
    window.location.reload();
}