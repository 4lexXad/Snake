import { createBrain } from "../IA-JS/script.js"

function random(max, min) {
    let random = Math.random() * max + min;
    random = Math.trunc(random) * 10;
    return random;
}

export { random, createBrain }