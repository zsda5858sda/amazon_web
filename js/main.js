var isCover = false;

function showNavCover() {
    if (!isCover) {
        var element = document.getElementById("nav-cover");
        unfade(element);
        
    }
}

function hideNavCover() {
    if (isCover) {
        var element = document.getElementById("nav-cover");
        fade(element);
    }
}