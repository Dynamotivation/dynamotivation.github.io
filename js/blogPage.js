// Unhide elements immediately without layout shifting
document.getElementById('pageTitle').style.marginBottom = "0";
document.getElementById('progressHr').style.width = "0";
document.querySelectorAll('.jsOnly').forEach(function (element) {
    element.classList.remove('jsOnly');
});

document.addEventListener('DOMContentLoaded', function () {
    const jsOnlyElements = document.querySelectorAll('.jsOnly');
    const progressHr = document.getElementById('progressHr');
    const stickyContainer = document.getElementById('stickyContainer');
    const pageContainer = document.getElementById('pageContainer');
    const contentContainer = document.getElementById("contentContainer");
    const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--link-color');
    const mainColorDark = getComputedStyle(document.documentElement).getPropertyValue('--link-visited-color');
    let initialized = false;

    // Fake resize event to set initial width
    window.addEventListener('load', _ => {
        window.dispatchEvent(new Event('resize'));
    });

    // Transition separator to progress bar
    const observer = new IntersectionObserver(
        ([e]) => {
            e.target.classList.toggle('isSticky', e.intersectionRatio < 1)

            setHRWidth();
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

        let start = rect.top + window.scrollY - convertRemToPixels(10);
        let end = rect.bottom + window.scrollY - 0.7*windowHeight;
        let progress = Math.min(Math.max((window.scrollY - start) / (end - start) * 100, 0), 100);

        progressHr.style.background = `linear-gradient(to right, ${mainColor}, ${mainColor} ${progress}%, ${mainColorDark} ${progress}%, ${mainColorDark})`;
    });
});

// Resize separator to initially be slightly wider than the title
function setHRWidth() {
    if (!stickyContainer.classList.contains('isSticky')) {
        const titleWidth = document.getElementById('pageTitle').offsetWidth;
        progressHr.style.width = `${titleWidth + convertRemToPixels(3.2)}px`;
    }
    else {
        progressHr.style.width = `${pageContainer.offsetWidth + convertRemToPixels(0.4)}px`;
    }
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function copyLink(id) {
    const link = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(link);
    const tooltip = document.createElement('div');
    tooltip.innerText = "Link copied to clipboard!";
    tooltip.style.position = 'fixed';
    tooltip.style.bottom = '20px';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    tooltip.style.color = 'white';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.zIndex = '1000';
    tooltip.style.opacity = '0';
    tooltip.style.transition = 'opacity 0.5s';
    document.body.appendChild(tooltip);

    // Fade in
    requestAnimationFrame(() => {
        tooltip.style.opacity = '1';
    });

    setTimeout(() => {
        // Fade out
        tooltip.style.opacity = '0';
        tooltip.addEventListener('transitionend', () => {
            document.body.removeChild(tooltip);
        });
    }, 2000);
}