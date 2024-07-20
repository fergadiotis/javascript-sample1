let menuOpen = false;

function toggleMenu() {
    if (!menuOpen) { // not open please open
        $('#menu').animate({
            right: 0
        }, 420, 'swing');
    }
    else { // open lets close
        $('#menu').animate({
            right: -240
        }, 420, 'swing');
    }
    // toggle the state
    menuOpen = !menuOpen;
} // toggleMenu()

let changeCount = 0;

function changeColor(color) {
    let header = document.getElementById('Header');
    header.setAttribute('style', 'background-color: ' + color);

    changeCount++;
    let countDisplay = document.getElementById('changeCount');
    countDisplay.innerHTML = 'Change Count: ' + changeCount;
}