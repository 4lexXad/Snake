import { Entity } from "../module.js";
import { Cube } from "../module.js";
import { GAME } from "../module.js";

let speed = 10;
let scale = 10;

export class Snake extends Entity {
    constructor (x, y, brain) {
        super (x, y, scale, scale, 'blue');

        this.motion = {
            'left': 0,
            'up': 0,
            'right': 1,
            'down': 0 
        }

        this.body = [
            new Cube(this.x, this.y),
        ]

        this.brain = brain;
    }

    move () {

        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        this.body[0].x = this.x;
        this.body[0].y = this.y;

        if (this.motion.left) {
            this.x -= speed;
            if (this.x < 0) this.x = GAME.w
        }
        else if (this.motion.up) {
            this.y -= speed;
            if (this.y < 0) this.y = GAME.h
        }
        else if (this.motion.right) {
            this.x += speed;
            if (this.x > GAME.w) this.x = 0;
        }
        else if (this.motion.down) {
            this.y += speed;
            if (this.y > GAME.h) this.y = 0;
        }
    }

    left () {
        this.motion.left = 1;
        this.motion.up = 0;
        this.motion.right = 0;
        this.motion.down = 0;
    }

    up () {
        this.motion.left = 0;
        this.motion.up = 1;
        this.motion.right = 0;
        this.motion.down = 0;
    }

    right () {
        this.motion.left = 0;
        this.motion.up = 0;
        this.motion.right = 1;
        this.motion.down = 0;
    }

    down () {
        this.motion.left = 0;
        this.motion.up = 0;
        this.motion.right = 0;
        this.motion.down = 1;
    }

    eat () {
        this.body.push(new Cube(this.body[this.body.length - 1].x, this.body[this.body.length - 1].y));
    }
}