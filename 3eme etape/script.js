function myFunction1() {
    // Get the checkbox
    var checkBox = document.getElementById("checkbox1");
    // Get the output text
    var text = document.getElementById("image");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function myFunction2() {
    // Get the checkbox
    var checkBox = document.getElementById("checkbox2");
    // Get the output text
    var text = document.getElementById("formSection");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function myFunction3() {
    // Get the checkbox
    var checkBox = document.getElementById("checkbox3");
    // Get the output text
    var text = document.getElementById("progressSection");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("checkbox").checked = false;

    document.getElementById("formSection").style.display = "none";
    document.getElementById("progressSection").style.display = "none";
    document.getElementById("image").style.display = "none";
    
    //========================================================================
    const radio1 = document.getElementById("radio1");
    const radio2 = document.getElementById("radio2");
    const radio3 = document.getElementById("radio3");

    if (radio1.nextSibling) {
        radio1.nextSibling.textContent = "HP";
    }
    if (radio2.nextSibling) {
        radio2.nextSibling.textContent = "Casque";
    }
    if (radio3.nextSibling) {
        radio3.nextSibling.textContent = "Asus";
    }

    const rangeInput = document.getElementById("range");
    rangeInput.setAttribute("max", "100");
    rangeInput.setAttribute("min", "11");
    console.log("Valeur maximale du volume :", rangeInput.getAttribute("max"));
    console.log("Valeur minimale du volume :", rangeInput.getAttribute("min"));

    document.getElementById("range").addEventListener("input", function() {
        document.getElementById("VLevel").textContent = this.value;
    });

    document.querySelector("label[for='ouinon']").textContent = "Mute";


    const checkbox = document.getElementById('checkbox');
    const volumeRange = document.getElementById('range');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            volumeRange.value = 0;
            console.log("Volume désactivé (muted)");
            document.getElementById("VLevel").textContent = volumeRange.value;
        } else {
            volumeRange.value = 50;
            document.getElementById("VLevel").textContent = volumeRange.value;
        }
    });

    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg';
    const section = document.querySelector('section');
    section.appendChild(img);
});