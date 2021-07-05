let imagenes = [];
let index = 0;

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

function setup() {
    createCanvas(400,400);
}
function draw() {
    background(51);

    stroke(255);

    image(imagenes[index], 10, 10, width-20,height-20);
}