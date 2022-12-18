var isCover = false;
var isFlexBoxHover = false;
var isMouseEnter = false;

async function showNavCover(type) {
    isMouseEnter = true;
    await delay(500);

    if (!isCover && isMouseEnter) {
        var element = document.getElementById("nav-cover");
        unfade(element);


        switch (type) {
            case "lang":
                document.getElementById("nav-flyout-icp").style.display = "block";
                break;
            case "sign":
                // document.getElementById("nav-flyout-icp").style.display = "block";
                break;
            case "orders":
                // document.getElementById("nav-flyout-icp").style.display = "block";
                break;
            default:
                break;
        }
    }
}

async function hideNavCover() {
    isMouseEnter = false;
    await delay(500);

    if (isCover && !isFlexBoxHover && !isMouseEnter) {
        var element = document.getElementById("nav-cover");
        fade(element);

        document.getElementById("nav-flyout-icp").style.display = "none";
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function mouseEnterFlexBox() {
    isMouseEnter = true;
    isFlexBoxHover = true;
}

function mouseLeaveFlexBox() {
    isMouseEnter = false;
    isFlexBoxHover = false;
    hideNavCover();
}