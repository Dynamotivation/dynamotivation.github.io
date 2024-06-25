document.addEventListener('DOMContentLoaded', function () {
    var pageTitle = document.querySelectorAll('#pageTitle');

    var jsOnlyElements = document.querySelectorAll('.jsOnly');

    pageTitle[0].style.marginBottom = "1.9rem"; //Subtract height of hr + top margin
    jsOnlyElements.forEach(function (element) {
        element.style.display = "block";
    });

    let title = document.getElementById('pageTitle');
    let progressHr = document.getElementById('progressHr');

    function setHRWidth() {
        const titleWidth = title.offsetWidth;
        progressHr.style.width = `${titleWidth + convertRemToPixels(3.2)}px`;
    }

    // Set the width initially
    setHRWidth();

    // Update the width on window resize
    window.addEventListener('resize', setHRWidth);
});

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}