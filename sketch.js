//let imagenes = ["foto_0.jpg", "foto_1.jpg", "foto_2.jpg"];
let index = 1;
let bubble = [];
let foto;
let imagenes = [];

function preload() {
    for (let i = 0; i < 3; i ++) {
    imagenes[i] = `foto_${i}.jpg`
  }
}


function cambiarFoto() {
    index ++;

    if (index >= imagenes.length) {
        index = 0;
    }

    foto = document.getElementById('imagenes').src = imagenes[index];
}

function Bubble() {
    this.x = 200;
    this.y = 200;

    this.show = function() {
        ellipse(this.x, this.y, 50, 50);
    }

    this.update = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}

function setup() {
    createCanvas(400,400);
    

    //imagenes = ["foto_0.jpg", "foto_1.jpg", "foto_2.jpg"]
    let boton = createButton("Click Me");
    boton.mousePressed(cambiarFoto);

    bubble.push(new Bubble())
    setInterval(cambiarFoto, 1000);
}
function draw() {
    background(51);
    bubble[0].show();

}