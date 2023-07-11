document.querySelector('.logo').addEventListener('click', function(event) {
    var cssVariable = getComputedStyle(this).getPropertyValue('--_i').trim();
    if (cssVariable !== '0%') {
        event.preventDefault();
    }
});
