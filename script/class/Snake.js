import { Entity } from "../module.js";
import { Cube } from "../module.js";
import { Var } from "../module.js";

export class Snake extends Entity {
    constructor (x, y, brain) {
        super (x, y, Var.scale.value, Var.scale.value, 'blue');

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
            this.x -= Var.speed.value;
            if (this.x < 0) this.x = Var.width.value;
        }
        else if (this.motion.up) {
            this.y -= Var.speed.value;
            if (this.y < 0) this.y = Var.height.value;
        }
        else if (this.motion.right) {
            this.x += Var.speed.value;
            if (this.x > Var.width.value) this.x = 0;
        }
        else if (this.motion.down) {
            this.y += Var.speed.value;
            if (this.y > Var.height.value) this.y = 0;
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