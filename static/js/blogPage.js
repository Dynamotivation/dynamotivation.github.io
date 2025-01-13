// Unhide elements immediately without layout shifting
document.getElementById('pageTitle').style.marginBottom = "0";
document.getElementById('progressHr').style.width = "0";
document.querySelectorAll('.jsOnly').forEach(function (element) {
    element.style.display = "block";
    element.style.visibility = "visible";
});

document.addEventListener('DOMContentLoaded', function () {
    const jsOnlyElements = document.querySelectorAll('.jsOnly');
    const progressHr = document.getElementById('progressHr');
    const stickyContainer = document.getElementById('stickyContainer');
    const pageContainer = document.getElementById('pageContainer');
    const contentContainer = document.getElementById("contentContainer");
    const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
    const mainColorDark = getComputedStyle(document.documentElement).getPropertyValue('--main-color-dark');
    let initialized = false;

    // Fake resize event to set initial width
    window.addEventListener('load', _ => {
        window.dispatchEvent(new Event('resize'));
    });

    // Transition separator to progress bar
    const observer = new IntersectionObserver(
        ([e]) => {
            e.target.classList.toggle('isSticky', e.intersectionRatio < 1)

            if (e.intersectionRatio < 1) {
                progressHr.style.width = `${pageContainer.offsetWidth + convertRemToPixels(0.4)}px`
            }
            else {
                setHRWidth();
            }
        },
        { threshold: [1] }
    );

    window.addEventListener('resize', _ => {
        setHRWidth();

        if (!initialized) {
            initialized = true;
            observer.observe(stickyContainer)
        }
    });

    // Dynamic Scrollbar
    window.addEventListener('scroll', function () {
        let rect = contentContainer.getBoundingClientRect();
        let windowHeight = window.innerHeight;

        let start = rect.top + window.scrollY - convertRemToPixels(5);
        let end = rect.bottom + window.scrollY - windowHeight;
        let progress = Math.min(Math.max((window.scrollY - start) / (end - start) * 100, 0), 100);

        progressHr.style.background = `linear-gradient(to right, ${mainColor}, ${mainColor} ${progress}%, ${mainColorDark} ${progress}%, ${mainColorDark})`;
    });
});

// Resize separator to initially be slightly wider than the title
function setHRWidth() {
    if (!stickyContainer.classList.contains('isSticky')) {
        const titleWidth = pageTitle.offsetWidth;
        progressHr.style.width = `${titleWidth + convertRemToPixels(3.2)}px`;
    }
    else {
        progressHr.style.width = `${pageContainer.offsetWidth + convertRemToPixels(0.4)}px`;
    }
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}