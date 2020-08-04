var active = false;

function makeTouchScreenWork() {

    var menu = document.getElementById("submenu");
    if (active) {
        menu.style.display = "none";
        active = false;
    } else {
        menu.style.display = "block";
        active = true;
    }
}