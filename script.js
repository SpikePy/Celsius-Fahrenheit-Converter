function fahrenheit() {
    document.getElementById("celsius").value = Math.round((document.getElementById("fahrenheit").value - 32) / 1.8)
}

function celsius() {
    document.getElementById("fahrenheit").value = Math.round(document.getElementById("celsius").value * 1.8 + 32)
}