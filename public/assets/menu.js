// Phone and tablet menu: closes after a link in it is tapped, when Escape is pressed,
// or when someone taps outside it. Without this, the open menu covered the page after tapping "FAQ".
(function () {
  document.querySelectorAll("details.navmenu").forEach(function (menu) {
    var summary = menu.querySelector("summary");
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { menu.open = false; });
    });
    menu.addEventListener("toggle", function () {
      if (summary) summary.setAttribute("aria-label", menu.open ? "Close menu" : "Open menu");
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        if (summary) summary.focus();
      }
    });
    document.addEventListener("click", function (event) {
      if (menu.open && !menu.contains(event.target)) menu.open = false;
    });
  });
})();
