/* ---------------------------------------------------------------------------
   Click any image in a post to see it large. Click the large image to see it
   at full size, and drag or scroll to look around. Arrow keys or the side
   buttons move between images; Esc or a click on the dark background closes.

   Images inside a link are left alone. To stop one image zooming, add
   {: .no-zoom} straight after it in the post.
--------------------------------------------------------------------------- */
(function () {
    var imgs = Array.prototype.filter.call(
        document.querySelectorAll('.prose img, .cover img, .bubble-text img'),
        function (img) { return !img.closest('a') && !img.classList.contains('no-zoom'); }
    );
    if (!imgs.length) return;

    var css =
        '.zoomable{cursor:zoom-in}' +
        '.zoom-box{position:fixed;inset:0;z-index:200;background:rgba(14,18,16,.97);display:flex;align-items:center;justify-content:center;padding:56px 64px 40px}' +
        '.zoom-box[hidden]{display:none}' +
        '.zoom-fig{margin:0;display:flex;flex-direction:column;align-items:center;max-width:100%;max-height:100%}' +
        '.zoom-stage{max-width:calc(100vw - 128px);max-height:calc(100vh - 140px);overflow:hidden;border-radius:4px;background:#fff}' +
        '.zoom-stage img{display:block;max-width:calc(100vw - 128px);max-height:calc(100vh - 140px);width:auto;height:auto}' +
        '.zoom-stage.can-zoom img{cursor:zoom-in}' +
        '.zoom-stage.is-full{overflow:auto;cursor:grab}' +
        '.zoom-stage.is-full img{max-width:none;max-height:none;cursor:zoom-out}' +
        '.zoom-fig figcaption{font:12px/1.5 "JetBrains Mono",ui-monospace,monospace;color:#dfe6e2;margin-top:12px;text-align:center;max-width:70ch}' +
        '.zoom-box button{position:absolute;background:none;border:0;color:#cfd8d3;cursor:pointer;line-height:1;padding:8px}' +
        '.zoom-box button:hover{color:#fff}' +
        '.zoom-box button:focus-visible{outline:2px solid #c8102e;outline-offset:2px;border-radius:4px}' +
        '.zoom-close{top:10px;right:16px;font-size:34px}' +
        '.zoom-prev,.zoom-next{top:50%;transform:translateY(-50%);font-size:44px}' +
        '.zoom-prev{left:12px}.zoom-next{right:12px}' +
        '.zoom-hint{position:absolute;top:18px;left:20px;margin:0;font:11px "JetBrains Mono",ui-monospace,monospace;letter-spacing:.08em;color:#9fb0a7}' +
        '@media (max-width:640px){.zoom-box{padding:52px 10px 30px}.zoom-stage,.zoom-stage img{max-width:calc(100vw - 20px);max-height:calc(100vh - 120px)}' +
        '.zoom-prev,.zoom-next{top:auto;bottom:6px;transform:none;font-size:36px}.zoom-hint{display:none}}';
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var box = document.createElement('div');
    box.className = 'zoom-box';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Enlarged image');
    box.innerHTML =
        '<p class="zoom-hint"></p>' +
        '<button type="button" class="zoom-close" aria-label="Close">&times;</button>' +
        '<button type="button" class="zoom-prev" aria-label="Previous image">&lsaquo;</button>' +
        '<figure class="zoom-fig"><div class="zoom-stage"><img alt=""></div><figcaption></figcaption></figure>' +
        '<button type="button" class="zoom-next" aria-label="Next image">&rsaquo;</button>';
    document.body.appendChild(box);

    var stage = box.querySelector('.zoom-stage');
    var big = stage.querySelector('img');
    var cap = box.querySelector('figcaption');
    var hint = box.querySelector('.zoom-hint');
    var prev = box.querySelector('.zoom-prev');
    var next = box.querySelector('.zoom-next');
    var closeBtn = box.querySelector('.zoom-close');
    var at = 0, opener = null;

    function captionFor(img) {
        var fig = img.closest('figure');
        var fc = fig && fig.querySelector('figcaption');
        return (fc && fc.textContent.trim()) || img.getAttribute('alt') || '';
    }

    function fits() {
        // true when the image already shows at (or near) its real size
        return big.naturalWidth <= big.clientWidth + 2 && big.naturalHeight <= big.clientHeight + 2;
    }

    function update() {
        stage.classList.remove('is-full');
        var small = fits();
        stage.classList.toggle('can-zoom', !small);
        hint.textContent = small ? '' : 'Click the image to see it full size';
    }

    function show(n) {
        at = (n + imgs.length) % imgs.length;
        var img = imgs[at];
        big.src = img.currentSrc || img.src;
        big.alt = img.alt || '';
        var text = captionFor(img);
        cap.textContent = text + (imgs.length > 1 ? '  (' + (at + 1) + ' / ' + imgs.length + ')' : '');
        if (big.complete) update(); else big.onload = update;
    }

    function open(n) {
        opener = document.activeElement;
        box.hidden = false;
        prev.hidden = next.hidden = imgs.length < 2;
        document.body.style.overflow = 'hidden';
        show(n);
        closeBtn.focus();
    }

    function close() {
        box.hidden = true;
        document.body.style.overflow = '';
        big.removeAttribute('src');
        if (opener && opener.focus) opener.focus();
    }

    imgs.forEach(function (img, i) {
        img.classList.add('zoomable');
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', 'Enlarge image' + (img.alt ? ': ' + img.alt : ''));
        img.addEventListener('click', function () { open(i); });
        img.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
        });
    });

    // Click the large image: switch between fit-to-screen and full size,
    // keeping the clicked spot in view.
    big.addEventListener('click', function (e) {
        e.stopPropagation();
        if (dragged) { dragged = false; return; }
        if (stage.classList.contains('is-full')) { update(); return; }
        if (!stage.classList.contains('can-zoom')) return;
        var r = big.getBoundingClientRect();
        var fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
        stage.classList.add('is-full');
        stage.scrollLeft = fx * big.naturalWidth - stage.clientWidth / 2;
        stage.scrollTop = fy * big.naturalHeight - stage.clientHeight / 2;
        hint.textContent = 'Drag to look around. Click to fit the screen';
    });

    // Drag to pan when at full size.
    var dragging = false, dragged = false, sx = 0, sy = 0, sl = 0, st = 0;
    stage.addEventListener('mousedown', function (e) {
        if (!stage.classList.contains('is-full')) return;
        dragging = true; dragged = false;
        sx = e.clientX; sy = e.clientY; sl = stage.scrollLeft; st = stage.scrollTop;
        e.preventDefault();
    });
    window.addEventListener('mousemove', function (e) {
        if (!dragging) return;
        var dx = e.clientX - sx, dy = e.clientY - sy;
        if (Math.abs(dx) + Math.abs(dy) > 4) dragged = true;
        stage.scrollLeft = sl - dx; stage.scrollTop = st - dy;
    });
    window.addEventListener('mouseup', function () { dragging = false; });

    prev.addEventListener('click', function (e) { e.stopPropagation(); show(at - 1); });
    next.addEventListener('click', function (e) { e.stopPropagation(); show(at + 1); });
    closeBtn.addEventListener('click', close);
    box.addEventListener('click', function (e) {
        if (e.target === box || e.target === box.querySelector('.zoom-fig')) close();
    });
    document.addEventListener('keydown', function (e) {
        if (box.hidden) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft' && imgs.length > 1) show(at - 1);
        if (e.key === 'ArrowRight' && imgs.length > 1) show(at + 1);
    });
})();
