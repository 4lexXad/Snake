import * as Module from "./module.js";

let scale = 10;

export const GAME = new Module.Game(document.getElementById("backboard"));

let snake = [
    new Module.Snake(10, 20, /* Module.createBrain(0.5) */),
]

let food = [
    new Module.Food(random(GAME.w / scale, 0), random(GAME.h / scale, 0)),
]

let entity = [
    snake, 
    food
]

function play () {

    console.log(snake);

    snake.forEach(snk => {
        entity.push(snk.body);
    })

    frame();
    setInterval(frame, 25);
}

function frame() {

    GAME.clear();
    GAME.moveAndDraw(entity);

    snake.forEach(snk => {
        food.forEach(f => {
            if (collision(snk, f)) {
                snk.eat();
                f.rnd();
            }
        })
    })

    snake.forEach(snk => {
        snk.body.forEach(bd => {
            if (collision(snk, bd)) {
                entity = GAME.kill(entity, snake);
                snake = GAME.kill(snake, snk);
                entity.push(snake);
            }
            
        })
    })

    //window.requestAnimationFrame(frame);
}

export function random(max, min) {
    let random = Math.random() * max + min;
    random = Math.trunc(random) * 10;
    return random;
}

function collision(a, b) {
    if (a.x == b.x && a.y == b.y) return true;
    return false;
}


window.onkeydown = function (e) {
    if (KEY[e.keyCode]) KEY[e.keyCode](snake[0]);
}

play ();