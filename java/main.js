function start() {
    document.getElementById("footerbase").innerHTML = "Bigdata";
    if( document.getElementById("credits")) bigData1();
    document.getElementById("nav").innerHTML = '<a href = "index.html" class = "mainbtn" style = "width: 160px;height: 80px;">HOME</a> '+
        '<a href = "page2.html" class = "mainbtn mainbtn_curpage" style = "width: 160px;height: 80px;">page2</a> '+
        '<a href = "bigdata.html" class = "mainbtn" style = "width: 160px;height: 80px;">BIG DATA</a> '+
        '<a href = "page3.html" class = "mainbtn" style = "width: 160px;height: 80px;">page3</a>'
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
