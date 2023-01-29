const hero = document.querySelector('.hero');
hero.style.top = '500px';
hero.style.left = '100px';

const ghost = document.querySelector('.ghost');
ghost.style.top = '200px';
ghost.style.left = '600px';

const treasure = document.querySelector('.treasure');
treasure.style.top = '0px';
treasure.style.left = '400px';
// movements by arrow keys and WASD
// movement restricted to game board

document.addEventListener(("keydown"), (event) => {
    if (event.code === "ArrowUp" || event.code === "KeyW") {
        if ((parseInt(hero.style.top) === 0)) {
            hero.style.top;
        } else {
        hero.style.top = (parseInt(hero.style.top) - 100) + "px";
        }
    }
    if (event.code === "ArrowDown" || event.code === "KeyS") {
        if ((parseInt(hero.style.top) === 500)) {
            hero.style.top;
        } else {
        hero.style.top = (parseInt(hero.style.top) + 100) + "px";
        }
    }
    if (event.code === "ArrowLeft" || event.code === "KeyA") {
        if ((parseInt(hero.style.left) === 0)) {
            hero.style.left;
        } else {
        hero.style.left = (parseInt(hero.style.left) - 100) + "px";
        }
    }
    if (event.code === "ArrowRight" || event.code === "KeyD") {
        if ((parseInt(hero.style.left) === 700)) {
            hero.style.left;
        } else {
        hero.style.left = (parseInt(hero.style.left) + 100) + "px";
        }
    }
    
    
    // victory condition
    if (hero.getBoundingClientRect().left === treasure.getBoundingClientRect().left && hero.getBoundingClientRect().top === treasure.getBoundingClientRect().top) {
        alert("You won");
    }
    
    if (hero.getBoundingClientRect().left === ghost.getBoundingClientRect().left && hero.getBoundingClientRect().top === ghost.getBoundingClientRect().top) {
        alert("You lost");
    }
});
// ghost coming at hero 
const getCloseMovement = () => {
    if ((parseInt(hero.style.top)) > (parseInt(ghost.style.top))) {
        ghost.style.top = (parseInt(ghost.style.top) + 100) + "px";
    } else {
        ghost.style.top = (parseInt(ghost.style.top) - 100) + "px";
    }
    if ((parseInt(hero.style.left)) < (parseInt(ghost.style.left))) {
        ghost.style.left = (parseInt(ghost.style.left) - 100) + "px";
    } else  {
        ghost.style.left = (parseInt(ghost.style.left) + 100) + "px";
    }
}

const ghostMovement = setInterval(getCloseMovement, 1000);




