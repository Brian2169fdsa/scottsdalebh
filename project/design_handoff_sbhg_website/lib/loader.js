/* SBHG multi-page loader.
   Each page sets window.__PAGE = { src: 'lib/<page>.jsx', root: '<ComponentName>' }
   before this script runs. We inject the DS bundle (with retry), then fetch
   tweaks-panel.jsx + lib/shared.jsx + the page source, concatenate them into one
   Babel pass (shared scope), render, and run scroll-reveal + lucide icons. */
(function () {
  /* The benign "ResizeObserver loop" warning fires when an RO callback mutates
     layout within the same frame. Deferring callbacks to rAF eliminates it.
     Must run before any ResizeObserver is constructed (React/bundle render later). */
  var _RO = window.ResizeObserver;
  if (_RO) {
    window.ResizeObserver = function (cb) {
      return new _RO(function (entries, obs) {
        window.requestAnimationFrame(function () { cb(entries, obs); });
      });
    };
  }
  window.addEventListener('error', function (e) {
    if (e && e.message && e.message.indexOf('ResizeObserver loop') !== -1) {
      e.stopImmediatePropagation();
    }
  }, true);
  var BUNDLE = '_ds/design-system-8429f70d-d28f-4795-9c53-0a755f52354a/_ds_bundle.js';
  var injected = 0;

  function injectBundle() {
    if (window.DesignSystem_8429f7) return;
    var s = document.createElement('script');
    s.src = BUNDLE + '?r=' + Date.now();
    s.onload = function () { if (!window.DesignSystem_8429f7 && injected < 6) setTimeout(injectBundle, 150); };
    s.onerror = function () { if (injected++ < 6) setTimeout(injectBundle, 200); };
    document.head.appendChild(s);
  }
  injectBundle();

  function whenReady(cb) {
    (function poll(n) {
      if (window.DesignSystem_8429f7 && window.Babel) return cb();
      if (n <= 0) { console.error('SBHG: bundle/Babel never became available'); return; }
      setTimeout(function () { poll(n - 1); }, 50);
    })(200);
  }

  function enhance() {
    if (window.lucide) window.lucide.createIcons();
    var secs = [].slice.call(document.querySelectorAll('section'));
    if (!secs.length) return;
    function reveal(el) { el.classList.add('is-visible'); }
    secs.forEach(function (s) {
      s.classList.add('sbhg-reveal');
      if (s.getBoundingClientRect().top < window.innerHeight) reveal(s);
    });
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
      }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
      secs.forEach(function (s) { if (!s.classList.contains('is-visible')) io.observe(s); });
    }
    var onScroll = function () {
      secs.forEach(function (s) {
        if (!s.classList.contains('is-visible') && s.getBoundingClientRect().top < window.innerHeight * 0.95) reveal(s);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(function () { secs.forEach(reveal); }, 2200);
  }
  window.__sbhgEnhance = enhance;

  whenReady(function () {
    var P = window.__PAGE || {};
    Promise.all([
      fetch('tweaks-panel.jsx').then(function (r) { return r.text(); }),
      fetch('lib/shared.jsx').then(function (r) { return r.text(); }),
      fetch(P.src).then(function (r) { return r.text(); }),
    ]).then(function (parts) {
      var render = "ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(" + P.root + "));";
      var src = parts[0] + "\n" + parts[1] + "\n" + parts[2] + "\n" + render;
      var out = Babel.transform(src, { presets: ['react'] }).code;
      (0, eval)(out);
      setTimeout(enhance, 80);
    }).catch(function (err) { console.error('SBHG load error:', err); });
  });
})();
