window.addEventListener('load', function () {
    var preload = document.getElementById('preload');
    preload.style.opacity = '0';
    setTimeout(function () {
        preload.style.display = 'none';
    }, 500);
});