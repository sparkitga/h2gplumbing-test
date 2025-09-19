// Simple JS to wire Calendly URL + year + popup widget + mobile menu toggle
(function(){
  const cfg = window.SITE_CONFIG || {};
  const url = cfg.calendlyUrl || "https://calendly.com/your-handle/intro-call";

  // Update inline widget if present
  const inline = document.querySelector(".calendly-inline-widget");
  if (inline && !inline.getAttribute("data-url")) {
    inline.setAttribute("data-url", url);
  }

  // Hook up CTA
  const cta = document.getElementById("book-now");
  if (cta) {
    cta.href = url;
    cta.addEventListener("click", function(e){
      e.preventDefault();
      if (window.Calendly) {
        Calendly.initPopupWidget({ url });
      } else {
        window.location.href = url;
      }
    });
  }

  // Fallback link
  const fallback = document.getElementById("calendly-fallback");
  if (fallback) fallback.href = url;

  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === Mobile Menu Toggle ===
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggle.setAttribute(
        "aria-expanded",
        nav.classList.contains("show") ? "true" : "false"
      );
    });
  }
})();
