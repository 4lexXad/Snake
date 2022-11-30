class Game {
    constructor (canvas) {
        this.ctx = canvas.getContext('2d');

        this.w = canvas.width;
        this.h = canvas.height;
    }

    clear () {
        this.ctx.clearRect(0, 0, this.w, this.h);
    }

    moveAndDraw (array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {

                array[i][j].move();
                this.ctx.fillStyle = array[i][j].color;
                this.ctx.fillRect(array[i][j].x, array[i][j].y, array[i][j].w, array[i][j].h);
                
            }
        }
    }

    kill (array, ent) {
        return array.filter(a => {
            return a !== ent;
        })
    }
}