const KEY = {
    '37': (ent) => {
        ent.left()
    },
    '38': (ent) => {
        ent.up()
    },
    '39': (ent) => {
        ent.right()
    },    
    '40': (ent) => {
        ent.down()
    },
}

window.onkeydown = function (e) {
    if (KEY[e.keyCode]) KEY[e.keyCode](snake[0]);
}