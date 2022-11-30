var scale = 10;
const GAME = new Game(document.getElementById("backboard"));
var snake = [
    new Snake(10, 20, /* createBrain(0.8) */),
    new Snake(10, 30, /* createBrain(0.8) */),
    new Snake(10, 40, /* createBrain(0.8) */),
    new Snake(10, 50, /* createBrain(0.8) */),
    new Snake(10, 60, /* createBrain(0.8) */),
    new Snake(10, 70, /* createBrain(0.8) */),
    new Snake(10, 80, /* createBrain(0.8) */),
]
var food = [
    new Food(random(GAME.w / scale, 0), random(GAME.h / scale, 0)),
]
entity = [
    snake, 
    food
]

function play () {

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

function random(max, min) {
    let random = Math.random() * max + min;
    random = Math.trunc(random) * 10;
    return random;
}

function collision(a, b) {
    if (a.x == b.x && a.y == b.y) return true;
    return false;
}

play ();