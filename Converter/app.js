let celcius = document.getElementById("cel");
let fahreniat = document.getElementById("fahr");

celcius.addEventListener("input",cellToFahr);
fahreniat.addEventListener("input",fahrToCell);

function cellToFahr(){
    let output = parseFloat(celcius.value * 9/5) +32;
    fahreniat.value = parseFloat(output.toFixed(2));
}

function fahrToCell(){
    let output = parseFloat(fahreniat.value - 32) * 5/9;
    celcius.value = parseFloat(output.toFixed(2));
}