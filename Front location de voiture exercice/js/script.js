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

        
//         //variable index de l'image affichée
//         var slideIndex = 1;
//         //Tableau de caracteristique des vehicules
//         var modele = ["Peugeot 208", "Citroen C4", "Mercedes benz", "Renault 4L"];
//         var detail = ["Diesel,5 portes,GPS,AutoRadio,Forfait 1000 KM (0,5/km supplémentaire).", "Electrique,3 portes,GPS,AutoRadio,Forfait 1000 KM (0,5/km supplémentaire).", "GPL,5 portes,GPS,LecteurCD,Forfait 1000 KM (0,5/km supplémentaire).", "Essence,3 portes, pas de GPS ni d'AutoRadio,Forfait 1000 KM (0,5/km supplémentaire)."];
//         var prix = ["999", "765", "1200", "2"];
//         var agence = ["Paris", "Toulouse", "Orleans", "ville-taneuze"];
//         var modeleIndex = 0;


//         // fonction de remplacement des caracteristique du vehicule par rapport a l image affichée
//         function changeText() {
//             $('#modeleLocation').text(modele[modeleIndex]);
//         };
   
//    var parseDate = function(value) {
// 		var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
// 		if (m)
// 			value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);

// 		return value;
//    }
