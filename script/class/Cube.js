import { Entity } from "../module.js";

let scale = 10;

export class Cube extends Entity {
    constructor (x, y) {
        super (x, y, scale, scale, 'black');
    }
}