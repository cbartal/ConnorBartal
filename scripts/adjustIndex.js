window.onresize = function() {
    backgroundFormat();
    styleSocialMedia();
    riverImageFix();

}

window.onload = function() {
    backgroundFormat();
    styleSocialMedia();
    riverImageFix();
    removeLoadingScreen();
}

function removeLoadingScreen() {
    document.getElementById("loadingScreen").style.visibility = "hidden";
}

function backgroundFormat() {
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
    } else {
        document.getElementById("title").setAttribute("style", "font-size:80px");
        document.getElementById("title").style.fontSize = "80px";
        document.getElementById("typingtext").setAttribute("style", "font-size:50px");
        document.getElementById("typingtext").style.fontSize = "50px";
    }
    height = height + 35;
    document.getElementById("emptydiv").style.height = height + "px";
    document.getElementById("emptydiv").setAttribute("style", "height:" + height + "px");
}

function styleSocialMedia() {
    var width = window.innerWidth / 13;
    var x = document.getElementsByClassName("home-social-roll");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.width = width + "px";
        x[i].style.margin = (width / 4.5) + "px";
    }
}

function riverImageFix() {
    if (window.innerWidth < 510) {
        document.getElementById("riverimage").style.width = window.innerWidth + "px";
        document.getElementById("riverphoto").style.width = "100%";
    }
    else {
        document.getElementById("riverimage").style.width = "35%";
        document.getElementById("riverphoto").style.width = "95%";
    }
}