$('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 

var cl = console.log;
let images = ['image/1.jpg', 'image/3.jpg','image/4.jpg'];
let interval  = setInterval(changerImage, 6000);

function changerImage() {
    let image = document.querySelector('img');
    let src = image.getAttribute('src');
    let indiceImage = images.indexOf(src);
    indiceImage = (indiceImage + 1) % images.length;
    image.setAttribute('src', images[indiceImage]);
}
