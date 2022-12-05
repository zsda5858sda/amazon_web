var isCover = false;

function clickSearchBar() {
    console.log(isCover);
    if (!isCover) {
        var element = document.getElementById("nav-cover");
        unfade(element);
        
    }
}

function clickPage() {
    console.log(isCover);
    if (isCover) {
        var element = document.getElementById("nav-cover");
        fade(element);
    }
}