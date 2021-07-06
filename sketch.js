let imagenes = [];
let index = 0;
let bubble = [];

/*function preload() {
    for (let i = 0; i < 3; i ++) {
        imagenes[i] = loadImage(`foto_${i}.jpg`);
    }

    setInterval(cambiarFoto, 1000);
}*/

function cambiarFoto() {
    index ++;
    if (index >= imagenes.length) {
        index = 0;
    }
}

function Bubble() {
    this.x = 200;
    this.y = 200;

    this.show = function() {
        ellipse(this.x, this.y, 50, 50);
    }
}

function setup() {
    createCanvas(400,400);
    bubble.push(new Bubble())
    setInterval(cambiarFoto, 1000);
}
function draw() {
    background(51);
    bubble[0].show();

}