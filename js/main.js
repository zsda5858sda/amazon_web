var isCover = false;
var isFlexBoxHover = false;
var isMouseEnter = false;

async function showNavCover(type) {
    isMouseEnter = true;
    await delay(200);

    if (isMouseEnter) {
        if (!isCover) {
            var element = document.getElementById("nav-cover");
            unfade(element);
        }

        switch (type) {
            case "lang":
                document.getElementById("nav-flyout-icp").style.display = "block";
                document.getElementById("nav-flyout-accountList").style.display = "none";
                break;
            case "sign":
                document.getElementById("nav-flyout-icp").style.display = "none";
                document.getElementById("nav-flyout-accountList").style.display = "block";
                break;
        }
    }
}

async function hideNavCover() {
    isMouseEnter = false;
    await delay(200);

    if (isCover && !isFlexBoxHover && !isMouseEnter) {
        var element = document.getElementById("nav-cover");
        fade(element);

        document.getElementById("nav-flyout-icp").style.display = "none";
        document.getElementById("nav-flyout-accountList").style.display = "none";
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

function changeSearchType(e) {
    const selectedType = e.options[e.selectedIndex].text;
    document.getElementById("nav-search-label-id").innerText = selectedType;
    showNavCover();
}