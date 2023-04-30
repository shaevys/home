function winLGtoggle(){
    var x = document.getElementById("win-lg");
    var y = document.getElementById("win-sv");
    var z = document.getElementById("win-jdf");

    /*
    y.style.display = "none";
    z.style.display = "none";
    */

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function winSVtoggle(){
    var x = document.getElementById("win-lg");
    var y = document.getElementById("win-sv");
    var z = document.getElementById("win-jdf");

    /*
    x.style.display = "none";
    z.style.display = "none";
    */

    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function winJDFtoggle(){
    var x = document.getElementById("win-lg");
    var y = document.getElementById("win-sv");
    var z = document.getElementById("win-jdf");

    /*
    x.style.display = "none";
    y.style.display = "none";
    */

    if (z.style.display === "none") {
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
}