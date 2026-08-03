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
