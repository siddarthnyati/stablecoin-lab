/* Shared behaviour: scroll reveals + current-nav marking. Nothing else. */
(function () {
  "use strict";

  // Mark the current nav item.
  var here = location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll(".site-nav a").forEach(function (a) {
    var path = a.pathname.replace(/index\.html$/, "");
    if (path !== "/" && here.indexOf(path) === 0) a.setAttribute("aria-current", "page");
  });

  // Scroll reveals — skipped entirely under reduced motion.
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  els.forEach(function (el) { io.observe(el); });
})();

/* Hero slideshows: any .shot-hero.slides cycles its images. */
(function () {
  "use strict";
  document.querySelectorAll(".shot-hero.slides").forEach(function (box) {
    var imgs = box.querySelectorAll("img");
    if (imgs.length < 2) return;
    var dots = box.querySelectorAll(".dots-nav i");
    var i = 0, paused = false;
    function show(n) {
      imgs.forEach(function (im, k) { im.classList.toggle("on", k === n); });
      dots.forEach(function (d, k) { d.classList.toggle("on", k === n); });
    }
    show(0);
    box.addEventListener("mouseenter", function () { paused = true; });
    box.addEventListener("mouseleave", function () { paused = false; });
    setInterval(function () {
      if (paused) return;
      i = (i + 1) % imgs.length;
      show(i);
    }, 2000);
  });
})();
