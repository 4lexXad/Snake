import { Entity } from "../module.js";
import { GAME } from "../module.js";
import { random } from "../module.js";

let scale = 10;

export class Food extends Entity {
    constructor (x, y) {
        super (x, y, scale, scale, 'red');
    }

    rnd () {
        this.x = random(GAME.w / 10, 0);
        this.y = random(GAME.h / 10, 0);
    }
}