function increaselikes(buttonid){
    var currentlikes = parseInt(document.getElementById(buttonid).getAttribute('data-likes'), 10);
    var newlike = currentlikes + 1;
    document.getElementById(buttonid).setAttribute('data-likes', newlike);
    document.getElementById(buttonid).innerText=newlike;
}

function openWindow() {
    var proizvod = document.getElementsByName("product")[0].value;

    var newWindow = window.open("naracka", "New Window", "width=500,height=500");
    newWindow.document.write("<p>Selected Product: " + proizvod + "</p>");

    var kolicina = document.getElementsByName("brbr")[0].value;
    newWindow.document.write("<p>Quantity: " + kolicina + "</p>");

    var name = document.getElementsByName("ime")[0].value;
    newWindow.document.write("<p>Name: " + name + "</p>");

    var adress = document.getElementsByName("adress")[0].value;
    newWindow.document.write("<p>Adress: " + adress + "</p>");

    var comment = document.getElementsByName("comment")[0].value;
    newWindow.document.write("<p>Comments: " + comment + "</p>");
}