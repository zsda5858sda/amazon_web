function fade(element) {
    var op = .6;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            isCover = false;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op + ")";
        op -= op * 0.1;
    }, 10);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 0.6){
            clearInterval(timer);
            isCover = true;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op + ")";
        op += op * 0.1;
    }, 10);
}