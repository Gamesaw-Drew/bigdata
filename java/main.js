function start() {
    document.getElementById("footerbase").innerHTML = "Bigdata";
    if( document.getElementById("credits")) bigData1();
}

function begin() {
    setTimeout(start, 20);  // Wait a few milliseconds to make sure all the objects it wants are loaded
}

function bigData1(){
    document.getElementById("credits").innerHTML = " BIG DATA";
    setTimeout(bigData2, 1000);
}

function bigData2() {
    document.getElementById("credits").innerHTML = " By Jason Gleba, Drew Ciaramitaro, Evan Foster, and Sam Dubrule";
    setTimeout(bigData1, 1000);
}

window.onload = begin();
