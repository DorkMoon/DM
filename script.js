// Wait for the opening crawl animation to finish
document.querySelector('.opening-crawl').addEventListener('animationend', () => {
    // Hide the opening crawl
    document.querySelector('.opening-crawl').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var h2Element = document.querySelector('.landing-page h2');
        if (h2Element) {
            h2Element.style.opacity = '1';
        }
    }, 1000); // Adjust the delay (in milliseconds) as needed
});
