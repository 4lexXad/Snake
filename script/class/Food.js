import { Entity } from "../module.js";
import { Var } from "../module.js";
import { fun } from "../module.js";

export class Food extends Entity {
    constructor (x, y) {
        super (x, y, Var.scale.value, Var.scale.value, 'red');
    }

    rnd () {
        this.x = fun.random(Var.width.value / 10, 0);
        this.y = fun.random(Var.height.value / 10, 0);
    }
}