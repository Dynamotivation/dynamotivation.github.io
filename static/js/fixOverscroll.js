let reachedTop = false;
const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
const footerColor = getComputedStyle(document.documentElement).getPropertyValue('--footer-color');

window.addEventListener('wheel', (e) => {
    const delta = e.deltaY;

    if (delta < 0 && !reachedTop) {
        document.documentElement.style.background = mainColor;
        reachedTop = true;
    } else if (delta > 0 && reachedTop) {
        document.documentElement.style.background = footerColor;
        reachedTop = false;
    }
});