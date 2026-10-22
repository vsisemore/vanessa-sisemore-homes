// Contact forms on vanessasisemore pages. Sends each form to Netlify Forms and shows
// the thank-you only after Netlify confirms it. No keys or destination URLs live here.
(function () {
  var PHONE = "615-431-9823";
  var MIN_FILL_MS = 2000; // a person can't fill a form in under 2 seconds; most bots do

  document.querySelectorAll("form.nf-form").forEach(function (form) {
    var wrap = form.closest(".nf-formwrap");
    var thanks = wrap && wrap.parentElement ? wrap.parentElement.querySelector(".nf-thanks") : null;
    var errorBox = form.querySelector(".form-error");
    var button = form.querySelector('button[type="submit"]');
    var again = thanks ? thanks.querySelector(".nf-reset") : null;
    if (!wrap || !thanks || !errorBox || !button) return;

    var openedAt = Date.now();
    var sending = false;
    var buttonLabel = button.innerHTML;

    function showError(text) {
      errorBox.textContent = text;
      errorBox.hidden = false;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      errorBox.hidden = true;
      if (sending) return; // blocks double-clicks from creating duplicate leads
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (Date.now() - openedAt < MIN_FILL_MS) {
        showError("Please take a moment to check your details, then send again.");
        return;
      }
      sending = true;
      button.disabled = true;
      button.textContent = "Sending…";
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Form service answered " + response.status);
          wrap.hidden = true;
          thanks.hidden = false;
          var heading = thanks.querySelector("h3, h2");
          if (heading) {
            heading.setAttribute("tabindex", "-1");
            heading.focus();
          }
        })
        .catch(function () {
          showError("That didn’t go through. Your details are still here, so please try again, or call me at " + PHONE + ".");
        })
        .finally(function () {
          sending = false;
          button.disabled = false;
          button.innerHTML = buttonLabel;
        });
    });

    if (again) {
      again.addEventListener("click", function () {
        form.reset();
        errorBox.hidden = true;
        openedAt = Date.now();
        thanks.hidden = true;
        wrap.hidden = false;
      });
    }
  });
})();
