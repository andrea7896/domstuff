var x = document.getElementsByTagName("a");
var lista = document.getElementById("list");

function tagALength(){
    console.log(x.length);
    var el1 = document.createElement("li");
    var txt = document.createTextNode("Enlaces: "+x.length);
    el1.appendChild(txt);
    lista.appendChild(el1);
}

function theLastLink(){
    console.log(x);
    var txt = document.createTextNode(x[x.length-1].href);
    console.log(txt);
    var el = document.createElement("li");
    el.appendChild(txt);
    lista.appendChild(el);
}

function theBeforeLastLink(){
    var txt = document.createTextNode(x[x.length-2].href);
    var el = document.createElement("li");
    el.appendChild(txt);
    lista.appendChild(el);
}

function numberOfLinksTo(){
    var txt = document.createTextNode("Enlaces a wemanconnect.com: "+document.querySelectorAll("a[href='https://wemanconnect.com']").length);
    var el = document.createElement("li");
    el.appendChild(txt);
    lista.appendChild(el);
}

function numberOfLinksInP(){
  var pr =  document.querySelectorAll("p"); 
  var txt = document.createTextNode("Numero de a en p: "+pr[2].querySelectorAll("a").length);
  var el = document.createElement("li");
  el.appendChild(txt);
  lista.appendChild(el);
}

function display(){
    var tx = document.getElementsByTagName("span")[0];
    tx.classList.remove("hidden")
}

function add(){
    var elem = document.createElement("li");
    var txt = document.createTextNode("Item");
    elem.appendChild(txt);
    document.getElementById("list").appendChild(elem);
    x++;
}

