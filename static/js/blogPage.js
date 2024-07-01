document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    let pageTitle = document.getElementById('pageTitle');
    let jsOnlyElements = document.querySelectorAll('.jsOnly');
    let progressHr = document.getElementById('progressHr');
    let stickyContainer = document.getElementById('stickyContainer');
    let contentContainer = document.getElementById("contentContainer");
    let mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
    let mainColorDark = getComputedStyle(document.documentElement).getPropertyValue('--main-color-dark');

    // Unhide elements without layout shifting
    pageTitle.style.marginBottom = "0";
    jsOnlyElements.forEach(function (element) {
        element.style.display = "block";
    });

    // Resize separator to initially be slightly wider than the title
    function setHRWidth() {
        if (!stickyContainer.classList.contains('isSticky')) {
            const titleWidth = pageTitle.offsetWidth;
            progressHr.style.width = `${titleWidth + convertRemToPixels(3.2)}px`;
        }
        else {
            progressHr.style.width = `${stickyContainer.offsetWidth + convertRemToPixels(0.4)}px`;
        }
    }

    setHRWidth();
    window.addEventListener('resize', setHRWidth);

    // Transition separator to progress bar
    const observer = new IntersectionObserver(
        ([e]) => {
            e.target.classList.toggle('isSticky', e.intersectionRatio < 1)

            if (e.intersectionRatio < 1) {
                progressHr.style.width = `${stickyContainer.offsetWidth + convertRemToPixels(0.4)}px`
            }
            else {
                setHRWidth();
            }
        },
        { threshold: [1] }
    );

    observer.observe(stickyContainer)

    // Dynamic Scrollbar
    window.addEventListener('scroll', function() {
        let rect = contentContainer.getBoundingClientRect();
        let windowHeight = window.innerHeight;
        
        let start = rect.top + window.scrollY - convertRemToPixels(5);
        let end = rect.bottom + window.scrollY - windowHeight;
        let progress = Math.min(Math.max((window.scrollY - start) / (end - start) * 100, 0), 100);
        
        progressHr.style.background = `linear-gradient(to right, ${mainColor}, ${mainColor} ${progress}%, ${mainColorDark} ${progress}%, ${mainColorDark})`;
    });    
});

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}