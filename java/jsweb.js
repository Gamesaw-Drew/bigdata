function makeHome() {
    document.getElementById("webview").innerHTML = '        <br>         ' + '<br>         ' + '<div class = "centered">             ' + '<img src = "images/BIGDATA.jpg" width = "40%">         ' + '</div>         ' + '<p id = "credits" class = "centered"> By Jason Gleba, Drew Ciaramitaro, Evan Foster, and Sam Dubrule</p>';

    document.getElementById("home").className = "mainbtn mainbtn_curpage";
    document.getElementById("pg2").className = "mainbtn";
    document.getElementById("bd").className = "mainbtn";
    document.getElementById("pg3").className = "mainbtn";
    document.getElementById("pg4").className = "mainbtn";
    window.location.hash = "#p1"
}

function makepg2() {
    document.getElementById("webview").innerHTML = '    <br><br>     <div class = "centered">         <h1>DATA MAKES A BIG DIFFERENCE</h1>         <div class = "seperatebutequal"></div>         <div>         <h2>How many data points are in your data?</h2>             <h3>- There are 2603 data points </h3>         </div>         <div class = "seperatebutequal"></div>         <div>         <h2>How valid is your story</h2>             <h3>- Our story is very valid because of the number of data points over a period of five years</h3>         </div>         <div class = "seperatebutequal"></div>         <br>         <div>         <h5><a class="mainbtn" href="https://www.bls.gov/spotlight/2010/college/data.htm">Link to outside data: https://www.bls.gov/spotlight/2010/college/data.htm</a></h5>         </div>         <br>         <div class = "seperatebutequal"></div>     </div>';
    document.getElementById("home").className = "mainbtn";
    document.getElementById("pg2").className = "mainbtn mainbtn_curpage";
    document.getElementById("bd").className = "mainbtn";
    document.getElementById("pg3").className = "mainbtn";
    document.getElementById("pg4").className = "mainbtn"
    window.location.hash = "#p2"
}

function makebd() {
    document.getElementById("webview").innerHTML = '        <br><br>         <div class = "centered">             <div>                 <h1>About Students in colleges around the world</h1>                 <h2>Questions about the data</h2>             </div>              <div class = "seperatebutequal"></div>              <div>                 <h3>1. Which college in the US has the most international students?</h3>                 <h4>-Purdue University</h4>                 <img src = "images/graph1.png"/>                 <p> We made this to figure out which US college has the most international students. </p>             </div>              <div class = "seperatebutequal"></div>              <div>                 <h3>2. Which colleges have a greater female to male ratio?</h3>                 <h4>-About 1405 Colleges around the world</h4>                 <h4>-Some include Qatar University, Socohow University, and Rush University to name a few</h4>             </div>              <div class = "seperatebutequal"></div>              <div>                 <h3>3. Which country has the most colleges in their borders?</h3>                 <h4>-The United States coming in with 659 colleges</h4>                 <img src = "images/graph2.png"/>                 <p>insert reasoning here</p>             </div>              <div class = "seperatebutequal"></div>          </div>';
    document.getElementById("home").className = "mainbtn";
    document.getElementById("pg2").className = "mainbtn";
    document.getElementById("bd").className = "mainbtn mainbtn_curpage";
    document.getElementById("pg3").className = "mainbtn";
    document.getElementById("pg4").className = "mainbtn"
    window.location.hash = "#p3"
}

function makepg3() {
    document.getElementById("webview").innerHTML = '    <br><br>     <div class = "centered">         <h1> The Big Question </h1>         <div class = "seperatebutequal"></div>         <div>             <h3>Which college in the USA has the greatest female to male ratio of international students?</h3>             <img src = "images/graph3.png" width = "40%">             <br>             <p> We chose this graph because we wanted to know the number of international students in colleges with a greater female to male ratio.</p>         </div>     </div>      <div class = "seperatebutequal"></div>      <div class = "centered">         <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>         <video loop autoplay src = "images/Squidward_head_bang.mp4" width = "40%"/>     </div>';
    document.getElementById("home").className = "mainbtn";
    document.getElementById("pg2").className = "mainbtn";
    document.getElementById("bd").className = "mainbtn";
    document.getElementById("pg3").className = "mainbtn mainbtn_curpage";
    document.getElementById("pg4").className = "mainbtn"
    window.location.hash = "#p4"
}

function makepg4() {
    document.getElementById("webview").innerHTML = '    <br><br>     <div class = "centered">         <h1>What have we learned?</h1>         <h4>•We learned to look at data, categorize it, and make graphs out of it.</h4>         <h4>•We learned that graphs are easier to read than looking at big data sets.</h4>         <h4></h4>     </div>';
    document.getElementById("home").className = "mainbtn";
    document.getElementById("pg2").className = "mainbtn";
    document.getElementById("bd").className = "mainbtn";
    document.getElementById("pg3").className = "mainbtn";
    document.getElementById("pg4").className = "mainbtn mainbtn_curpage"
    window.location.hash = "#p5"
}

function makeNavBar() {
    document.getElementById("nav").innerHTML = '<a id = "home" onclick="makeHome()" class = "mainbtn" style = "width: 160px;height: 80px;">HOME</a> ';
    document.getElementById("nav").innerHTML += '<a id = "pg2" onclick="makepg2()" class = "mainbtn" style = "width: 160px;height: 80px;">Questions</a> ';
    document.getElementById("nav").innerHTML += '<a id = "bd" onclick="makebd()" class = "mainbtn" style = "width: 160px;height: 80px;">The Data</a> ';
    document.getElementById("nav").innerHTML += '<a id = "pg3" onclick="makepg3()" class = "mainbtn" style = "width: 160px;height: 80px;">The Big Question</a> ';
    document.getElementById("nav").innerHTML += '<a id = "pg4" onclick="makepg4()" class = "mainbtn" style = "width: 160px;height: 80px;">Learned</a>';
}
function begin() {
    setTimeout(makeNavBar, 1);
    if(window.location.hash){
        if(window.location.hash == "#p1"){
            setTimeout(makeHome, 200)
        }
        if(window.location.hash == "#p2"){
            setTimeout(makepg2, 200)
        }
        if(window.location.hash == "#p3"){
            setTimeout(makebd, 200)
        }
        if(window.location.hash == "#p4"){
            setTimeout(makepg3, 200)
        }
        if(window.location.hash == "#p5"){
            setTimeout(makepg4, 200)
        }
    }
    else{setTimeout(makeHome, 200);}
}
window.onload = begin();

function hashChange() {
    if(window.location.hash){
        if(window.location.hash == "#p1"){
            makeHome();
        }
        if(window.location.hash == "#p2"){
            makepg2();
        }
        if(window.location.hash == "#p3"){
            makebd();
        }
        if(window.location.hash == "#p4"){
            makepg3();
        }
        if(window.location.hash == "#p5"){
            makepg4();
        }
    }
    else{setTimeout(makeHome, 200);}
}
window.onhashchange = hashChange;