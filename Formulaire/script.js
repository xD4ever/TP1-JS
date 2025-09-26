/**
 * Fonction pour contrôler l'affichage de l'image via checkbox1
 * Affiche ou masque l'élément avec l'ID "image" selon l'état de la case à cocher
 */
function myFunction1() {
    // Récupérer la case à cocher
    var checkBox = document.getElementById("checkbox1");
    // Récupérer le texte de sortie
    var text = document.getElementById("image");
    // Si la case est cochée, afficher le texte de sortie
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function myFunction2() {
    // Récupérer la case à cocher
    var checkBox = document.getElementById("checkbox2");
    // Récupérer le texte de sortie
    var text = document.getElementById("formSection");
    // Si la case est cochée, afficher le texte de sortie
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";  // Masquer la section formulaire
    }
}

function myFunction3() {
    // Récupérer la case à cocher
    var checkBox = document.getElementById("checkbox3");
    // Récupérer le texte de sortie
    var text = document.getElementById("progressSection");
    // Si la case est cochée, afficher le texte de sortie
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


/**
 * Événement déclenché une fois que le DOM est entièrement chargé
 * Initialise tous les éléments de l'interface utilisateur
 */
document.addEventListener("DOMContentLoaded", function() {
    // Initialisation des cases à cocher - toutes décochées par défaut
    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("checkbox").checked = false;

    // Masquer toutes les sections par défaut
    document.getElementById("formSection").style.display = "none";
    document.getElementById("progressSection").style.display = "none";
    document.getElementById("image").style.display = "none";
    
    //========================================================================
    // Configuration des boutons radio - Attribution des labels
    //========================================================================
    const radio1 = document.getElementById("radio1");
    const radio2 = document.getElementById("radio2");
    const radio3 = document.getElementById("radio3");

    // Définir le texte des labels pour chaque bouton radio
    if (radio1.nextSibling) {
        radio1.nextSibling.textContent = "HP";
    }
    if (radio2.nextSibling) {
        radio2.nextSibling.textContent = "Casque";
    }
    if (radio3.nextSibling) {
        radio3.nextSibling.textContent = "Asus";
    }

    // Configuration du contrôle de volume (slider range)
    const rangeInput = document.getElementById("range");
    rangeInput.setAttribute("max", "100");
    rangeInput.setAttribute("min", "11");
    console.log("Valeur maximale du volume :", rangeInput.getAttribute("max"));
    console.log("Valeur minimale du volume :", rangeInput.getAttribute("min"));

    // Écouteur d'événement pour mettre à jour l'affichage du niveau de volume
    document.getElementById("range").addEventListener("input", function() {
        document.getElementById("VLevel").textContent = this.value;
    });

    // Définir le texte du label pour la case à cocher mute
    document.querySelector("label[for='ouinon']").textContent = "Mute";


    // Gestion de la fonction mute (désactiver/activer le volume)
    const checkbox = document.getElementById('checkbox');
    const volumeRange = document.getElementById('range');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            // Si la case mute est cochée, mettre le volume à 0
            volumeRange.value = 0;
            console.log("Volume désactivé (muted)");
            document.getElementById("VLevel").textContent = volumeRange.value;
        } else {
            // Si la case mute est décochée, remettre le volume à 50%
            volumeRange.value = 50;
            document.getElementById("VLevel").textContent = volumeRange.value;
        }
    });

    // Création et ajout dynamique d'une image (logo UPHF)
    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg';
    const section = document.querySelector('section');
    section.appendChild(img);

    // Gestion du sélecteur de date
    const input = document.getElementById("date");

    // Écouteur d'événement pour capturer les changements de date
    input.addEventListener("change", function() {
        const dateValue = this.value;
        const year = new Date(dateValue).getFullYear();
        console.log("Année choisie :", year);
    });

    let value1 = 0;
    let value2 = 0;

    const p1 = document.getElementById('progress');
    const p2 = document.getElementById('space');

    const step = 5;          // +5% chaque seconde
    const intervalMs = 1000; // 1 seconde

    // Timer pour animer la première barre de progression
    const timer1 = setInterval(() => {
        value1 += step;
        if (value1 > 100) value1 = 100;
        p1.value = value1;
        if (value1 >= 100) clearInterval(timer1);
    }, intervalMs);

    // Timer pour animer la deuxième barre de progression
    const timer2 = setInterval(() => {
        value2 += step;
        if (value2 > 100) value2 = 100;
        p2.value = value2;
        if (value2 >= 100) clearInterval(timer2);
    }, intervalMs);
});
