// Guide landing pages. Records where the visitor came from (UTM tags and the referring site)
// and whether they ticked the optional marketing box, so each Netlify entry shows both.
// Sending the form and showing the thank-you are handled by forms.js.
(function () {
  var MAX = 200;
  var params = new URLSearchParams(window.location.search);
  var referrerHost = "";
  try {
    if (document.referrer) referrerHost = new URL(document.referrer).hostname;
  } catch (e) {}

  document.querySelectorAll("form.nf-form").forEach(function (form) {
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(function (key) {
      var field = form.querySelector('input[name="' + key + '"]');
      var value = params.get(key);
      if (field && value) field.value = value.slice(0, MAX);
    });

    var ref = form.querySelector('input[name="referrer"]');
    if (ref && referrerHost && referrerHost !== window.location.hostname) ref.value = referrerHost.slice(0, MAX);

    // Consent is "No" unless the visitor ticks the box themselves.
    var box = form.querySelector('input[name="marketing_opt_in"]');
    var consent = form.querySelector('input[name="marketing_consent"]');
    if (box && consent) {
      var sync = function () { consent.value = box.checked ? "Yes" : "No"; };
      box.addEventListener("change", sync);
      sync();
    }
  });
})();
