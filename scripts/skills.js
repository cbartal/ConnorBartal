window.onload = function () {
    upperPhoto();
}
window.onresize = function () {
    upperPhoto();
}


function upperPhoto() {
    var image = document.getElementById("skillsImage");
    var skillDiv = document.getElementById("skillsBar");
    var fullImage = document.getElementById("skillsFullImage");

    if (window.innerWidth < 930) {
        image.style.visibility = "hidden";
        //image.setAttribute("style", "visibility: hidden");
        document.getElementById("skillsText").style.width = "90%";
        document.getElementById("skillsText").setAttribute("style", "width:90%");

        //new image
        fullImage.style.position = "absolute";
        fullImage.style.visibility = "";
        fullImage.style.width = (window.innerWidth - 10) + "px";
        fullImage.style.top = (skillDiv.offsetTop + skillDiv.clientHeight + 10) + "px";
        //fullImage.setAttribute("style", "visibility: ");
        //fullImage.setAttribute("style", "width: " + (window.innerWidth - 10) + "px");
    }
    else {
        fullImage.style.visibility = "hidden";
        //fullImage.setAttribute("style", "visibility: hidden");
        //reset text
        document.getElementById("skillsText").style.width = "60%";
        document.getElementById("skillsText").setAttribute("style", "width:60%");
        image.style.visibility = "";
        //image.setAttribute("style", "visibility: ");

        var height = skillDiv.clientHeight;
        //plus 5 for border width
        var top = skillDiv.offsetTop + 5;

        image.style.position = "absolute";
        image.style.right = "0px";
        image.style.height = height + "px";
        image.style.top = top + "px";

        // image.setAttribute("style", "position: absolute");
        // image.setAttribute("style", "right: 0px");
        // image.setAttribute("style", "height: " + height + "px");
        // image.setAttribute("style", "top: " + top + "px");
    }
}