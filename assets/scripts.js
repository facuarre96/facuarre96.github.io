$(document).ready(function() {
    function restartAnimation(element) {
        element.classList.remove('growing');
        void element.offsetWidth;
        element.classList.add('growing');
    }
    setInterval(function() {
        const box = document.getElementById('growing');
        restartAnimation(box);
    }, 6000); // 3 seconds delay
});
