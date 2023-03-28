const player = document.getElementById("player");
const game = document.getElementById("game");
const alien = document.getElementById("alien");
const clickFire = document.getElementById("clickFire");

//result section...
let result = document.getElementById("result");
const score = document.getElementById("score");
const scoreBox = document.getElementById("scoreBox");
const spn = document.getElementById("spn");
let counter = 0;

// Sounds...
const shoot = document.getElementById("shoot");
const gos = document.getElementById("gameover");


//fighter jet movement...
window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if (playerLeft < 200) {
            player.style.left = (playerLeft + 100) + "px";
        }
    }

    if (e.keyCode == "37") {
        var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if (playerLeft > 0) {
            player.style.left = (playerLeft - 100) + "px";
        }
    }
})

right.addEventListener('click', function (e) {
    var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (playerLeft < 200) {
        player.style.left = (playerLeft + 100) + "px";
    }
});
left.addEventListener('click', function (e) {
    var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (playerLeft > 0) {
        player.style.left = (playerLeft - 100) + "px";
    }
});

// fire bullet...

window.addEventListener("keydown", function (e) {
    if (e.keyCode == "32") {
        var canon = document.createElement("div");
        var img = document.createElement("img");
        img.src = "fire.png";
        img.classList.add("bulletImg");
        canon.classList.add("bullet");
        canon.style.left = player.style.left;
        canon.appendChild(img);
        game.appendChild(canon);
        shoot.play();
    }

    //When bullet hit alien...
    setInterval(function collision() {
        var canonLeft = parseInt(window.getComputedStyle(canon).getPropertyValue("left"));
        var canonTop = parseInt(window.getComputedStyle(canon).getPropertyValue("top"));
        var alienLeft = parseInt(window.getComputedStyle(alien).getPropertyValue("left"));
        var alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));

        if (((canonTop - alienTop) < 100) && (alienTop < canonTop) && (alienLeft === canonLeft)) {
            canon.style.display = "none";
            alien.style.display = "none";
            console.log(`score: ${counter}`)
            scoreBox.innerHTML = `score: ${counter}`;
        }
    }, 10);



    setTimeout(function () {
        canon.remove()
    }, 1000);
})

clickFire.addEventListener('click', function (e) {
    var canon = document.createElement("div");
    var img = document.createElement("img");
    img.src = "fire.png";
    img.classList.add("bulletImg");
    canon.classList.add("bullet");
    canon.style.left = player.style.left;
    canon.appendChild(img);
    game.appendChild(canon);
    shoot.play();

    setInterval(function collision() {
        var canonLeft = parseInt(window.getComputedStyle(canon).getPropertyValue("left"));
        var canonTop = parseInt(window.getComputedStyle(canon).getPropertyValue("top"));
        var alienLeft = parseInt(window.getComputedStyle(alien).getPropertyValue("left"));
        var alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));

        if (((canonTop - alienTop) < 100) && (alienTop < canonTop) && (alienLeft === canonLeft)) {
            canon.style.display = "none";
            alien.style.display = "none";
            scoreBox.innerHTML = `score: ${counter}`;
        }

    }, 10);

    setTimeout(function () {
        canon.remove()
    }, 1000);
})


player.addEventListener('click', function (e) {
    var canon = document.createElement("div");
    var img = document.createElement("img");
    img.src = "fire.png";
    img.classList.add("bulletImg");
    canon.classList.add("bullet");
    canon.style.left = player.style.left;
    canon.appendChild(img);
    game.appendChild(canon);
    shoot.play();

    setInterval(function collision() {
        var canonLeft = parseInt(window.getComputedStyle(canon).getPropertyValue("left"));
        var canonTop = parseInt(window.getComputedStyle(canon).getPropertyValue("top"));
        var alienLeft = parseInt(window.getComputedStyle(alien).getPropertyValue("left"));
        var alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));

        if (((canonTop - alienTop) < 100) && (alienTop < canonTop) && (alienLeft === canonLeft)) {
            canon.style.display = "none";
            alien.style.display = "none";
            scoreBox.innerHTML = `score: ${counter}`;
        }

    }, 10);

    setTimeout(function () {
        canon.remove()
    }, 1000);
})



// Alien move...
function alienMove() {
    alien.style.display = "block";
    var random = ((Math.floor(Math.random() * 3)) * 100);
    alien.style.left = random + "px";
    alien.classList.add("alienMove");
    counter++;
    if (counter > 25) {
        alien.style.animationDuration = '1s'
    }
}

setInterval(alienMove, 2000);

//Game over...
function gameOver() {
    var alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));

    if(alienTop > 380){
        result.style.display = 'block';
        game.style.display = 'none';
        score.innerHTML = `score: ${counter}`;
        counter = 0;
        gos.play();
    }
}

setInterval(gameOver, 10);



// Screen fit....
const gameContainer = document.querySelector(".game-container");
const game1 = document.querySelector(".game");

function setGameSize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const gameWidth = game1.offsetWidth;
    const gameHeight = game1.offsetHeight;
    const widthRatio = windowWidth / gameWidth;
    const heightRatio = windowHeight / gameHeight;
    const scale = Math.min(widthRatio, heightRatio);
    game1.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", setGameSize);

setGameSize();

