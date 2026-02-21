// Defer style updates until DOMContentLoaded to avoid layout thrashing during page transitions
document.addEventListener('DOMContentLoaded', function () {
    // Cache DOM elements
    const pageTitle = document.getElementById('pageTitle');
    const progressHr = document.getElementById('progressHr');
    const stickyContainer = document.getElementById('stickyContainer');
    const pageContainer = document.getElementById('pageContainer');

    // Unhide elements and remove jsOnly class
    pageTitle.style.marginBottom = "0";
    progressHr.style.width = "0";
    document.querySelectorAll('.jsOnly').forEach(function (element) {
        element.classList.remove('jsOnly');
    });

    // Cache computed styles once and CSS variables
    const computedStyles = getComputedStyle(document.documentElement);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const rawMainColor = prefersDark ? computedStyles.getPropertyValue('--link-color') : computedStyles.getPropertyValue('--main-color');
    const rawMainColorDark = prefersDark ? computedStyles.getPropertyValue('--link-visited-color') : computedStyles.getPropertyValue('--main-color-dark');

    const mainColor = (rawMainColor || computedStyles.getPropertyValue('--main-color') || computedStyles.getPropertyValue('--link-color')).trim();
    const mainColorDark = (rawMainColorDark || computedStyles.getPropertyValue('--main-color-dark') || computedStyles.getPropertyValue('--link-visited-color')).trim();

    let scrollRAFId = null;
    let resizeRAFId = null;
    let observer = null;

    // Simple efficient scroll progress calculation - just track overall document scroll
    function updateProgressBar() {
        scrollRAFId = null;
        
        // Use simple document scroll tracking - no element queries needed
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (documentHeight <= 0) return;
        
        const progress = Math.min((scrollTop / documentHeight) * 100, 100);

        // Update gradient on every frame for smooth continuous motion (matching original behavior)
        progressHr.style.background = `linear-gradient(to right, ${mainColor}, ${mainColor} ${progress}%, ${mainColorDark} ${progress}%, ${mainColorDark})`;
    }

    function scheduleProgressBarUpdate() {
        if (!scrollRAFId) {
            scrollRAFId = requestAnimationFrame(updateProgressBar);
        }
    }

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

    // Set up observer immediately to track sticky state changes
    observer = new IntersectionObserver(
        ([e]) => {
            e.target.classList.toggle('isSticky', e.intersectionRatio < 1)
            setHRWidth();
        },
        { threshold: [1] }
    );
    observer.observe(stickyContainer);

    // Cleanup function to prevent memory leaks and stale listeners
    function cleanup() {
        // Cancel pending animation frames
        if (scrollRAFId) {
            cancelAnimationFrame(scrollRAFId);
            scrollRAFId = null;
        }
        if (resizeRAFId) {
            cancelAnimationFrame(resizeRAFId);
            resizeRAFId = null;
        }
        
        // Disconnect observer
        if (observer) {
            observer.disconnect();
            observer = null;
        }
        
        // Remove all event listeners
        window.removeEventListener('scroll', scheduleProgressBarUpdate);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('load', onLoad);
        window.removeEventListener('pagehide', cleanup);
        window.removeEventListener('pageshow', onPageShow);
    }

    function onResize() {
        // Debounce resize using requestAnimationFrame
        if (resizeRAFId) {
            cancelAnimationFrame(resizeRAFId);
        }
        resizeRAFId = requestAnimationFrame(() => {
            setHRWidth();
        });
    }

    function onLoad() {
        setHRWidth();
        updateProgressBar();
    }

    function onPageShow(event) {
        // If page was restored from bfcache, re-trigger initialization
        if (event.persisted) {
            // Re-initialize progress bar after bfcache restore
            setHRWidth();
            updateProgressBar();
        }
    }

    // Attach event listeners with named functions so they can be removed
    window.addEventListener('scroll', scheduleProgressBarUpdate, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onLoad);
    window.addEventListener('pageshow', onPageShow);

    
    // Clean up when page is about to unload (back/forward navigation, reload, etc)
    window.addEventListener('pagehide', cleanup);
});

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