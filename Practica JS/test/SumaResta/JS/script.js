function sumar() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var result = parseFloat(a) + parseFloat(b);

    document.getElementById("resultSuma").innerHTML = result;
}

function restar() {
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var result = parseFloat(c) - parseFloat(d);

    document.getElementById("resultRestar").innerHTML = result;
}

function resaltar(){
    document.getElementById("titulo").style.backgroundColor="red";
}

function opacar(){
document.getElementById("titulo").style.backgroundColor="lightgrey"

}