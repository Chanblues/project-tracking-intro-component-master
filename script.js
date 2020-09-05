let navigationLink = document.getElementsByTagName("ul");

function toggleMenu() {
    let toogleIcon = document.querySelectorAll("#toggle_icon");

    if (navigationLink[0].style.opacity == 0) {
        toogleIcon[0].src = "./images/icon-close.svg";
        navigationLink[0].style.opacity = 1;
    } else {
        navigationLink[0].style.opacity = "";
        toogleIcon[0].src = "./images/icon-hamburger.svg";
    }
}

