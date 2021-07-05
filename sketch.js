let imagenes = [];
let index = 0;
let bubble = [];

function preload() {
    for (let i = 0; i < 3; i ++) {
        imagenes[i] = loadImage(`foto_${i}.jpg`);
    }

    setInterval(cambiarFoto, 1000);
}

function cambiarFoto() {
    index ++;
    if (index >= imagenes.length) {
        index = 0;
    }
}

function Bubble() {
    this.x = 20;
    this.y = 20;

    this.show = function() {
        image(imagenes[0],this.x, this.y, width-40, height-40);
    }
}

function setup() {
    createCanvas(400,400);
    bubble.push(new Bubble())
}
function draw() {
    background(51);
    bubble[0].show();

}