/* Steps through recent short updates in the homepage speech bubble.
   Without JavaScript, the bubble shows the newest update only. */
(function () {
    var bubble = document.getElementById('bubble');
    if (!bubble) return;
    var items = bubble.querySelectorAll('.bubble-item');
    if (items.length < 2) return;

    var newer = bubble.querySelector('.bubble-newer');
    var older = bubble.querySelector('.bubble-older');
    var count = bubble.querySelector('.bubble-count');
    var at = 0;

    bubble.classList.add('has-nav');

    function show(n) {
        if (n < 0 || n >= items.length) return;
        items[at].hidden = true;
        at = n;
        items[at].hidden = false;
        count.textContent = (at + 1) + ' / ' + items.length;
        newer.disabled = at === 0;
        older.disabled = at === items.length - 1;
    }

    newer.addEventListener('click', function () { show(at - 1); });
    older.addEventListener('click', function () { show(at + 1); });
})();
