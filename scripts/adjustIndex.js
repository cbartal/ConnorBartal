

window.onresize = function() {
    var image = document.getElementById("background_image");
    var height = image.height;
    document.getElementById("background_image_overlay").setAttribute("style", "height:" + height + "px");
    document.getElementById("background_image_overlay").style.height = height + "px";

    var width = image.width;
    if (width < 515) {
        document.getElementById("title").setAttribute("style", "font-size:30px");
        document.getElementById("title").style.fontSize = "30px";
        document.getElementById("typingtext").setAttribute("style", "font-size:15px");
        document.getElementById("typingtext").style.fontSize = "15px";
    }
    else {
        document.getElementById("title").setAttribute("style", "font-size:80px");
        document.getElementById("title").style.fontSize = "80px";
        document.getElementById("typingtext").setAttribute("style", "font-size:50px");
        document.getElementById("typingtext").style.fontSize = "50px";
    }
    height = height + 35;
    document.getElementById("emptydiv").style.height = height + "px";
    document.getElementById("emptydiv").setAttribute("style", "height:" + height + "px");
}

window.onload = function() {
    var image = document.getElementById("background_image");
    var height = image.height;
    document.getElementById("background_image_overlay").setAttribute("style", "height:" + height + "px");
    document.getElementById("background_image_overlay").style.height = height + "px";

    var width = image.width;
    if (width < 515) {
        document.getElementById("title").setAttribute("style", "font-size:30px");
        document.getElementById("title").style.fontSize = "30px";
        document.getElementById("typingtext").setAttribute("style", "font-size:15px");
        document.getElementById("typingtext").style.fontSize = "15px";
    }
    else {
        document.getElementById("title").setAttribute("style", "font-size:80px");
        document.getElementById("title").style.fontSize = "80px";
        document.getElementById("typingtext").setAttribute("style", "font-size:50px");
        document.getElementById("typingtext").style.fontSize = "50px";

    }
    height = height + 35;
    document.getElementById("emptydiv").style.height = height + "px";
    document.getElementById("emptydiv").setAttribute("style", "height:" + height + "px");
}
