function start() {
    document.getElementById("footerbase").innerHTML = "Bigdata";
    if( document.getElementById("credits")) bigData1();
    document.getElementById("nav").innerHTML = '<a id = "home" href = "index.html" class = "mainbtn" style = "width: 160px;height: 80px;">HOME</a> '+
        '<a id = "pg2" href = "page2.html" class = "mainbtn" style = "width: 160px;height: 80px;">Questions</a> '+
        '<a id = "bd" href = "bigdata.html" class = "mainbtn" style = "width: 160px;height: 80px;">The Data</a> '+
        '<a id = "pg3" href = "page3.html" class = "mainbtn" style = "width: 160px;height: 80px;">The Big Question</a>'+
        '<a id = "pg4" href = "page4.html" class = "mainbtn" style = "width: 160px;height: 80px;">pg4</a>'+
    if(document.URL.endsWith('index.html')){ document.getElementById("home").className = "mainbtn mainbtn_curpage"}
    if(document.URL.endsWith('page2.html')){ document.getElementById("pg2").className = "mainbtn mainbtn_curpage"}
    if(document.URL.endsWith('bigdata.html')){ document.getElementById("bd").className = "mainbtn mainbtn_curpage"}
    if(document.URL.endsWith('page3.html')){ document.getElementById("pg3").className = "mainbtn mainbtn_curpage"}
    if(document.URL.endsWith('page4.html')){ document.getElementById("pg4").className = "mainbtn mainbtn_curpage"}
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
