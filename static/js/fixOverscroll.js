document.addEventListener('DOMContentLoaded', function () {
    const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
    const footerColor = getComputedStyle(document.documentElement).getPropertyValue('--footer-color');
    const scrollBottomIndicator = document.getElementById('scroll-bottom-indicator');

    const observer = new IntersectionObserver(
        ([e]) => {
            if (e.intersectionRatio < 1) {
                document.documentElement.style.background = mainColor;
            }
            else {
                document.documentElement.style.background = footerColor;
            }
        },
        { threshold: [1] }
    );

    observer.observe(scrollBottomIndicator);
});