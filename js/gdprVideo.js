/**
 * GDPR-compliant video wrapper
 * Blocks embedding until user consent is given
 * Consent is tracked in memory only (not persisted across page refreshes)
 */

const gdprVideoConsents = new Set();

document.addEventListener('DOMContentLoaded', function () {
    const videoContainers = document.querySelectorAll('.blogVideoContainer:not([data-gdpr-loaded])');
    
    videoContainers.forEach((container, index) => {
        const videoId = container.dataset.videoId || `video-${index}`;
        
        if (gdprVideoConsents.has(videoId)) {
            loadVideo(container);
        } else {
            showConsentOverlay(container, videoId);
        }
    });
});

function showConsentOverlay(container, videoId) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'gdprVideoOverlay';
    
    // Create text content
    const textContent = document.createElement('div');
    textContent.className = 'gdprVideoContent';
    
    const text = document.createElement('p');
    text.innerHTML = 'By playing this video, you accept YouTube\'s Terms of Service <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">https://www.youtube.com/t/terms</a> and acknowledge that your data may be processed according to YouTube\'s Privacy Policy <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.<br><br>Connections to youtube.com, youtube-nocookie.com, ytimg.com, ggpht.com, and doubleclick.net and other associated Google domains will be established.';
    textContent.appendChild(text);
    
    // Create button
    const button = document.createElement('button');
    button.className = 'gdprVideoConsent';
    button.textContent = 'I Consent, Load Video';
    button.type = 'button';
    
    button.addEventListener('click', function (e) {
        e.preventDefault();
        gdprVideoConsents.add(videoId);
        overlay.parentNode.removeChild(overlay);
        loadVideo(container);
    });
    
    textContent.appendChild(button);
    overlay.appendChild(textContent);
    container.appendChild(overlay);
}

function loadVideo(container) {
    // Add loading spinner
    container.classList.add('loading');
    
    // Extract iframe data from data attributes
    const src = container.dataset.src;
    const title = container.dataset.title;
    const allow = container.dataset.allow || 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    const referrerPolicy = container.dataset.referrerpolicy || 'strict-origin-when-cross-origin';
    
    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = title;
    iframe.allow = allow;
    iframe.referrerPolicy = referrerPolicy;
    iframe.allowFullscreen = true;
    
    // Remove spinner once iframe loads
    const removeSpinner = () => {
        container.classList.remove('loading');
    };
    
    iframe.addEventListener('load', removeSpinner);
    
    // Fallback: remove spinner after 3 seconds if load event doesn't fire
    setTimeout(removeSpinner, 3000);
    
    // Append iframe to container
    container.appendChild(iframe);
    container.setAttribute('data-gdpr-loaded', 'true');
}
